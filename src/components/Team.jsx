import { ceo } from '../data/content.js'

export default function Team() {
  return (
    <section id="team" className="section ceo">
      <span className="q-mark" aria-hidden="true">“</span>

      <figure className="ceo-text">
        <span className="eyebrow">A word from our CEO</span>
        <blockquote>
          <h2 className="ceo-headline">
            {ceo.headline[0]}<span className="hl">{ceo.headline[1]}</span>
          </h2>
          <p>{ceo.quote}</p>
        </blockquote>
      </figure>

      <aside className="ceo-card">
        <img src={ceo.photo} alt={`${ceo.name}, ${ceo.role}`} loading="lazy" />
        <div>
          <h3>{ceo.name}</h3>
          <span className="role">{ceo.role}</span>
        </div>
        <ul className="ceo-tips">
          {ceo.tips.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </aside>
    </section>
  )
}
