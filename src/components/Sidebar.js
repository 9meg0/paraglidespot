import { getSitesByRegion } from '../data/sites/index.js'
import { t } from '../i18n.js'

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

    if (this.currentRegion === 'tutti') {
      const piemonte = sites.filter(s => s.region === 'piemonte')
      const liguria  = sites.filter(s => s.region === 'liguria')
      container.innerHTML = `
        ${this._sectionHTML(t(this.lang, 'piedmont'), piemonte)}
        ${this._sectionHTML(t(this.lang, 'liguria'), liguria)}
      `
    } else {
      const label = this.currentRegion === 'piemonte' ? t(this.lang, 'piedmont') : t(this.lang, 'liguria')
      container.innerHTML = this._sectionHTML(label, sites)
    }

    this._bindSiteItems()
  }

  _sectionHTML(label, sites) {
    return `
      <div class="sidebar-region-section">
        <div class="sidebar-section-title" style="margin-top:12px">${label}</div>
        <div class="site-list">
          ${sites.map(s => this._siteItemHTML(s)).join('')}
        </div>
      </div>
    `
  }

  _siteItemHTML(site) {
    const isActive = site.id === this.currentSiteId
    // Colore placeholder vento — sarà sostituito da dati reali quando disponibili
    const statusClass = 'status-gray'
    return `
      <div
        class="site-item ${isActive ? 'active' : ''}"
        data-site-id="${site.id}"
        role="button"
        tabindex="0"
        aria-label="${site.name}"
      >
        <span class="site-status ${statusClass}"></span>
        <div class="site-info">
          <div class="site-name">${site.name}</div>
          <div class="site-meta">${site.altitude} · ${site.windDirs.join('/')}</div>
        </div>
        <div class="site-wind" style="color:var(--text3)">—</div>
      </div>
    `
  }

  _bindRegionSelect() {
    this.el.querySelector('#region-select')?.addEventListener('change', e => {
      this.currentRegion = e.target.value
      this._renderSiteList()
    })
  }

  _bindSiteItems() {
    this.el.querySelectorAll('.site-item').forEach(item => {
      const activate = () => {
        this.currentSiteId = item.dataset.siteId
        this.el.querySelectorAll('.site-item').forEach(i => i.classList.remove('active'))
        item.classList.add('active')
        this.el.dispatchEvent(new CustomEvent('site-select', {
          bubbles: true,
          detail: { siteId: item.dataset.siteId },
        }))
      }
      item.addEventListener('click', activate)
      item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') activate() })
    })
  }

  /** Seleziona un sito programmaticamente (es. primo della lista all'avvio) */
  selectSite(siteId) {
    this.currentSiteId = siteId
    this._renderSiteList()
  }

  setLanguage(lang) {
    this.lang = lang
    this.render()
  }
}
