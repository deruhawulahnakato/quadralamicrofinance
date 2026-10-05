import { services, consulting } from '../data/content.js'
import Icon from './Icons.jsx'

const Tiles = ({ items, className = 'tiles' }) => (
  <div className={className}>
    {items.map((s) => (
      <article key={s.title} className={`tile ${s.color === 'navy' ? 'n' : 'r'}`}>
        <span className="t-icon"><Icon name={s.icon} strokeWidth={1.7} /></span>
        <h3>{s.title}</h3>
        <p>{s.text}</p>
      </article>
    ))}
  </div>
)

export default function Services() {
  return (
    <section id="services" className="section">
      <h2 className="h2">Our services</h2>
      <p className="lead intro">Financial products built around the way small businesses and families really work.</p>
      <Tiles items={services} />
      <h3 className="sub-h">Consulting &amp; training</h3>
      <p className="lead intro">Beyond loans, we share our experience to help businesses, institutions and individuals manage money well.</p>
      <Tiles items={consulting} className="tiles tiles-2" />
    </section>
  )
}
