import { AdUnit } from "@/components/ad-unit";
import { AD_SLOTS } from "@/lib/adsense";

/**
 * Sidebar AdSense unit for calculator pages (sticky sidebar of CalculatorLayout).
 * Renders nothing until NEXT_PUBLIC_ADSENSE_PUBLISHER_ID and
 * NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT hold real values.
 */
export function AdSidebar() {
  return (
    <AdUnit
      slot={AD_SLOTS.sidebar}
      style={{ width: "100%", height: 250, marginBottom: "1.5rem" }}
      format="auto"
    />
  );
}
