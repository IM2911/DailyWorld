# DailyWorld — Premium Energy Cost Calculators & Guides

DailyWorld is a premium platform providing precise electricity cost calculators and expert energy guides to help users understand and reduce their household energy bills.

## Features

- **15+ Calculators**: Precise cost calculations for AC units, refrigerators, washers, PCs, and entire monthly bills
- **20+ Expert Guides**: In-depth articles on energy efficiency, appliance optimization, and seasonal savings
- **Premium Design**: Premium visual design comparable to Apple, Stripe, and Linear
- **Modern Technology**: Built with Next.js 16, React, TypeScript, and Tailwind CSS
- **Accessibility**: WCAG-compliant design with keyboard navigation
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Performance**: Fast loading, optimized for Core Web Vitals

## Home page and design system

- **The home page is a static file, `public/index.html`**, built with the taste-skill kit
  (`public/assets`: its system, motion, moments and the 3D lamp object). `next.config.js`
  rewrites `/` to it under `next dev` and `next start`; on Cloudflare the assets binding serves
  it for `/` before the worker runs. Edit the home page there, not in `src/app`.
- **Do not edit `public/assets`**: those are the kit's own files, compared against the skill by
  its checks. Page-only CSS lives in the `<style>` block of `public/index.html`.
- **Every other page** is Next.js and shares the same look through `src/app/globals.css`
  (palette cool grey and cobalt `#1f2de6`, Outfit + DM Mono, round corners) and the
  `Header` and `Footer` components.
- **Fonts are self-hosted**: `next/font` for the Next pages, `public/assets/fonts` for the home page.
- The taste-skill deal, checks and waivers are recorded in `.taste-skill/`.
- **Site address**: the public address is `https://dailyworld.pages.dev`. The site runs as the
  Cloudflare Worker `dailyworld` (also reachable at `dailyworld.dailyworldonline.workers.dev`);
  the Pages project in `cloudflare-pages-proxy/` forwards every request for `dailyworld.pages.dev`
  to that Worker. AdSense needs a registrable domain, which `pages.dev` subdomains are and
  `workers.dev` sub-subdomains are not. The address is the default of `SITE_URL` in
  `src/lib/seo.ts` and is also written in the canonical and `og:` tags of `public/index.html`.
  To move to a custom domain, set `NEXT_PUBLIC_SITE_URL` and update those tags.
  (`dailyworld.app` belongs to someone else.)

## Google AdSense

Everything is driven by one variable in `.env.local`:

```bash
NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-1234567890123456   # your ID from AdSense
# Optional, once AdSense approves the site and you create ad units:
NEXT_PUBLIC_ADSENSE_TOP_SLOT=
NEXT_PUBLIC_ADSENSE_INARTICLE_SLOT=
NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT=
```

- With a real ID, every page gets the AdSense script and the `google-adsense-account`
  verification tag (`src/lib/adsense.ts`, used by `src/app/layout.tsx`).
- The static home page and `public/ads.txt` are written by `scripts/sync-adsense.mjs`,
  which runs before every `npm run build` / `npm run dev` (and so before
  `npm run deploy`). Do not edit the `adsense:start` block in `public/index.html` by hand.
- Each ad slot (top banner, in-article, calculator sidebar) shows only when its slot ID is set.
  With no slot IDs, AdSense Auto ads can still place ads from the script alone.
- An empty or placeholder ID (`pub-XXXXXXXX`) means no ad code at all.
- After changing the ID, publish again with `npm run deploy`.

## Technologies

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS
- **Components**: React with TypeScript
- **Icons**: Lucide React
- **Testing**: Playwright E2E testing
- **Design System**: Comprehensive CSS variables and premium design system

## Installation

```bash
# Clone the repository
cd DailyWorld

# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Run tests
npm run test

# Lint and type checking
npm run lint
typestacheck
```

## Usage

1. **Calculators**: Navigate to `/calculators` to calculate operating costs for any household appliance.
2. **Guides**: Navigate to `/guides` to read expert articles about electricity consumption and energy savings.
3. **Theme Toggle**: Use the toggle in the header to switch between light and dark modes.
4. **Navigation**: Use the navigation bar to access different sections of the platform.

## Directory Structure

```
src/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── guides/
│   │   ├── page.tsx                 # Guides index
│   │   └── [slug]/page.tsx           # Individual guide pages
│   ├── guides/[slug]/page.tsx        # Guide detail pages (updated for Next.js 16)
│   ├── theme-toggle.tsx             # Theme toggle component
│   └── ...                          # Other pages (calculators, about, contact, etc.)
├── components/
│   ├── Header.tsx                   # Navigation header
│   ├── Footer.tsx                   # Website footer
│   ├── CalculatorInput.tsx          # Calculator input component
│   ├── CalculatorLayout.tsx         # Calculator layout component
│   ├── CalculatorPage.tsx           # Calculator page component
│   ├── ResultRow.tsx                # Calculator result display component
│   ├── CookieConsent.tsx             # Cookie consent banner
│   ├── AdUnit.tsx                    # Ad unit component
│   ├── CalculatorInput.tsx          # Calculator input component
│   └── ...                          # Other shared components
├── lib/
│   └── guides.ts                    # Guide data (20 guides)
├── components/ArticleTemplate.tsx    # Reusable guide article template
├── globals.css                       # Global styles and design system
└── ...                              # Other application files
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the project maintainers.