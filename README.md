# Akash Kumar Portfolio

Premium portfolio for Akash Kumar, a HubSpot CMS Developer, Python Developer, and AI enthusiast with 2 years of experience.

## Features

- Modern Next.js App Router portfolio
- Premium project cards with hover effects
- Static project case-study pages
- Contact form with API route and optional webhook forwarding
- Open Graph image generation
- SEO metadata, canonical URLs, sitemap, robots file, and Schema.org JSON-LD
- GitHub, LinkedIn, email, and resume calls to action
- PDF resume download at `/resume` (`Akash_Kumar_CV.pdf`)
- Loading states, section animations, page transitions, and reduced-motion support
- Vercel-ready configuration

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Zod
- Lucide React

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

All public variables are optional but recommended before deployment:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@example.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-profile
```

Optional server-only contact webhook:

```bash
CONTACT_WEBHOOK_URL=https://example.com/contact-webhook
```

If `CONTACT_WEBHOOK_URL` is not set, the contact form still validates and returns success from the local API route.

## Deployment On Vercel

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Set Framework Preset to `Next.js`.
4. Add the environment variables from `.env.example`.
5. Set `NEXT_PUBLIC_SITE_URL` to the final production URL.
6. Deploy.

Recommended Vercel settings:

- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: leave default

## Quality Checks

Run lint:

```bash
npm run lint
```

Run production build:

```bash
npm run build
```

## Lighthouse Readiness

The site is prepared for 90+ Lighthouse scores with:

- Static rendering for portfolio and project pages
- Metadata, sitemap, robots, canonical URLs, Open Graph, and Schema markup
- Accessible labels, skip link, keyboard focus styles, and reduced-motion handling
- Lightweight generated OG image without external assets
- Optimized Next.js font loading

Before final launch, run Lighthouse against the deployed Vercel URL and confirm the production domain, social links, and resume file are correct.

## Resume Download

The resume button points to `/resume`, which serves `app/resume/Akash_Kumar_CV.pdf`. Replace that file to update the downloadable CV.
