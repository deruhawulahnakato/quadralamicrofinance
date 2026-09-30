import { contact } from '../data/content.js'
import Icon from './Icons.jsx'

export default function Contact() {
  const details = [
    { icon: 'pin', label: 'Office', value: `${contact.building}, ${contact.street.replace(', Kampala', '')} — ${contact.landmark.replace(/^Opposite/, 'opposite')}` },
    { icon: 'phone', label: 'Phone', value: <a href={`tel:${contact.phoneLink}`}>{contact.phoneDisplay}</a> },
    { icon: 'mail', label: 'Email', value: <a href={`mailto:${contact.email}`}>{contact.email}</a> },
    { icon: 'clock', label: 'Opening hours', value: contact.hours },
  ]

  return (
    <section id="contact" className="section contact">
      <div>
        <h2 className="h2">Let’s talk about your next step</h2>
        <p className="lead">Call us, send an email, or visit our office. Our team is ready to help you choose the right loan.</p>
        <div className="contact-actions">
          <a className="btn btn-white" href={`tel:${contact.phoneLink}`}>Call {contact.phoneDisplay}</a>
          <a className="btn btn-ghost" href={`mailto:${contact.email}`}>Email us</a>
        </div>
      </div>
      <dl className="details">
        {details.map((d) => (
          <div key={d.label} className="detail">
            <Icon name={d.icon} />
            <div>
              <dt>{d.label}</dt>
              <dd>{d.value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  )
}
