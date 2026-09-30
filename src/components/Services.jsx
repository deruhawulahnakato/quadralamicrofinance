import { services } from '../data/content.js'
import Icon from './Icons.jsx'

export default function Services() {
  return (
    <section id="services" className="section">
      <h2 className="h2">Our services</h2>
      <p className="lead intro">Financial products built around the way small businesses and families really work.</p>
      <div className="tiles">
        {services.map((s) => (
          <article key={s.title} className={`tile ${s.color === 'navy' ? 'n' : 'r'}`}>
            <span className="t-icon"><Icon name={s.icon} strokeWidth={1.7} /></span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
