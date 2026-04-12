function normalizeLabel(value) {
  return String(value ?? '')
    .toLowerCase()
    .split('–')[0]
    .trim()
}

export function findMatchingWebcam(site, targetName, fallbackMatcher = null) {
  const webcams = site?.webcams ?? []
  const target = normalizeLabel(targetName)

  if (target) {
    const directMatch = webcams.find(webcam => {
      const label = normalizeLabel(webcam.label)
      return label && (label.includes(target) || target.includes(label))
    })

    if (directMatch) return directMatch
  }

  return typeof fallbackMatcher === 'function'
    ? webcams.find(fallbackMatcher) ?? null
    : null
}
