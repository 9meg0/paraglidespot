/**
 * Runtime validation for site JSON files.
 * Keeps the app static while preventing malformed data from silently shipping.
 */

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value)
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0
}

function isOptionalString(value) {
  return value == null || typeof value === 'string'
}

function isOptionalNumber(value) {
  return value == null || typeof value === 'number'
}

function isStringArray(value) {
  return Array.isArray(value) && value.every(isNonEmptyString)
}

function check(condition, message, errors) {
  if (!condition) errors.push(message)
}

function validateContact(contact, index, errors) {
  check(isPlainObject(contact), `contacts[${index}] must be an object`, errors)
  if (!isPlainObject(contact)) return
  check(isNonEmptyString(contact.label), `contacts[${index}].label is required`, errors)
  check(isNonEmptyString(contact.phone), `contacts[${index}].phone is required`, errors)
}

function validateTakeoff(takeoff, index, errors) {
  check(isPlainObject(takeoff), `takeoffs[${index}] must be an object`, errors)
  if (!isPlainObject(takeoff)) return
  check(isNonEmptyString(takeoff.name), `takeoffs[${index}].name is required`, errors)
  check(isOptionalNumber(takeoff.lat), `takeoffs[${index}].lat must be a number when present`, errors)
  check(isOptionalNumber(takeoff.lon), `takeoffs[${index}].lon must be a number when present`, errors)
  check(isOptionalNumber(takeoff.altitude), `takeoffs[${index}].altitude must be a number when present`, errors)
  check(takeoff.windDirs == null || isStringArray(takeoff.windDirs), `takeoffs[${index}].windDirs must be an array of strings`, errors)
  check(isOptionalString(takeoff.type), `takeoffs[${index}].type must be a string when present`, errors)
  check(isOptionalString(takeoff.season), `takeoffs[${index}].season must be a string when present`, errors)
  check(isOptionalString(takeoff.mapsUrl), `takeoffs[${index}].mapsUrl must be a string when present`, errors)
}

function validateLanding(landing, errors) {
  check(isPlainObject(landing), 'landing must be an object', errors)
  if (!isPlainObject(landing)) return
  check(isNonEmptyString(landing.name), 'landing.name is required', errors)
  check(isOptionalNumber(landing.lat), 'landing.lat must be a number when present', errors)
  check(isOptionalNumber(landing.lon), 'landing.lon must be a number when present', errors)
  check(isOptionalNumber(landing.altitude), 'landing.altitude must be a number when present', errors)
  check(isOptionalString(landing.mapsUrl), 'landing.mapsUrl must be a string when present', errors)
  check(isOptionalString(landing.notes), 'landing.notes must be a string when present', errors)
}

function validateWebcam(webcam, index, errors) {
  check(isPlainObject(webcam), `webcams[${index}] must be an object`, errors)
  if (!isPlainObject(webcam)) return
  check(isNonEmptyString(webcam.label), `webcams[${index}].label is required`, errors)
  check(isNonEmptyString(webcam.url), `webcams[${index}].url is required`, errors)
  check(['jpg', 'iframe', 'link'].includes(webcam.type), `webcams[${index}].type must be one of jpg, iframe, link`, errors)
  check(isOptionalString(webcam.embedUrl), `webcams[${index}].embedUrl must be a string when present`, errors)
  check(webcam.refreshSeconds == null || Number.isFinite(webcam.refreshSeconds), `webcams[${index}].refreshSeconds must be a number when present`, errors)
}

function validateMeteo(meteo, errors) {
  check(isPlainObject(meteo), 'meteo must be an object', errors)
  if (!isPlainObject(meteo)) return
  check(isOptionalString(meteo.meteoblue), 'meteo.meteoblue must be a string when present', errors)
  check(isOptionalString(meteo.meteoParapente), 'meteo.meteoParapente must be a string when present', errors)
  check(isOptionalString(meteo.windyUrl), 'meteo.windyUrl must be a string when present', errors)

  if (meteo.windy != null) {
    check(isPlainObject(meteo.windy), 'meteo.windy must be an object when present', errors)
    if (isPlainObject(meteo.windy)) {
      check(typeof meteo.windy.lat === 'number', 'meteo.windy.lat must be a number', errors)
      check(typeof meteo.windy.lon === 'number', 'meteo.windy.lon must be a number', errors)
      check(typeof meteo.windy.zoom === 'number', 'meteo.windy.zoom must be a number', errors)
      check(isNonEmptyString(meteo.windy.overlay), 'meteo.windy.overlay must be a string', errors)
    }
  }
}

function validateAlert(alert, index, errors) {
  check(isPlainObject(alert), `alerts[${index}] must be an object`, errors)
  if (!isPlainObject(alert)) return
  check(isOptionalString(alert.title), `alerts[${index}].title must be a string when present`, errors)
  check(isNonEmptyString(alert.message), `alerts[${index}].message is required`, errors)
}

function validateShuttle(shuttle, errors) {
  check(isPlainObject(shuttle), 'shuttle must be an object', errors)
  if (!isPlainObject(shuttle)) return
  check(isNonEmptyString(shuttle.label), 'shuttle.label is required', errors)
  check(isNonEmptyString(shuttle.contactLabel), 'shuttle.contactLabel is required', errors)
  check(isNonEmptyString(shuttle.phone), 'shuttle.phone is required', errors)
}

export function validateSite(site, sourceLabel = 'unknown') {
  const errors = []

  check(isPlainObject(site), `${sourceLabel}: site must be an object`, errors)
  if (!isPlainObject(site)) return errors

  check(isNonEmptyString(site.id), `${sourceLabel}: id is required`, errors)
  check(isNonEmptyString(site.name), `${sourceLabel}: name is required`, errors)
  check(['piemonte', 'liguria'].includes(site.region), `${sourceLabel}: region must be piemonte or liguria`, errors)
  check(isNonEmptyString(site.province), `${sourceLabel}: province is required`, errors)
  check(isOptionalString(site.website), `${sourceLabel}: website must be a string when present`, errors)
  check(isOptionalString(site.joinUrl), `${sourceLabel}: joinUrl must be a string when present`, errors)
  check(isOptionalString(site.rulesUrl), `${sourceLabel}: rulesUrl must be a string when present`, errors)
  check(isNonEmptyString(site.altitude), `${sourceLabel}: altitude is required`, errors)
  check(isStringArray(site.windDirs), `${sourceLabel}: windDirs must be a non-empty array of strings`, errors)
  check(typeof site.lat === 'number', `${sourceLabel}: lat is required`, errors)
  check(typeof site.lon === 'number', `${sourceLabel}: lon is required`, errors)
  check(Array.isArray(site.webcams), `${sourceLabel}: webcams must be an array`, errors)
  check(isPlainObject(site.meteo), `${sourceLabel}: meteo is required`, errors)
  check(isOptionalString(site.notes), `${sourceLabel}: notes must be a string when present`, errors)

  if (Array.isArray(site.contacts)) {
    site.contacts.forEach((contact, index) => validateContact(contact, index, errors))
  } else if (site.contacts != null) {
    errors.push(`${sourceLabel}: contacts must be an array when present`)
  }

  if (Array.isArray(site.takeoffs)) {
    site.takeoffs.forEach((takeoff, index) => validateTakeoff(takeoff, index, errors))
  } else if (site.takeoffs != null) {
    errors.push(`${sourceLabel}: takeoffs must be an array when present`)
  }

  if (site.landing != null) validateLanding(site.landing, errors)
  if (Array.isArray(site.webcams)) site.webcams.forEach((webcam, index) => validateWebcam(webcam, index, errors))
  if (site.meteo != null) validateMeteo(site.meteo, errors)
  if (Array.isArray(site.alerts)) {
    site.alerts.forEach((alert, index) => validateAlert(alert, index, errors))
  } else if (site.alerts != null) {
    errors.push(`${sourceLabel}: alerts must be an array when present`)
  }
  if (site.shuttle != null) validateShuttle(site.shuttle, errors)

  return errors
}
