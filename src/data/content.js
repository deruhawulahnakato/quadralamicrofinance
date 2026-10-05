// ─────────────────────────────────────────────────────────────
// All the website's text and details live here.
// Edit this file to update the site — no need to touch components.
// ─────────────────────────────────────────────────────────────

export const company = {
  name: 'Quadral A Micro Finance',
  suffix: 'Services Ltd',
  fullName: 'Quadral A Micro Finance Services Ltd',
}

export const nav = [
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our CEO', href: '#team' },
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

// icon: 'briefcase' | 'book'   color: 'red' | 'navy'
export const consulting = [
  {
    icon: 'briefcase',
    color: 'navy',
    title: 'SME & microfinance consulting',
    text: 'Practical advice for small businesses, SACCOs and microfinance institutions on business planning, credit management, record keeping and sustainable growth.',
  },
  {
    icon: 'book',
    color: 'red',
    title: 'Financial literacy consulting',
    text: 'Training for individuals, groups, schools and organisations on budgeting, saving, responsible borrowing and planning for the future.',
  },
]

// icon: 'shield' | 'people' | 'eye'
export const values = [
  { icon: 'shield', title: 'Integrity', text: 'We do what we say, handle every shilling with care, and treat each client honestly.' },
  { icon: 'people', title: 'Customer oriented', text: 'We listen first and shape our services around the real needs of the people we serve.' },
  { icon: 'eye', title: 'Transparency', text: 'Clear terms, clear rates and no hidden charges, so you always know where you stand.' },
]

export const ceo = {
  name: 'Lutaaya Moses',
  role: 'Chief Executive Officer',
  photo: '/images/team-1.jpg',
  quote:
    'Financial freedom is not about how much you earn, but how well you manage what you have. Save a portion of every shilling, borrow only for what will grow, and keep a record of every transaction. Small, disciplined steps taken today build the strong families and businesses of tomorrow.',
  // Short takeaways shown under the quote
  tips: ['Save consistently', 'Borrow to grow', 'Keep good records'],
}

export const steps = [
  { title: 'Visit or call us', text: 'Come to our office or give us a call to talk about what you need.' },
  { title: 'Apply with our help', text: 'Our officers guide you through the application and the documents required.' },
  { title: 'Grow with confidence', text: 'Receive your funds and keep our support as your business or household grows.' },
]

// Online application form. Submissions are emailed by Web3Forms (web3forms.com)
// to the address the access key was created with. This key is safe to publish.
export const applyForm = {
  accessKey: 'b282e933-bb40-4814-9297-0e64466d2e46',
  loanTypes: ['Business loan', 'Consumer loan', 'Emergency loan', 'SME / microfinance consulting', 'Financial literacy training'],
  periods: ['1 month', '3 months', '6 months', '12 months', 'Other / not sure'],
  contactTimes: ['Any time', 'Morning (9 am – 12 pm)', 'Afternoon (12 pm – 4 pm)'],
  thankYou: 'Thank you! Your application has been received. One of our officers will call you within 1 working day.',
}

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
  // Live map shown on the site. For an exact pin: open the office in Google Maps →
  // Share → Embed a map → copy only the link inside src="..." and paste it here.
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7472612802662!2d32.56849307435305!3d0.34195696398759157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb90b6d41293%3A0xbafb87c3dd494c83!2sESTERY%20COMPLEX!5e0!3m2!1sen!2sug!4v1791006364876!5m2!1sen!2sug',
  // Used when mapEmbedUrl is empty. If both are null, the illustrated map is shown.
  mapEmbedFallbackUrl: 'https://www.google.com/maps?q=Estery+Complex,+Bombo+Road,+Kubiri,+Kampala&z=16&output=embed',
  officePhoto: null, // e.g. '/images/office-front.jpg'
}
