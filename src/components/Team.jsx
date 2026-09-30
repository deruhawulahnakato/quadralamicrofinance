import { team } from '../data/content.js'
import Avatar from './Avatar.jsx'

const corners = (i, n) =>
  i === 0 ? { borderTopLeftRadius: 40 } : i === n - 1 ? { borderTopRightRadius: 40 } : undefined

export default function Team() {
  return (
    <section id="team" className="section">
      <h2 className="h2">Meet our team</h2>
      <p className="lead intro">The people behind every loan, ready to listen and guide you at each step.</p>
      <div className="team">
        {team.map((m, i) => (
          <div key={i} className="member">
            <div className="photo" style={corners(i, team.length)}>
              {m.photo ? (
                <img src={m.photo} alt={`${m.name}, ${m.role}`} style={{ objectPosition: 'center top' }} loading="lazy" />
              ) : (
                <Avatar variant={m.avatar} />
              )}
            </div>
            <div>
              <h3>{m.name}</h3>
              <span className="role">{m.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
