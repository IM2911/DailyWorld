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