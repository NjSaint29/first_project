# Jo Mendes — Curated Lived Spaces

A recreation of the **Jo Mendes** interior-design studio portfolio shown in the
reference video (originally deployed at `nomada-toast.vercel.app`). Built as a
single-page, image-led site with oversized editorial typography, scroll-reveal
animations, a stylised CAD "Process" floor plan, and a working contact form.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS**
- **Framer Motion** for scroll-reveal + parallax
- Type: **Anton** (display), **Inter** (body), **Newsreader** (serif accents)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm run start   # production
```

## Project structure

```
app/
  layout.tsx           # fonts + metadata
  page.tsx             # section composition
  globals.css          # base styles + display headline treatment
  api/contact/route.ts # contact form endpoint (validates + logs)
components/
  Nav, Hero, About, Services, Process, FloorPlan,
  Clients, Contact, Footer, Reveal
lib/content.ts         # all copy, nav, services, clients, image paths
public/img/            # placeholder imagery (swap for real photos)
```

## Customising

- **Copy & data:** everything lives in `lib/content.ts`.
- **Images:** drop real photography / AI renders into `public/img/` using the
  same filenames (`hero.jpg`, `about.jpg`, `service-1..3.jpg`). The current
  files are generated atmospheric placeholders in the site palette.
- **Contact delivery:** `app/api/contact/route.ts` validates and logs the
  enquiry. To deliver it for real, wire it to an email provider (Resend,
  Postmark, SendGrid) or a database using an environment variable for the key.

## Notes

This is a first-draft visual recreation for design reference. Branding, copy,
and imagery are placeholders — replace them before any production use.
