import Script from "next/script";

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!gaId) {
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