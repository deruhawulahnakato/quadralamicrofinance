import { company } from '../data/content.js'

export default function Footer() {
  return (
    <footer>
      <span className="f-brand">
        <img src="/images/logo-white.svg" alt="" />
        {company.fullName}
      </span>
      <span>© {new Date().getFullYear()} {company.fullName}. All rights reserved.</span>
    </footer>
  )
}
