import { getSiteById } from '../data/sites/index.js'
import { t } from '../i18n.js'

const BASE_URL = import.meta.env.BASE_URL

function phoneIconHTML() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true" class="spot-contact-group-icon-svg">
      <path d="M5.5 4.5h3l1.2 4.1-1.9 1.9a15.6 15.6 0 0 0 5.7 5.7l1.9-1.9 4.1 1.2v3a1.5 1.5 0 0 1-1.6 1.5A16.4 16.4 0 0 1 4 6.1 1.5 1.5 0 0 1 5.5 4.5Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
}

function shuttleIconHTML() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true" class="spot-contact-group-icon-svg">
      <path d="M7 17V8.5A2.5 2.5 0 0 1 9.5 6h5A2.5 2.5 0 0 1 17 8.5V17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 12h10" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M9.5 9.5h.01M14.5 9.5h.01" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M6 17h12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M9 17v2M15 17v2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>
  `
}

export function renderTabSiti(siteId, lang = 'it') {
  const site = getSiteById(siteId)
  if (!site) return `
    <div class="empty-state">
      <p class="empty-state-text">${t(lang, 'selectSite')}</p>
    </div>`

  return `
    ${headerHTML(site, lang)}
    ${alertsCardHTML(site, lang)}
    ${spotTabsHTML(site, lang)}
    ${site.notes ? `<div class="notes-card">${site.notes}</div>` : ''}
    ${widgetCardHTML(t(lang, 'weatherInfo'), '', meteoLinksHTML(site, lang), lang)}
  `
}

// ── Header ────────────────────────────────────────────────────────────────────

function headerHTML(site, lang) {
  const windLabel = site.windDirs.length ? site.windDirs.join('/') : '—'

  const actionLinks = [
    site.website  ? `<a href="${site.website}"  target="_blank" rel="noopener" class="spot-action-link spot-action-link--site">${t(lang, 'website')}</a>`         : '',
    site.joinUrl  ? `<a href="${site.joinUrl}"  target="_blank" rel="noopener" class="spot-action-link spot-action-link--join">${t(lang, 'join')}</a>`    : '',
    site.rulesUrl ? `<a href="${site.rulesUrl}" target="_blank" rel="noopener" class="spot-action-link spot-action-link--rules">${t(lang, 'rules')}</a>`  : '',
  ].filter(Boolean)

  return `
    <div class="spot-header">
      <div class="spot-header-top">
        <div class="spot-header-left">
          <h2 class="spot-title">${site.name}</h2>
          <p class="spot-subtitle">${site.altitude} s.l.m. · Vento: ${windLabel} · ${site.province}</p>
        </div>
        ${actionLinks.length ? `<div class="spot-header-actions">${actionLinks.join('')}</div>` : ''}
      </div>
      <div class="spot-header-divider"></div>
      ${(site.contacts?.length || site.shuttle?.phone) ? `
        <div class="spot-contacts">
          ${site.contacts?.length ? `
            <div class="spot-contact-group">
              <div class="spot-contact-group-icon spot-contact-group-icon--contacts">${phoneIconHTML()}</div>
              <div class="spot-contact-group-body">
                <div class="spot-contact-group-label">${t(lang, 'contacts')}</div>
                <div class="spot-contact-lines">
                  ${site.contacts.map(c => `
                    <a href="tel:${c.phone.replace(/\s/g,'')}" class="spot-contact-link">
                      <span class="spot-contact-link-text">${c.label}</span>
                      <strong>${c.phone}</strong>
                    </a>
                  `).join('')}
                </div>
              </div>
            </div>
          ` : ''}
          ${site.shuttle?.phone ? `
            <div class="spot-contact-group spot-contact-group--shuttle">
              <div class="spot-contact-group-icon spot-contact-group-icon--shuttle">${shuttleIconHTML()}</div>
              <div class="spot-contact-group-body">
                <div class="spot-contact-group-label">${t(lang, 'shuttle')}</div>
                <a href="tel:${site.shuttle.phone.replace(/\s/g,'')}" class="spot-contact-link spot-contact-link--shuttle">
                  <span class="spot-contact-link-text">${site.shuttle.contactLabel || site.shuttle.label || t(lang, 'shuttle')}</span>
                  <strong>${site.shuttle.phone}</strong>
                </a>
              </div>
            </div>
          ` : ''}
        </div>
      ` : ''}
    </div>
  `
}

function alertsCardHTML(site, lang = 'it') {
  const alerts = site.alerts ?? []
  if (!alerts.length) return ''

  return `
    <section class="alert-card">
      <div class="alert-card-header">
        <div class="section-title section-title--alert">
          <span class="alert-card-icon">!</span>
          <span>${t(lang, 'alerts')}</span>
        </div>
      </div>
      <div class="alert-list">
        ${alerts.map(alert => `
          <div class="alert-item">
            ${alert.title ? `<div class="alert-item-title">${alert.title}</div>` : ''}
            <p class="alert-item-text">${alert.message ?? alert}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `
}

// ── Spot tabs: Decolli / Atterraggio ─────────────────────────────────────────

function spotTabsHTML(site, lang) {
  const takeoffs = site.takeoffs ?? []
  const landing  = site.landing  ?? null

  return `
    <div class="spot-tabs-wrapper">
      <div class="spot-tabs" role="tablist">
        <button class="spot-tab active" data-spot-tab="decolli">
          ${t(lang, 'takeoffs')} <span class="spot-tab-count">${takeoffs.length}</span>
        </button>
        <button class="spot-tab" data-spot-tab="atterraggio">
          ${t(lang, 'landing')}
        </button>
      </div>

      <div class="spot-tab-panel active" data-spot-panel="decolli">
        ${takeoffs.length
          ? `<div class="spot-cards-grid">
               ${takeoffs.map(takeoff => takeoffCardHTML(takeoff, site, lang)).join('')}
             </div>`
          : `<div class="empty-state" style="padding:32px"><p class="empty-state-text">${t(lang, 'noTakeoffs')}</p></div>`
        }
      </div>

      <div class="spot-tab-panel" data-spot-panel="atterraggio">
        ${landing
          ? `<div class="spot-cards-grid">${landingCardHTML(landing, site, lang)}</div>`
          : `<div class="empty-state" style="padding:32px"><p class="empty-state-text">${t(lang, 'noLanding')}</p></div>`
        }
      </div>
    </div>
  `
}

function takeoffCardHTML(takeoff, site, lang = 'it') {
  // Cerca webcam associata a questo decollo per nome
  const webcam = site.webcams?.find(w =>
    w.label.toLowerCase().includes(takeoff.name.toLowerCase().split('–')[0].trim().toLowerCase()) ||
    takeoff.name.toLowerCase().includes(w.label.toLowerCase().split('–')[0].trim().toLowerCase())
  ) ?? null

  return `
    <div class="spot-card">
      <div class="spot-card-header">
        <div class="spot-card-title-row">
          <div>
            <div class="spot-card-name">${takeoff.name}</div>
            <div class="spot-card-meta">${takeoff.type ?? ''}</div>
          </div>
        </div>
        <div class="spot-card-badges">
          ${takeoff.altitude  ? `<span class="badge badge-blue">${takeoff.altitude} m</span>` : ''}
          ${takeoff.windDirs?.length ? `<span class="badge badge-gray">↙ ${takeoff.windDirs.join('/')}</span>` : ''}
          ${takeoff.season    ? `<span class="badge badge-gray">${takeoff.season}</span>` : ''}
        </div>
      </div>

      ${webcam ? webcamInlineHTML(webcam, lang) : noWebcamHTML(lang)}

      ${takeoff.mapsUrl ? `
        <a href="${takeoff.mapsUrl}" target="_blank" rel="noopener" class="spot-maps-btn">
          ${t(lang, 'navigateTakeoff')}
        </a>
      ` : ''}
    </div>
  `
}

function landingCardHTML(l, site, lang = 'it') {
  const webcam = site.webcams?.find(w =>
    w.label.toLowerCase().includes('atterr') ||
    w.label.toLowerCase().includes('salto')
  ) ?? null

  return `
    <div class="spot-card">
      <div class="spot-card-header">
        <div class="spot-card-title-row">
          <div>
            <div class="spot-card-name">${l.name}</div>
            ${l.altitude ? `<div class="spot-card-meta">${l.altitude} m s.l.m.</div>` : ''}
          </div>
        </div>
      </div>

      ${webcam ? webcamInlineHTML(webcam, lang) : noWebcamHTML(lang)}

      ${l.mapsUrl ? `
        <a href="${l.mapsUrl}" target="_blank" rel="noopener" class="spot-maps-btn">
          ${t(lang, 'navigateLanding')}
        </a>
      ` : ''}
    </div>
  `
}

function noWebcamHTML(lang = 'it') {
  return `
    <div class="spot-no-webcam">
      <img src="${BASE_URL}no-webcam.svg" alt="Nessuna webcam" class="no-webcam-icon" />
      <span>${t(lang, 'noWebcam')}</span>
    </div>
  `
}

function webcamInlineHTML(cam, lang = 'it') {
  if (cam.type === 'jpg') {
    const src = cam.embedUrl ?? cam.url
    return `
      <div class="spot-webcam">
        <div class="spot-webcam-feed">
          <img class="webcam-img" data-src="${src}" src="" alt="${cam.label}" />
          <div class="webcam-skeleton"></div>
          <div class="webcam-live"><span class="dot" style="width:5px;height:5px;background:#fff"></span>LIVE</div>
          <div class="webcam-overlay">
            <div class="webcam-overlay-title">${cam.label}</div>
          </div>
        </div>
        <div class="spot-webcam-footer">
          <span class="webcam-refresh-indicator" data-refresh="${cam.refreshSeconds ?? 120}">
            <span class="dot" style="background:var(--green)"></span>
            ${t(lang, 'refreshEvery', { value: formatInterval(cam.refreshSeconds ?? 120, lang) })}
          </span>
          <a href="${cam.url}" target="_blank" rel="noopener" class="webcam-open-link">${t(lang, 'open')}</a>
        </div>
      </div>
    `
  }
  if (cam.type === 'link') {
    return `
      <div class="spot-webcam-link">
        <a href="${cam.url}" target="_blank" rel="noopener">${cam.label}</a>
      </div>
    `
  }
  return ''
}

// ── Meteo ─────────────────────────────────────────────────────────────────────
function meteoLinksHTML(site, lang = 'it') {
  const links = [
    site.meteo?.meteoblue && { name: 'Meteoblue', tag: t(lang, 'forecast'), url: site.meteo.meteoblue },
    site.meteo?.meteoParapente && { name: 'Meteo Parapente', tag: t(lang, 'paragliderWeather'), url: site.meteo.meteoParapente },
    (site.meteo?.windyUrl || site.meteo?.windy) && { name: 'Windy', tag: t(lang, 'liveWind'), url: site.meteo.windyUrl || `https://www.windy.com/?wind,${site.lat},${site.lon},11` },
  ].filter(Boolean)

  if (!links.length) return `<div class="widget-empty">${t(lang, 'noContent')}</div>`

  return `
    <div class="meteo-links">
      ${links.map(l => `
        <a href="${l.url}" target="_blank" rel="noopener" class="meteo-link-item">
          <div class="meteo-link-info">
            <span class="meteo-link-name">${l.name}</span>
            <span class="meteo-link-tag">${l.tag}</span>
          </div>
        </a>
      `).join('')}
    </div>
  `
}

function widgetCardHTML(title, subtitle, content, lang = 'it') {
  return `
    <section class="widget-card">
      <div class="widget-card-header">
        <div class="section-title">${title}</div>
        ${subtitle ? `<p class="widget-card-subtitle">${subtitle}</p>` : ''}
      </div>
      ${content ? content : `<div class="widget-empty">${t(lang, 'noContent')}</div>`}
    </section>
  `
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatInterval(sec, lang = 'it') {
  if (sec < 60) return `${sec}s`
  if (sec < 3600) return `${Math.round(sec / 60)} ${lang === 'en' ? 'min' : 'min'}`
  return `${Math.round(sec / 3600)}h`
}

// ── Init spot tabs (chiamato da main.js dopo il render) ───────────────────────

export function initSpotTabs(container) {
  container.querySelectorAll('.spot-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.dataset.spotTab
      container.querySelectorAll('.spot-tab').forEach(b => b.classList.remove('active'))
      container.querySelectorAll('.spot-tab-panel').forEach(p => p.classList.remove('active'))
      btn.classList.add('active')
      container.querySelector(`[data-spot-panel="${panel}"]`)?.classList.add('active')
    })
  })
}
