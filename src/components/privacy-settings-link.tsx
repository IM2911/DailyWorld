"use client";

import { ADSENSE_CLIENT } from "@/lib/adsense";

interface PrivacySettingsLinkProps {
  /** Text rendered instead of the link while AdSense (and so Google's consent message) is off. */
  fallback?: string;
  className?: string;
}

/**
 * Re-opens Google's consent message (AdSense "Privacy & messaging", a
 * certified IAB TCF consent platform) so visitors can change their choice.
 * The message itself is loaded by the AdSense script once a GDPR message is
 * published in AdSense, so the link only renders when AdSense is configured.
 */
export function PrivacySettingsLink({ fallback, className }: PrivacySettingsLinkProps) {
  if (!ADSENSE_CLIENT) return fallback ? <>{fallback}</> : null;

  const open = () => {
    const fc = (window.googlefc = window.googlefc || {});
    fc.callbackQueue = fc.callbackQueue || [];
    fc.callbackQueue.push({
      CONSENT_DATA_READY: () => window.googlefc?.showRevocationMessage?.(),
    });
  };

  return (
    <button
      type="button"
      onClick={open}
      className={className ?? "text-brand-600 underline"}
    >
      Privacy and cookie settings
    </button>
  );
}
