const HTML_ESCAPE_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => HTML_ESCAPE_MAP[char])
}

export function escapeAttribute(value) {
  return escapeHtml(value)
}

export function safeUrl(value, { allowRelative = false } = {}) {
  if (typeof value !== 'string' || !value.trim()) return ''

  try {
    const base = window.location.origin
    const url = allowRelative ? new URL(value, base) : new URL(value)
    const protocol = url.protocol.toLowerCase()

    if (protocol === 'http:' || protocol === 'https:' || protocol === 'tel:') {
      return url.href
    }

    return ''
  } catch {
    return ''
  }
}
