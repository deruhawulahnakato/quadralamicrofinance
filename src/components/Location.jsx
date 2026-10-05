import { contact } from '../data/content.js'
import MapIllustration from './MapIllustration.jsx'
import Photo from './Photo.jsx'

export default function Location() {
  const mapSrc = contact.mapEmbedUrl?.trim() || contact.mapEmbedFallbackUrl

  return (
    <section id="location" className="section loc">
      <div className="map">
        {mapSrc ? (
          <iframe
            src={mapSrc}
            title={`Map showing our office at ${contact.building}, ${contact.street}`}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <MapIllustration />
        )}
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
