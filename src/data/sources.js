/**
 * Sorgenti meteo globali (non legate a un sito specifico).
 * Usate nella tab "Mappe meteo" e come riferimento generale.
 *
 * type:
 *   'windy-embed'   → iframe con API embed di Windy
 *   'meteoblue-embed' → widget embed di Meteoblue
 *   'link'          → link esterno (niente iframe, X-Frame-Options bloccante)
 *   'iframe'        → iframe generico (verificare che il sito lo consenta)
 */

export const globalSources = [
  {
    id: 'windy-surface',
    name: 'Windy — Vento in quota',
    description: 'Vento 850hPa e superficie, ottimo per leggere il flusso generale',
    type: 'windy-embed',
    tag: 'Vento',
    icon: '🌬',
    color: '#1e40af',
    embed: {
      lat: 44.4,
      lon: 7.9,
      zoom: 8,
      overlay: 'wind',    // wind | rain | clouds | temp | pressure
      level: '850h',
    },
    updateInterval: '15 min',
    url: 'https://www.windy.com/?wind,850h,44.4,7.9,8',
  },
  {
    id: 'windy-rain',
    name: 'Windy — Precipitazioni',
    description: 'Mappa precipitazioni per identificare celle temporalesche',
    type: 'windy-embed',
    tag: 'Pioggia',
    icon: '🌧',
    color: '#0369a1',
    embed: {
      lat: 44.4,
      lon: 7.9,
      zoom: 8,
      overlay: 'rain',
    },
    updateInterval: '15 min',
    url: 'https://www.windy.com/?rain,44.4,7.9,8',
  },
  {
    id: 'meteoblue-multimodel',
    name: 'Meteoblue — Multimodello',
    description: 'Confronto modelli GFS, ECMWF, ICON per ridurre incertezza',
    type: 'meteoblue-embed',
    tag: 'Multimodello',
    icon: '📊',
    color: '#0f766e',
    embed: {
      // Widget Meteoblue — richiede di specificare la location
      widgetType: 'meteogram',
      lat: 44.26,
      lon: 7.83,
      asl: 1100,
      tz: 'Europe/Rome',
      lang: 'it',
    },
    updateInterval: '3–6 ore',
    url: 'https://www.meteoblue.com/it/tempo/settimana/mondovi_italia_3172928',
  },
  {
    id: 'arpa-piemonte',
    name: 'ARPA Piemonte',
    description: 'Bollettino ufficiale previsioni montagna Piemonte',
    type: 'link',
    tag: 'Ufficiale',
    icon: '🏛',
    color: '#7c3aed',
    url: 'https://www.arpa.piemonte.it/rischinaturali/tematismi/meteo/previsioni/bollettini',
    updateInterval: '2× giorno',
  },
  {
    id: 'arpa-liguria',
    name: 'ARPAL Liguria',
    description: 'Bollettino e avvisi meteo ufficiali Liguria',
    type: 'link',
    tag: 'Ufficiale',
    icon: '🏛',
    color: '#7c3aed',
    url: 'https://www.arpal.liguria.it/homepage/meteo/previsioni.html',
    updateInterval: '2× giorno',
  },
  {
    id: 'xcmeteor',
    name: 'XCMeteor',
    description: 'Indice di volabilità orario, BL height, termiche — specifico per parapendio',
    type: 'link',
    tag: 'XC-specifico',
    icon: '🪂',
    color: '#b45309',
    url: 'https://www.xcmeteor.com/',
    updateInterval: 'Mattutino',
  },
  {
    id: 'skysight',
    name: 'SkySight',
    description: 'Boundary Layer, CAPE, OD potential, task planning per XC',
    type: 'link',
    tag: 'Soaring',
    icon: '🛸',
    color: '#0e7490',
    url: 'https://skysight.io/',
    updateInterval: 'Mattutino',
  },
  {
    id: 'topmeteo',
    name: 'TopMeteo',
    description: 'Emagrammi, sondaggi verticali, previsione zero termico',
    type: 'link',
    tag: 'Quota',
    icon: '🌡',
    color: '#be123c',
    url: 'https://www.topmeteo.eu/index.php?lang=it',
    updateInterval: 'ECMWF 12z',
  },
  {
    id: 'aeronautica',
    name: 'Aeronautica Militare',
    description: 'TAF e METAR per aeroporti vicini (Cuneo, Torino, Genova)',
    type: 'link',
    tag: 'METAR',
    icon: '✈️',
    color: '#374151',
    url: 'https://www.meteoam.it/',
    updateInterval: 'Ogni ora',
  },
]

/** Sorgenti embeddabili come iframe (Windy, Meteoblue) */
export const embedSources = globalSources.filter(
  s => s.type === 'windy-embed' || s.type === 'meteoblue-embed' || s.type === 'iframe'
)

/** Sorgenti come link esterno */
export const linkSources = globalSources.filter(s => s.type === 'link')

/**
 * Genera l'URL per l'embed iframe di Windy
 * @param {object} cfg - oggetto embed da sources.js
 */
export function windyEmbedUrl({ lat, lon, zoom = 9, overlay = 'wind', level = 'surface' }) {
  const params = new URLSearchParams({
    lat,
    lon,
    zoom,
    overlay,
    level,
    product: 'ecmwf',
    lang: 'it',
  })
  return `https://embed.windy.com/embed2.html?${params}`
}

/**
 * Genera l'URL per il widget Meteoblue
 * @param {object} cfg - oggetto embed da sources.js
 */
export function meteoblueWidgetUrl({ lat, lon, asl = 500, tz = 'Europe/Rome', lang = 'it' }) {
  return `https://www.meteoblue.com/it/tempo/widget/meteogramma?lat=${lat}&lon=${lon}&asl=${asl}&tz=${encodeURIComponent(tz)}&lang=${lang}&no_forecast_link=0`
}
