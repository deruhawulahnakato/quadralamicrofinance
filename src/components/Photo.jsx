import Icon from './Icons.jsx'

// Shows a photo, or a labelled placeholder until one is added.
export default function Photo({ src, alt = '', position, label, className = '', style }) {
  return (
    <div className={`photo ${className}`} style={style}>
      {src ? (
        <img src={src} alt={alt} style={position ? { objectPosition: position } : undefined} loading="lazy" />
      ) : (
        <>
          <Icon name="camera" size={36} strokeWidth={1.6} />
          <span>{label}</span>
        </>
      )}
    </div>
  )
}
