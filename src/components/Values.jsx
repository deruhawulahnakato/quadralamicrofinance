import { values } from '../data/content.js'
import Icon from './Icons.jsx'

export default function Values() {
  return (
    <section id="values" className="section white">
      <h2 className="h2">What we stand for</h2>
      <div className="cards">
        {values.map((v, i) => (
          <div key={v.title} className="card">
            <span className="num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            <div className="icon"><Icon name={v.icon} /></div>
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
