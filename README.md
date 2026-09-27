# SMRIJA

Responsive launching-soon homepage built with Next.js App Router and React, scaffolded with `npx create-next-app@latest`. Uses plain CSS and server components.

## Development

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Checks and production

```sh
npm run lint
npm run build
python3 -m http.server 8000 --directory out
```

## Structure

- `app/page.js`: homepage, navigation, and WhatsApp contact.
- `app/layout.js`: page metadata, favicon, and shared styles.
- `app/globals.css`: responsive layout and Google Fonts (Cinzel and Noto Serif Devanagari).
- `Assets/`: original brand reference files; its CSS variables are imported by the app.
- `public/Assets/`: web-served copies of logos, icons, and background texture.

WhatsApp links to +91 9665007664. Gallery links to `/gallery`; Instagram remains inactive until its destination is supplied. Google Fonts load in the browser, with serif fallbacks offline. The logo preserves its original lettering.

All pages are exported to `out` by Next.js. Preview the production export at http://localhost:8000 using the command above. `next start` is not used for static exports.

## Render Static Site

- Root Directory: leave blank.
- Build Command: `npm ci && npm run build`.
- Publish Directory: `out`.
- Environment Variables: none required.

Images are served directly without a Next.js image optimization server. Product data changes require a new build.

## Product gallery

`/gallery` provides a Spotify-inspired sidebar, category shortcuts, product grid, and horizontal shelves. Cards navigate to `/gallery/[slug]`; detail pages show demo prices, dimensions, related pieces, and WhatsApp enquiry links. Images zoom on hover and keyboard focus.

Edit `lib/products.js` to replace the six explicitly marked demo products with verified names, prices, sizes, and categories. The existing SMRIJA logo is placeholder imagery, not a product photograph. Gallery styles are in `app/gallery/gallery.css`.
