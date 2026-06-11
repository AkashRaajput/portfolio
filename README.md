# Portfolio

Personal portfolio site for [Akash Kumar](https://github.com/AkashRaajput) — HubSpot CMS Developer at Palmspire Technology. Built to present work experience, projects, skills, and a contact form in a single deployable Next.js app.

Live site: [portfolio-kappa-gray-11.vercel.app](https://portfolio-kappa-gray-11.vercel.app)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI:** shadcn/ui, Radix UI
- **Animation:** Framer Motion
- **Forms / validation:** Zod
- **Email:** Resend
- **Icons:** Lucide React

## Local Development

**Requirements:** Node.js 20+

```bash
git clone https://github.com/AkashRaajput/portfolio.git
cd portfolio
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run production build locally
npm run lint    # ESLint
```

## Environment Variables

Copy `.env.example` to `.env.local` for local development. On Vercel, add the same variables under **Settings → Environment Variables**.

### Public (client-side)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used in metadata, sitemap, and Open Graph tags |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email shown in the UI and used as fallback for form delivery |
| `NEXT_PUBLIC_CONTACT_PHONE` | Phone number shown in contact sections |
| `NEXT_PUBLIC_GITHUB_URL` | GitHub profile link |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn profile link |

These are read in `config/site.ts` and fall back to defaults if unset.

### Server-only (contact form)

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | API key from [Resend](https://resend.com). Required for the contact form to send email |
| `RESEND_FROM_EMAIL` | Sender address. Use `onboarding@resend.dev` for testing, or a verified domain for production |
| `CONTACT_TO_EMAIL` | Inbox that receives form submissions. Defaults to `NEXT_PUBLIC_CONTACT_EMAIL` if omitted |

Never commit `.env.local` or expose `RESEND_API_KEY` in client code.

## Contact Form

The contact form posts to `POST /api/contact` (`app/api/contact/route.ts`).

1. Client submits name, email, subject, and message from `components/sections/contact-section.tsx`.
2. The API route validates the payload with Zod.
3. If `RESEND_API_KEY` is set, the route sends an email via Resend with `replyTo` set to the sender's address.
4. A hidden honeypot field (`company`) silently rejects bot submissions.

Without `RESEND_API_KEY`, the API returns `503` with `"Email service is not configured."`

Minimum field lengths: name 2, subject 3, message 5 characters.

## Resume

The downloadable CV is a static file:

```
public/resume/Akash_Kumar_CV.pdf
```

It is served at `/resume/Akash_Kumar_CV.pdf`. The download link is configured in `config/site.ts` under `resume.href`.

To update the resume:

1. Replace `public/resume/Akash_Kumar_CV.pdf` with your new file (keep the same filename, or update `resume.href` and `resume.filename` in `config/site.ts`).
2. Redeploy.

## Deployment

This project is deployed on Vercel.

1. Push the repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Framework preset: **Next.js** (detected automatically).
4. Add environment variables from `.env.example`. Set `NEXT_PUBLIC_SITE_URL` to your production URL.
5. Deploy.

After changing environment variables, redeploy for changes to take effect.

`vercel.json` sets security headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`). No custom build configuration is required beyond the defaults.

## Project Structure

```
app/                    # Next.js App Router pages and API routes
  api/contact/          # Contact form handler (Resend)
  projects/[slug]/      # Individual project pages
  layout.tsx            # Root layout, fonts, metadata
  sitemap.ts            # Dynamic sitemap
  robots.ts             # Robots.txt
  opengraph-image.tsx   # OG image generation

components/
  sections/             # Page sections (hero, experience, projects, etc.)
  cards/                # Experience and project cards
  layout/               # Header, footer, theme provider
  ui/                   # shadcn/ui primitives

config/
  site.ts               # Site-wide config (name, links, resume path)
  navigation.ts         # Nav links

data/                   # Content source (edit these to update the site)
  profile.ts
  experience.ts
  projects.ts
  skills.ts
  education.ts

public/
  resume/               # PDF resume

types/                  # Shared TypeScript types
```

Content lives in `data/` and `config/` — no CMS. Edit the TypeScript files and redeploy.

## Customization

### Personal information

- `config/site.ts` — name, role, description, email, phone, social links, resume path
- `data/profile.ts` — bio, headline, stats, hero content

### Projects

- `data/projects.ts` — project list, descriptions, tags, links
- Project detail pages are generated from slugs in `app/projects/[slug]/page.tsx`

### Experience

- `data/experience.ts` — roles, companies, dates, impact bullets

### Skills

- `data/skills.ts` — skill categories and proficiency levels

### Social links

Set via environment variables (`NEXT_PUBLIC_GITHUB_URL`, `NEXT_PUBLIC_LINKEDIN_URL`) or directly in `config/site.ts`.

### Navigation

- `config/navigation.ts` — header and footer links

## License

MIT License

Copyright (c) 2026 Akash Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
