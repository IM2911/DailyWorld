import { AdUnit } from "@/components/ad-unit";
import { AD_SLOTS } from "@/lib/adsense";

/**
 * In-article responsive AdSense unit.
 * Renders nothing until NEXT_PUBLIC_ADSENSE_PUBLISHER_ID and
 * NEXT_PUBLIC_ADSENSE_INARTICLE_SLOT hold real values.
 */
export function AdInArticle({ className }: { className?: string }) {
  return (
    <AdUnit
      slot={AD_SLOTS.inArticle}
      className={className}
      style={{ textAlign: "center" }}
      format="auto"
      fullWidthResponsive
    />
  );
}
