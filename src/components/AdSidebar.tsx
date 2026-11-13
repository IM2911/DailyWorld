"use client";

/**
 * Sidebar AdSense unit for calculator pages.
 * Positioned in the sticky sidebar of CalculatorLayout.
 */
export function AdSidebar() {
  // AdSense unit placed inside calculator page sidebar
  // The component renders the <ins> tag with slot and client IDs
  // Ensure NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT is set in .env.local (or .dev.vars) for Cloudflare

  // AdSense unit placed inside calculator page sidebar
  // The component renders the <ins> tag with slot and client IDs
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", width: "100%", height: 250, marginBottom: "1.5rem" }}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID}
      data-ad-slot={process.env.NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT}
      data-ad-format="auto"
    />
  );
}