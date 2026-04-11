import './styles/main.css'

import { Sidebar }                                    from './components/Sidebar.js'
import { renderTabSiti, initSpotTabs }               from './components/TabSiti.js'
import { initWebcamBehavior, clearWebcamTimers } from './components/TabWebcam.js'
import { sites }                                      from './data/sites/index.js'
import { t, translations }                            from './i18n.js'

// ── Stato ────────────────────────────────────────────────────────────────────
function getSiteIdFromHash() {
  const id = window.location.hash.slice(1)
  return id && sites.find(s => s.id === id) ? id : null
}

const state = {
  activeSiteId: getSiteIdFromHash() ?? sites[0]?.id ?? null,
  lang: localStorage.getItem('paraglidepot-lang') === 'en' ? 'en' : 'it',
}

// ── Elementi DOM ─────────────────────────────────────────────────────────────
const sidebarEl = document.getElementById('sidebar')
const mainEl    = document.getElementById('main-content')
const taglineEl = document.getElementById('topbar-tagline')
const langSwitchEl = document.getElementById('lang-switch')

// ── Sidebar ──────────────────────────────────────────────────────────────────
const sidebar = new Sidebar(sidebarEl, state.lang)
sidebar.render()
sidebar.selectSite(state.activeSiteId)

sidebarEl.addEventListener('site-select', e => {
  state.activeSiteId = e.detail.siteId
  history.replaceState(null, '', `#${state.activeSiteId}`)
  renderMain()
})

window.addEventListener('hashchange', () => {
  const siteId = getSiteIdFromHash()
  if (siteId && siteId !== state.activeSiteId) {
    state.activeSiteId = siteId
    sidebar.selectSite(siteId)
    renderMain()
  }
})

langSwitchEl?.addEventListener('click', e => {
  const btn = e.target.closest('[data-lang]')
  if (!btn) return
  const nextLang = btn.dataset.lang
  if (!nextLang || nextLang === state.lang) return
  state.lang = nextLang
  localStorage.setItem('paraglidepot-lang', state.lang)
  sidebar.setLanguage(state.lang)
  renderChrome()
  renderMain()
})

// ── Render ───────────────────────────────────────────────────────────────────
function renderMain() {
  clearWebcamTimers()
  const html = renderTabSiti(state.activeSiteId, state.lang)
  mainEl.innerHTML = `<div class="tab-panel active">${html}</div>`
  initSpotTabs(mainEl)
  initWebcamBehavior(mainEl)
  lazyLoadIframes()
}

function renderChrome() {
  document.documentElement.lang = translations[state.lang].htmlLang
  document.title = t(state.lang, 'title')
  if (taglineEl) taglineEl.textContent = t(state.lang, 'tagline')

  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) metaDescription.setAttribute('content', t(state.lang, 'metaDescription'))

  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) ogDescription.setAttribute('content', t(state.lang, 'ogDescription'))

  langSwitchEl?.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === state.lang)
  })
}

// ── Lazy load iframe ─────────────────────────────────────────────────────────
function lazyLoadIframes() {
  const iframes = mainEl.querySelectorAll('iframe[data-src]')
  if (!iframes.length) return

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const iframe = entry.target
        iframe.src = iframe.dataset.src
        delete iframe.dataset.src
        obs.unobserve(iframe)
      }
    })
  }, { rootMargin: '100px' })

  iframes.forEach(iframe => observer.observe(iframe))
}

// ── Bootstrap ────────────────────────────────────────────────────────────────
if (state.activeSiteId && !window.location.hash) {
  history.replaceState(null, '', `#${state.activeSiteId}`)
}
renderChrome()
renderMain()
