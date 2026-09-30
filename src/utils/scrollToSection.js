// Smoothly scrolls to a section like "#contact".
// Used by every in-page link so navigation works the same everywhere.
export function scrollToSection(event, href) {
  const target = document.querySelector(href)
  if (!target) return
  event.preventDefault()
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  try {
    history.replaceState(null, '', href)
  } catch {
    // Some embedded previews block changing the address; scrolling still works.
  }
}
