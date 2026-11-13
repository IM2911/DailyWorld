"use client";

import { useState, useEffect } from "react";

/**
 * Google Consent Mode wrapper.
 * - On **Accept** we grant ad and analytics storage.
 * - On **Reject** we keep the default "denied" state (set in Analytics component).
 * The consent choice is persisted in localStorage so the banner is shown only once.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    // Update Google Consent Mode to grant storage
    // @ts-ignore – gtag may be undefined until Analytics loads
    window.gtag?.("consent", "update", { ad_storage: "granted", analytics_storage: "granted" });
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  const reject = () => {
    // Keep the default denied state (no need to call gtag)
    localStorage.setItem("cookie-consent", "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-slate-800 text-slate-100 p-4 flex flex-col md:flex-row items-center justify-between md:max-w-2xl md:mx-auto z-50">
      <p className="text-sm mb-2 md:mb-0">
        Usamos cookies para mejorar tu experiencia. Puedes aceptar o rechazar el uso de cookies de analítica y publicidad.
      </p>
      <div className="flex gap-2">
        <button
          onClick={reject}
          className="px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded transition-colors"
        >
          Rechazar
        </button>
        <button
          onClick={accept}
          className="px-3 py-1 bg-brand-600 hover:bg-brand-700 rounded transition-colors"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
