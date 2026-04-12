import { getSitesByRegion } from '../data/sites/index.js'
import { t } from '../i18n.js'
import { escapeAttribute, escapeHtml } from '../utils/dom.js'

/**
 * Sidebar con filtro regione e lista siti.
 * Emette un evento custom 'site-select' quando l'utente clicca un sito.
 */
export class Sidebar {
  /** @param {HTMLElement} el */
  constructor(el, lang = 'it') {
    this.el = el
    this.currentRegion = 'piemonte'
    this.currentSiteId = null
    this.lang = lang
  }

  render() {
    this.el.innerHTML = `
      <div>
        <div class="sidebar-section-title">${t(this.lang, 'region')}</div>
        <select class="region-select" id="region-select" aria-label="${t(this.lang, 'region')}">
          <option value="piemonte" ${this.currentRegion === 'piemonte' ? 'selected' : ''}>${t(this.lang, 'piedmont')}</option>
          <option value="liguria" ${this.currentRegion === 'liguria' ? 'selected' : ''}>${t(this.lang, 'liguria')}</option>
          <option value="tutti" ${this.currentRegion === 'tutti' ? 'selected' : ''}>${t(this.lang, 'all')}</option>
        </select>
      </div>
      <div id="site-list-container"></div>
    `
    this._renderSiteList()
    this._bindRegionSelect()
  }

  _renderSiteList() {
    const container = this.el.querySelector('#site-list-container')
    const sites = getSitesByRegion(this.currentRegion)
    const activeSiteInRegion = sites.some(site => site.id === this.currentSiteId)

    if (this.currentRegion === 'tutti') {
      const piemonte = sites.filter(s => s.region === 'piemonte')
      const liguria  = sites.filter(s => s.region === 'liguria')
      container.innerHTML = `
        ${this._mobileSelectHTML(piemonte, liguria, activeSiteInRegion)}
        ${this._sectionHTML(t(this.lang, 'piedmont'), piemonte)}
        ${this._sectionHTML(t(this.lang, 'liguria'), liguria)}
      `
    } else {
      const label = this.currentRegion === 'piemonte' ? t(this.lang, 'piedmont') : t(this.lang, 'liguria')
      container.innerHTML = `
        ${this._mobileSelectHTML(sites, [], activeSiteInRegion)}
        ${this._sectionHTML(label, sites)}
      `
    }

    this._bindSiteItems()
    this._bindMobileSelect()
  }

  _mobileSelectHTML(primarySites, secondarySites = [], activeSiteInRegion = true) {
    const selectedId = activeSiteInRegion ? this.currentSiteId : primarySites[0]?.id ?? secondarySites[0]?.id ?? ''

    const optionHTML = site => `
      <option value="${escapeAttribute(site.id)}" ${site.id === selectedId ? 'selected' : ''}>${escapeHtml(site.name)}</option>
    `

    const groupedOptions = secondarySites.length
      ? `
        <optgroup label="${t(this.lang, 'piedmont')}">
          ${primarySites.map(optionHTML).join('')}
        </optgroup>
        <optgroup label="${t(this.lang, 'liguria')}">
          ${secondarySites.map(optionHTML).join('')}
        </optgroup>
      `
      : primarySites.map(optionHTML).join('')

    return `
      <div class="mobile-site-picker">
        <div class="sidebar-section-title">${t(this.lang, 'site')}</div>
        <select class="region-select mobile-site-select" id="site-select-mobile" aria-label="${t(this.lang, 'site')}">
          ${groupedOptions}
        </select>
      </div>
    `
  }

  _sectionHTML(label, sites) {
    return `
      <div class="sidebar-region-section">
        <div class="sidebar-section-title" style="margin-top:12px">${escapeHtml(label)}</div>
        <div class="site-list">
          ${sites.map(s => this._siteItemHTML(s)).join('')}
        </div>
      </div>
    `
  }

  _siteItemHTML(site) {
    const isActive = site.id === this.currentSiteId
    const siteName = escapeHtml(site.name)
    const altitude = escapeHtml(site.altitude)
    const windDirs = escapeHtml(site.windDirs.join('/'))
    const siteId = escapeAttribute(site.id)
    // Colore placeholder vento — sarà sostituito da dati reali quando disponibili
    const statusClass = 'status-gray'
    return `
      <div
        class="site-item ${isActive ? 'active' : ''}"
        data-site-id="${siteId}"
        role="button"
        tabindex="0"
        aria-label="${siteName}"
      >
        <span class="site-status ${statusClass}"></span>
        <div class="site-info">
          <div class="site-name">${siteName}</div>
          <div class="site-meta">${altitude} · ${windDirs}</div>
        </div>
        <div class="site-wind" style="color:var(--text3)">—</div>
      </div>
    `
  }

  _bindRegionSelect() {
    this.el.querySelector('#region-select')?.addEventListener('change', e => {
      this.currentRegion = e.target.value
      this._renderSiteList()

      const sites = getSitesByRegion(this.currentRegion)
      if (sites.length && !sites.some(site => site.id === this.currentSiteId)) {
        this._activateSite(sites[0].id)
      }
    })
  }

  _bindMobileSelect() {
    this.el.querySelector('#site-select-mobile')?.addEventListener('change', e => {
      this._activateSite(e.target.value)
    })
  }

  _bindSiteItems() {
    this.el.querySelectorAll('.site-item').forEach(item => {
      const activate = () => this._activateSite(item.dataset.siteId)
      item.addEventListener('click', activate)
      item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') activate() })
    })
  }

  _activateSite(siteId) {
    this.currentSiteId = siteId
    this.el.querySelectorAll('.site-item').forEach(item => {
      item.classList.toggle('active', item.dataset.siteId === siteId)
    })

    const mobileSelect = this.el.querySelector('#site-select-mobile')
    if (mobileSelect && mobileSelect.value !== siteId) {
      mobileSelect.value = siteId
    }

    this.el.dispatchEvent(new CustomEvent('site-select', {
      bubbles: true,
      detail: { siteId },
    }))
  }

  /** Seleziona un sito programmaticamente (es. primo della lista all'avvio) */
  selectSite(siteId) {
    this.currentSiteId = siteId
    this.currentRegion = this._resolveRegionForSite(siteId)
    this._renderSiteList()
  }

  setLanguage(lang) {
    this.lang = lang
    this.render()
  }

  _resolveRegionForSite(siteId) {
    const regionWithSite = ['piemonte', 'liguria', 'tutti']
      .find(region => getSitesByRegion(region).some(site => site.id === siteId))
    return regionWithSite && regionWithSite !== 'tutti' ? regionWithSite : this.currentRegion
  }
}
