"use client";

/**
 * In‑article responsive AdSense unit.
 * Uses the public env vars defined in .env.local (and as Cloudflare vars).
 */
export function AdInArticle() {
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", textAlign: "center", margin: "1rem 0" }}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID}
      data-ad-slot={process.env.NEXT_PUBLIC_ADSENSE_INARTICLE_SLOT}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
