/**
 * Registro delle località — auto-discovery.
 *
 * Per AGGIUNGERE una località:
 *   1. cp src/data/sites/_template.json src/data/sites/nome-localita.json
 *   2. Compila i campi nel nuovo file
 *   ✅ Fine — nessun altro file da toccare.
 *
 * Per RIMUOVERE una località:
 *   1. Cancella il file della località
 *   ✅ Fine — sparisce automaticamente.
 *
 * I file che iniziano con '_' (es. _template.json) sono ignorati.
 */

import { validateSite } from './schema.js'

// Vite import.meta.glob: include tutti i .json nella cartella eccetto _*.json
const modules = import.meta.glob('./[!_]*.json', { eager: true, import: 'default' })

const sitesWithSource = Object.entries(modules)
  .filter(([, site]) => Boolean(site))
  .map(([path, site]) => ({ path, site }))

const validationErrors = sitesWithSource.flatMap(({ path, site }) => validateSite(site, path))

if (validationErrors.length) {
  throw new Error(`Invalid site data:\n- ${validationErrors.join('\n- ')}`)
}

/** @type {Site[]} */
export const sites = sitesWithSource
  .map(({ site }) => site)
  .sort((a, b) => a.name.localeCompare(b.name, 'it'))

// ── Helpers ───────────────────────────────────────────────────────────────────

/** @param {'piemonte'|'liguria'|'tutti'} region */
export function getSitesByRegion(region) {
  if (region === 'tutti') return sites
  return sites.filter(s => s.region === region)
}

/** @param {string} id */
export function getSiteById(id) {
  return sites.find(s => s.id === id) ?? null
}

// ── Tipi (JSDoc) ──────────────────────────────────────────────────────────────

/**
 * @typedef {Object} Site
 * @property {string}   id            - Slug unico (es. 'santa-elisabetta')
 * @property {string}   name          - Nome visualizzato
 * @property {'piemonte'|'liguria'} region
 * @property {string}   province      - Sigla provincia (es. 'TO')
 * @property {string}   [website]     - URL sito ufficiale
 * @property {string}   [joinUrl]     - URL iscrizione al club
 * @property {string}   [rulesUrl]    - URL regolamento
 * @property {Contact[]} [contacts]   - Contatti telefonici
 * @property {string}   altitude      - Range quota testuale (es. '398–1400 m')
 * @property {string[]} windDirs      - Direzioni vento favorevoli
 * @property {number}   lat           - Latitudine decollo principale
 * @property {number}   lon           - Longitudine decollo principale
 * @property {Takeoff[]} [takeoffs]   - Decolli
 * @property {Landing}  [landing]     - Atterraggio principale
 * @property {Webcam[]} webcams       - Webcam (0 o più)
 * @property {MeteoLinks} meteo       - Link meteo specifici per la località
 * @property {ShuttleService} [shuttle] - Info servizio navetta
 * @property {Alert[]} [alerts]       - Avvisi o note importanti in evidenza
 * @property {string}   [notes]       - Nota libera mostrata in fondo alla scheda
 */

/**
 * @typedef {Object} Contact
 * @property {string} label  - Es. 'Italiano (Flavio)'
 * @property {string} phone  - Es. '347 242 4494'
 */

/**
 * @typedef {Object} Takeoff
 * @property {string}   name       - Nome del decollo
 * @property {number}   [lat]
 * @property {number}   [lon]
 * @property {number}   [altitude] - Quota in metri
 * @property {string[]} [windDirs] - Orientamenti
 * @property {string}   [type]     - Descrizione (es. 'Facile · parapendio')
 * @property {string}   [season]   - Periodo utilizzo
 * @property {string}   [mapsUrl]  - Link Google Maps navigazione
 */

/**
 * @typedef {Object} Landing
 * @property {string} name
 * @property {number} [lat]
 * @property {number} [lon]
 * @property {number} [altitude]
 * @property {string} [mapsUrl]
 * @property {string} [notes]
 */

/**
 * @typedef {Object} Webcam
 * @property {string} label
 * @property {string} url          - Link sempre visibile (apri ↗)
 * @property {'jpg'|'iframe'|'link'} type
 * @property {string} [embedUrl]   - URL diretto JPEG (solo type:'jpg')
 * @property {number} [refreshSeconds]
 */

/**
 * @typedef {Object} MeteoLinks
 * @property {{lat:number,lon:number,zoom:number,overlay:string}|null} [windy]
 * @property {string|null} [windyUrl]
 * @property {string|null} [meteoblue]
 * @property {string|null} [meteoParapente]
 * @property {string|null} [xcmeteor]
 * @property {string|null} [skysight]
 * @property {string|null} [arpa]
 */

/**
 * @typedef {Object} ShuttleService
 * @property {string} label
 * @property {string} contactLabel
 * @property {string} phone
 */

/**
 * @typedef {Object} Alert
 * @property {string} [title]
 * @property {string} message
 */
