import { company } from '../data/content.js'

// A simple drawn map with the office pin (not a live map).
export default function MapIllustration() {
  return (
    <svg viewBox="0 0 700 520" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Map showing our office location">
      <rect width="700" height="520" fill="#E8EBF2" />
      <rect x="40" y="40" width="190" height="130" rx="6" fill="#DCE0EA" />
      <rect x="470" y="30" width="200" height="150" rx="6" fill="#DCE0EA" />
      <rect x="60" y="330" width="170" height="150" rx="6" fill="#D6E6D6" />
      <rect x="480" y="340" width="190" height="140" rx="6" fill="#DCE0EA" />
      <path d="M0 250H700" stroke="#fff" strokeWidth="36" />
      <path d="M350 0V520" stroke="#fff" strokeWidth="28" />
      <path d="M0 470L700 110" stroke="#fff" strokeWidth="18" />
      <path d="M0 250H700" stroke="#C9CEDD" strokeWidth="2" strokeDasharray="14 12" />
      <g transform="translate(410 250)">
        <circle r="46" fill="#B3263E" opacity=".15" />
        <path d="M0-8C0-8-26-34-26-52A26 26 0 0 1 26-52C26-34 0-8 0-8Z" fill="#B3263E" />
        <circle cy="-52" r="10" fill="#fff" />
      </g>
      <g transform="translate(135 150)">
        <rect width="240" height="54" rx="6" fill="#1F2F6B" />
        <text x="18" y="33" fill="#fff" fontFamily="'Source Sans 3', sans-serif" fontSize="18" fontWeight="600">
          {company.name}
        </text>
      </g>
    </svg>
  )
}
