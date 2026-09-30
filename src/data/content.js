// ─────────────────────────────────────────────────────────────
// All the website's text and details live here.
// Edit this file to update the site — no need to touch components.
// ─────────────────────────────────────────────────────────────

export const company = {
  name: 'Quadral ‘A’ Microfinance',
  suffix: 'Services Limited',
  fullName: 'Quadral ‘A’ Microfinance Services Limited',
}

export const nav = [
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our team', href: '#team' },
  { label: 'Find us', href: '#location' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  title: 'Simple, reliable finance for the businesses and families that build our communities.',
  lead: 'We provide simple and innovative financial services that empower families and businesses to excellence.',
}

export const vision =
  'To be a leading financial service provider that provides simple, reliable and impactful financial services to small and micro societies.'

export const mission =
  'To provide simple and innovative financial services that empower families and businesses to excellence.'

export const aboutPhotos = [
  { src: '/images/about-1.jpg', alt: 'A client at her business', position: '20% center' },
  { src: '/images/about-2.jpg', alt: 'Our loan officer meeting a client' },
  { src: '/images/about-3.jpg', alt: 'A woman helping a schoolgirl with her reading', position: '65% center' },
]

// icon: 'store' | 'bag' | 'umbrella'   color: 'red' | 'navy'
export const services = [
  {
    icon: 'store',
    color: 'red',
    title: 'Business loans',
    text: 'Working capital and stock financing to help small and micro enterprises grow.',
  },
  {
    icon: 'bag',
    color: 'navy',
    title: 'Consumer loans',
    text: 'For school fees, household items and personal needs, repaid in manageable instalments.',
  },
  {
    icon: 'umbrella',
    color: 'red',
    title: 'Emergency loans',
    text: 'Support when the unexpected happens, such as medical bills or urgent repairs.',
  },
]

// icon: 'shield' | 'people' | 'eye'
export const values = [
  { icon: 'shield', title: 'Integrity', text: 'We do what we say, handle every shilling with care, and treat each client honestly.' },
  { icon: 'people', title: 'Customer oriented', text: 'We listen first and shape our services around the real needs of the people we serve.' },
  { icon: 'eye', title: 'Transparency', text: 'Clear terms, clear rates and no hidden charges, so you always know where you stand.' },
]

// Add a photo by putting it in public/images and setting `photo`.
// Without a photo, an illustrated placeholder (avatar) is shown.
// avatar: 'long' | 'short' | 'bald'
export const team = [
  { name: 'Lutaaya Moses', role: 'Managing Director', photo: '/images/team-1.jpg' },
  { name: '[Full name]', role: '[Operations Manager]', photo: null, avatar: 'long' },
  { name: '[Full name]', role: '[Credit Officer]', photo: null, avatar: 'short' },
  { name: '[Full name]', role: '[Accountant]', photo: null, avatar: 'bald' },
]

export const steps = [
  { title: 'Visit or call us', text: 'Come to our office or give us a call to talk about what you need.' },
  { title: 'Apply with our help', text: 'Our officers guide you through the application and the documents required.' },
  { title: 'Grow with confidence', text: 'Receive your funds and keep our support as your business or household grows.' },
]

export const contact = {
  building: 'Estery Complex, Room 35',
  street: 'Bombo Road, Kubiri, Kampala',
  landmark: 'Opposite Makerere Business Training Centre',
  hours: 'Monday to Friday, 9:00 am – 4:00 pm',
  phoneDisplay: '+256 758 880 388',
  phoneLink: '+256758880388',
  email: 'quadralamicrofinance@gmail.com',
  // Replace with the Google Business Profile link once it is verified
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Estery+Complex+Bombo+Road+Kubiri+Kampala',
  officePhoto: null, // e.g. '/images/office-front.jpg'
}
