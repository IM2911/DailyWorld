import type { Metadata, Viewport } from "next";
import { DM_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "./analytics";
import { AdUnit } from "@/components/ad-unit";
import { CookieConsent } from "@/components/cookie-consent";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";
import { ADSENSE_CLIENT, ADSENSE_SCRIPT_SRC, AD_SLOTS } from "@/lib/adsense";

// Outfit + DM Mono: the pairing the taste-skill deal gave the home page
// (public/index.html, built with the kit), so every page shares one type system.
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f17" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "DailyWorld — Electricity Cost Calculators & Energy Guides",
    template: "%s | DailyWorld",
  },
  description:
    "Free electricity cost calculators, appliance energy guides, and energy-saving tips. Calculate how much your appliances cost to run, compare electricity prices, and reduce your household energy bill.",
  keywords: [
    "electricity cost calculator",
    "appliance energy calculator",
    "kWh to cost",
    "monthly electricity bill",
    "energy savings calculator",
    "how much electricity does a refrigerator use",
    "air conditioner electricity cost",
    "home energy guide",
  ],
  authors: [{ name: "DailyWorld" }],
  creator: "DailyWorld",
  publisher: "DailyWorld",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  // Fallback for routes without their own metadata (e.g. 404). Pages set
  // their own canonical and og:url through pageMetadata() in lib/seo.ts.
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: "DailyWorld — Electricity Cost Calculators & Energy Guides",
    description:
      "Free electricity cost calculators, appliance energy guides, and energy-saving tips. Calculate how much your appliances cost to run.",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyWorld — Electricity Cost Calculators & Energy Guides",
    description:
      "Free electricity cost calculators, appliance energy guides, and energy-saving tips.",
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION,
  },
  // AdSense site verification. The static home page carries the same tag,
  // written by scripts/sync-adsense.mjs.
  ...(ADSENSE_CLIENT && {
    other: { "google-adsense-account": ADSENSE_CLIENT },
  }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="color-scheme" content="light dark" />
        {/* A plain async tag, as AdSense asks: next/script adds a
            data-nscript attribute that AdSense warns about. */}
        {ADSENSE_SCRIPT_SRC && (
          <script async src={ADSENSE_SCRIPT_SRC} crossOrigin="anonymous" />
        )}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('dw-theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t);document.documentElement.classList.toggle('dark',t==='dark')}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.setAttribute('data-theme','dark');document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${outfit.className} min-h-screen flex flex-col`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to content
        </a>
        <Header />
        <AdUnit
          slot={AD_SLOTS.top}
          style={{ width: "100%", height: 90 }}
          className="hidden md:flex justify-center bg-slate-50 dark:bg-slate-900"
        />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}