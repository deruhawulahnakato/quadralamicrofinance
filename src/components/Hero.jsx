import { hero } from '../data/content.js'
import SectionLink from './SectionLink.jsx'

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-text">
        <h1>{hero.title}</h1>
        <p className="lead">{hero.lead}</p>
        <div className="actions">
          <SectionLink className="btn btn-red" href="#apply">Apply for a loan</SectionLink>
          <SectionLink className="btn btn-ghost" href="#contact">Talk to our team</SectionLink>
        </div>
      </div>
    </section>
  )
}
