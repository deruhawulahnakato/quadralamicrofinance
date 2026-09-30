import { steps } from '../data/content.js'

export default function Steps() {
  return (
    <section className="section white">
      <h2 className="h2">Getting started is simple</h2>
      <ol className="steps">
        {steps.map((s, i) => (
          <li key={s.title}>
            <span className="num">{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
