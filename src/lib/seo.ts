import type { Metadata } from "next";

export const SITE_NAME = "DailyWorld";

/**
 * Public origin of the site, without a trailing slash.
 * Set NEXT_PUBLIC_SITE_URL to change it (for example to a workers.dev
 * subdomain); canonical URLs, Open Graph, the sitemap and robots.txt all
 * read from here.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://dailyworld.app"
).replace(/\/+$/, "");

export const DEFAULT_OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "DailyWorld electricity cost calculators and energy guides",
};

export function absoluteUrl(path = "/"): string {
  return new URL(path, `${SITE_URL}/`).toString();
}

interface PageMetadataInput {
  title: string;
  description: string;
  /** Route path starting with "/", used for the canonical and og:url. */
  path: string;
  type?: "website" | "article";
}

/**
 * Per-page metadata with its own canonical URL. Open Graph and Twitter are
 * rebuilt in full because Next.js merges metadata shallowly: a page that sets
 * `openGraph` replaces the root layout's object, images included.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_US",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}
