"use client";

import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT } from "@/lib/adsense";

interface AdUnitProps {
  /** Ad unit ID from AdSense; null or undefined renders nothing. */
  slot: string | null | undefined;
  /** Classes for the wrapper around the ad (layout, spacing, visibility). */
  className?: string;
  style?: React.CSSProperties;
  format?: string;
  fullWidthResponsive?: boolean;
}

export function AdUnit({
  slot,
  className,
  style,
  format,
  fullWidthResponsive,
}: AdUnitProps) {
  const ref = useRef<HTMLModElement>(null);
  const enabled = Boolean(ADSENSE_CLIENT && slot);

  useEffect(() => {
    const el = ref.current;
    // AdSense marks filled units with data-adsbygoogle-status; skip those so a
    // re-run of the effect (React Strict Mode) does not request a second ad.
    if (!enabled || !el || el.dataset.adsbygoogleStatus) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Blocked by an ad blocker or the script failed to load: leave it empty.
    }
  }, [enabled, slot]);

  if (!enabled) return null;

  return (
    <div className={className}>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: "block", ...style }}
        data-ad-client={ADSENSE_CLIENT ?? undefined}
        data-ad-slot={slot ?? undefined}
        data-ad-format={format}
        data-full-width-responsive={fullWidthResponsive ? "true" : undefined}
      />
    </div>
  );
}
