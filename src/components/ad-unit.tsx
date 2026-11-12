"use client";

import { useEffect } from "react";

interface AdUnitProps {
  slot: string | undefined;
  style?: React.CSSProperties;
  className?: string;
}

export function AdUnit({ slot, style, className }: AdUnitProps) {
  useEffect(() => {
    try {
      // @ts-ignore – the adsbygoogle script may not be loaded in dev
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // No ad script – safe to ignore during development
    }
  }, []);

  if (!slot) return null;

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID}
      data-ad-slot={slot}
    />
  );
}