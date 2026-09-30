import { scrollToSection } from '../utils/scrollToSection.js'

// An <a> that scrolls smoothly to a section on this page.
export default function SectionLink({ href, onNavigate, children, ...rest }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        scrollToSection(e, href)
        onNavigate?.()
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
