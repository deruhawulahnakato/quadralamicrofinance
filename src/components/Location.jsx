import { contact } from '../data/content.js'
import MapIllustration from './MapIllustration.jsx'
import Photo from './Photo.jsx'

export default function Location() {
  return (
    <section id="location" className="section loc">
      <div className="map">
        <MapIllustration />
      </div>
      <div className="loc-info">
        <h2 className="h2">Find our office</h2>
        <Photo
          src={contact.officePhoto}
          alt="Front of our office"
          label="[Photo: front of the office with signboard]"
        />
        <div className="addr">
          <strong>
            {contact.building}
            <br />
            {contact.street}
          </strong>
          <span className="lead">{contact.landmark}</span>
          <span className="lead">{contact.hours}</span>
        </div>
        <a className="btn btn-navy" style={{ alignSelf: 'flex-start' }} href={contact.mapsUrl} target="_blank" rel="noopener noreferrer">
          Get directions on Google Maps
        </a>
      </div>
    </section>
  )
}
