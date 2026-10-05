import { useState } from 'react'
import { company, nav } from '../data/content.js'
import SectionLink from './SectionLink.jsx'
import Icon from './Icons.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header>
      <SectionLink className="brand" href="#home" onNavigate={close} aria-label={`${company.name} home`}>
        <img src="/images/logo.svg" alt="" />
        <span>
          <b>{company.name}</b>
          <small>{company.suffix}</small>
        </span>
      </SectionLink>

      <nav aria-label="Main">
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} size={28} strokeWidth={2} />
        </button>
        <ul id="menu" className={open ? 'open' : ''}>
          {nav.map((item) => (
            <li key={item.href}>
              <SectionLink href={item.href} onNavigate={close}>{item.label}</SectionLink>
            </li>
          ))}
          <li>
            <SectionLink className="btn btn-red" href="#apply" onNavigate={close}>Apply for a loan</SectionLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
