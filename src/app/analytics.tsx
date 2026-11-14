import Script from "next/script";

/**
 * Google Analytics 4, only when NEXT_PUBLIC_GA_MEASUREMENT_ID holds a real
 * measurement ID ("G-…"); empty values and placeholders such as
 * "G-XXXXXXXXXX" load nothing. Consent defaults to denied; Google's consent
 * message (AdSense Privacy & messaging) updates it when the visitor chooses.
 * If you turn this on, list Google Analytics in the privacy and cookie pages.
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

  if (!/^G-[A-Z0-9]{4,}$/i.test(gaId) || /X{4,}/i.test(gaId)) {
    return null;
  }

  return (
    <>
      {/* Google Consent Mode – default to denied, we update later when user accepts */}
      <Script
        id="gtag-consent"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.gtag = window.gtag || function(){dataLayer.push(arguments)};
            window.dataLayer = window.dataLayer || [];
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });
          `,
        }}
      />

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', { send_page_view: false });
          `,
        }}
      />
    </>
  );
}