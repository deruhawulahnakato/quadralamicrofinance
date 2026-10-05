import { ceo } from '../data/content.js'
import Icon from './Icons.jsx'

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="ceo">
        <div className="ceo-portrait">
          <div className="ceo-ring">
            <img src={ceo.photo} alt={`${ceo.name}, ${ceo.role}`} loading="lazy" />
          </div>
          <span className="ceo-badge">CEO</span>
        </div>

        <div className="ceo-text">
          <span className="eyebrow">Leadership</span>
          <h2 className="h2">A word from our CEO</h2>
          <blockquote>
            <span className="q-mark" aria-hidden="true">“</span>
            <p>{ceo.quote}</p>
          </blockquote>
          <ul className="ceo-tips">
            {ceo.tips.map((t) => (
              <li key={t}><Icon name="check" strokeWidth={2.4} />{t}</li>
            ))}
          </ul>
          <div className="ceo-sign">
            <span className="sign-line" aria-hidden="true" />
            <div>
              <h3>{ceo.name}</h3>
              <span className="role">{ceo.role}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
