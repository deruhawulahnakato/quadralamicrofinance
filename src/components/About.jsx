import { aboutPhotos, vision, mission } from '../data/content.js'
import Photo from './Photo.jsx'

const corners = [{ borderTopLeftRadius: 40 }, undefined, { borderTopRightRadius: 40 }]

export default function About() {
  return (
    <section id="about" className="section white">
      <div className="photos">
        {aboutPhotos.map((p, i) => (
          <Photo key={p.src} {...p} style={corners[i]} />
        ))}
      </div>
      <div className="vm">
        <div>
          <h2 style={{ color: 'var(--red)' }}>Our vision</h2>
          <p>{vision}</p>
        </div>
        <div>
          <h2 style={{ color: 'var(--navy)' }}>Our mission</h2>
          <p>{mission}</p>
        </div>
      </div>
    </section>
  )
}
