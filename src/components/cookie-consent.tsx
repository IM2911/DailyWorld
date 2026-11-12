"use client";

import { useState, useEffect } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-slate-800 text-slate-100 p-4 flex items-center justify-between md:max-w-2xl md:mx-auto z-50">
      <p className="text-sm">
        We use cookies to improve your experience. By continuing you agree to our use of cookies.
      </p>
      <button
        onClick={() => {
          localStorage.setItem("cookie-consent", "true");
          setVisible(false);
        }}
        className="ml-4 px-3 py-1 bg-brand-600 hover:bg-brand-700 rounded transition-colors"
      >
        Accept
      </button>
    </div>
  );
}
