import { useId } from 'react'

// Illustrated placeholder portrait, shown until a team member's photo is added.
const variants = {
  long: { bg: ['#E3E7F3', '#C9D1E8'], body: '#1F2F6B', skin: '#8A5A3C' },
  short: { bg: ['#F7E3E6', '#EBC6CD'], body: '#B3263E', skin: '#6E4530' },
  bald: { bg: ['#E3E7F3', '#C9D1E8'], body: '#1F2F6B', skin: '#7A4E34' },
}

export default function Avatar({ variant = 'short' }) {
  const id = useId()
  const v = variants[variant] ?? variants.short
  return (
    <svg className="avatar" viewBox="0 0 300 330" preserveAspectRatio="xMidYMax slice" role="img" aria-label="Photo coming soon">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={v.bg[0]} />
          <stop offset="1" stopColor={v.bg[1]} />
        </linearGradient>
      </defs>
      <rect width="300" height="330" fill={`url(#${id})`} />
      <circle cx="235" cy="70" r="90" fill="#fff" opacity=".35" />
      {variant === 'long' && (
        <path d="M92 150c0-50 24-80 58-80s58 30 58 80v70c0 14-10 22-24 22H116c-14 0-24-8-24-22z" fill="#1B1B24" />
      )}
      <path d="M40 330c0-62 44-104 110-104s110 42 110 104z" fill={v.body} />
      <path d="M128 214h44v26c0 12-10 20-22 20s-22-8-22-20z" fill={v.skin} />
      <path d="M118 232l32 36 32-36" fill="none" stroke="#fff" strokeWidth="7" strokeLinejoin="round" opacity=".9" />
      <ellipse cx="150" cy="150" rx="50" ry="60" fill={v.skin} />
      {variant === 'long' && (
        <path d="M100 142c0-36 22-58 50-58s50 22 50 64c-16-6-30-20-38-36-10 20-34 34-62 30z" fill="#1B1B24" />
      )}
      {variant === 'short' && (
        <path d="M100 146c-4-42 20-64 50-64s54 22 50 64c-6-22-24-34-50-34s-44 12-50 34z" fill="#1B1B24" />
      )}
      {variant === 'bald' && (
        <path d="M104 136c2-34 22-52 46-52s44 18 46 52c-10-16-26-24-46-24s-36 8-46 24z" fill="#2A2330" opacity=".85" />
      )}
    </svg>
  )
}
