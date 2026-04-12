// Timer di refresh attivi — cancellati ad ogni re-render
const activeRefreshTimers = new Set()
const activeObservers = new Set()

const BASE_URL = import.meta.env.BASE_URL

export function clearWebcamTimers() {
  activeRefreshTimers.forEach(id => clearInterval(id))
  activeRefreshTimers.clear()
  activeObservers.forEach(observer => observer.disconnect())
  activeObservers.clear()
}

/**
 * Attiva lazy load e auto-refresh per tutte le webcam nel container.
 * @param {HTMLElement} container
 */
export function initWebcamBehavior(container) {
  const lazyEls = container.querySelectorAll('[data-src]')
  if (!lazyEls.length) return

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      const el = entry.target

      if (el.tagName === 'IMG') {
        loadJpgCam(el)
      } else if (el.tagName === 'IFRAME') {
        el.src = el.dataset.src
        delete el.dataset.src
        el.addEventListener('load', () => checkIframeLoaded(el), { once: true })
      }

      obs.unobserve(el)
    })
  }, { rootMargin: '150px' })

  activeObservers.add(observer)
  lazyEls.forEach(el => observer.observe(el))
}

function loadJpgCam(img) {
  const src = img.dataset.src
  if (!src) return

  const skeleton = img.parentElement?.querySelector('.webcam-skeleton')
  const indicator = img.closest('[data-refresh]') ?? img.parentElement?.querySelector('[data-refresh]')
  const refreshSec = Number(indicator?.dataset.refresh ?? 120)

  const tmp = new Image()
  tmp.onload = () => {
    img.src = src
    skeleton?.remove()
    startRefreshTimer(img, src, refreshSec)
  }
  tmp.onerror = () => showCamError(img)
  tmp.src = src
  delete img.dataset.src
}

function startRefreshTimer(img, src, refreshSec) {
  const timerId = setInterval(() => {
    const base = img.dataset.baseSrc ?? src
    img.dataset.baseSrc = base
    const refreshSrc = base + `?t=${Date.now()}`

    const tmp2 = new Image()
    tmp2.onload = () => {
      img.src = refreshSrc
      const ind = img.closest('.spot-webcam')?.querySelector('.webcam-refresh-indicator')
      if (ind) flashRefreshIndicator(ind)
    }
    tmp2.onerror = () => {
      clearInterval(timerId)
      activeRefreshTimers.delete(timerId)
      showCamError(img)
    }
    tmp2.src = refreshSrc
  }, refreshSec * 1000)

  activeRefreshTimers.add(timerId)
}

function checkIframeLoaded(iframe) {
  try {
    const doc = iframe.contentDocument
    if (!doc || doc.URL === 'about:blank') throw new Error('blocked')
  } catch {
    iframe.style.display = 'none'
    const fallback = iframe.closest('.webcam-feed')?.querySelector('.webcam-iframe-fallback')
    if (fallback) fallback.style.display = 'flex'
  }
}

function showCamError(img) {
  const feed = img.closest('.webcam-feed, .spot-webcam-feed')
  if (!feed) return
  if (feed.querySelector('.webcam-offline')) return
  img.style.display = 'none'
  feed.querySelector('.webcam-skeleton')?.remove()

  const err = document.createElement('div')
  err.className = 'webcam-offline'
  const icon = document.createElement('img')
  icon.src = `${BASE_URL}no-webcam.svg`
  icon.alt = img.dataset.errorLabel || 'Unavailable'
  icon.style.width = '48px'
  icon.style.height = '48px'
  icon.style.opacity = '.5'

  const label = document.createElement('span')
  label.textContent = img.dataset.errorLabel || 'Unavailable'

  err.append(icon, label)
  feed.appendChild(err)
}

function flashRefreshIndicator(el) {
  el.style.opacity = '0.4'
  setTimeout(() => { el.style.opacity = '1' }, 400)
}
