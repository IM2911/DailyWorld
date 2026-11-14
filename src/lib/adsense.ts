/**
 * Google AdSense configuration, read once from public env vars.
 *
 * NEXT_PUBLIC_ADSENSE_PUBLISHER_ID accepts "ca-pub-1234567890123456" or
 * "pub-1234567890123456". Anything else (empty, or a placeholder such as
 * "pub-XXXXXXXX") counts as "not configured": no AdSense script, meta tag or
 * ad unit is rendered.
 *
 * The static home page (public/index.html) and public/ads.txt are not
 * rendered by Next, so scripts/sync-adsense.mjs writes the same ID into them
 * before every build (npm "prebuild" hook).
 *
 * process.env.NEXT_PUBLIC_* must stay written out literally so Next inlines
 * the values into client bundles.
 */

declare global {
  interface Window {
    adsbygoogle?: unknown[];
    /** Google's consent message (AdSense Privacy & messaging). */
    googlefc?: {
      callbackQueue?: unknown[];
      showRevocationMessage?: () => void;
    };
  }
}

function parseClient(raw: string | undefined): string | null {
  const match = (raw ?? "").trim().match(/^(?:ca-)?(pub-\d{16})$/);
  return match ? `ca-${match[1]}` : null;
}

function parseSlot(raw: string | undefined): string | null {
  const value = (raw ?? "").trim();
  return /^\d{6,}$/.test(value) ? value : null;
}

/** "ca-pub-…" when AdSense is configured, otherwise null. */
export const ADSENSE_CLIENT = parseClient(
  process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID
);

/** Ad unit IDs created in AdSense (Ads → By ad unit). Null = unit not shown. */
export const AD_SLOTS = {
  top: parseSlot(process.env.NEXT_PUBLIC_ADSENSE_TOP_SLOT),
  inArticle: parseSlot(process.env.NEXT_PUBLIC_ADSENSE_INARTICLE_SLOT),
  sidebar: parseSlot(process.env.NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT),
};

export const ADSENSE_SCRIPT_SRC = ADSENSE_CLIENT
  ? `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`
  : null;
