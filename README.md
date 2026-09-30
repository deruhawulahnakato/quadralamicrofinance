# Quadral ‘A’ Microfinance — Website (React + Vite)

## Run it on your computer
Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```
Then open the address it prints (usually http://localhost:5173).

## Build for hosting
```bash
npm run build
```
This creates a `dist` folder. Upload the **contents of `dist`** to any web host
(cPanel, Netlify, Vercel, GitHub Pages…).

## Editing content
All text, services, team members and contact details are in
**`src/data/content.js`**. Change them there — no need to edit components.

- **Team photo:** put the file in `public/images/` (e.g. `team-2.jpg`) and set
  `photo: '/images/team-2.jpg'` for that person. Without a photo, an
  illustrated placeholder is shown.
- **Office photo:** put it in `public/images/` and set `contact.officePhoto`.
- **Google Maps:** once the Google Business Profile is verified, paste its link
  into `contact.mapsUrl`.

## Project structure
```
public/images/        logo, hero and photos
src/data/content.js   all site content
src/components/       Header, Hero, About, Services, Values, Team,
                      Steps, Location, Contact, Footer (+ small helpers)
src/index.css         styles (brand colors are at the top)
```
