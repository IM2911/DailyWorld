export default function CookiePolicyPage() {
  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-50">Cookie Policy</h1>
      <section className="prose">
        <p>This policy explains what cookies are, how DailyWorld uses them, and how you can control them.</p>
        <h2>What Are Cookies?</h2>
        <p>Cookies are small text files stored on your device by websites you visit. They help the site remember your preferences and provide analytics.</p>
        <h2>How We Use Cookies</h2>
        <ul>
          <li>Essential cookies: required for the site to function.</li>
          <li>Preference cookies: remember your theme and settings.</li>
          <li>Analytics cookies: help us understand how visitors use the site.</li>
          <li>Advertising cookies: used by Google AdSense to serve relevant ads.</li>
        </ul>
        <h2>Managing Cookies</h2>
        <p>You can accept or reject cookies through your browser settings. Disabling essential cookies may limit some functionality.</p>
        <p>For more information, see our <a href="/privacy-policy" className="text-brand-600 underline">Privacy Policy</a>.</p>
      </section>
    </div>
  );
}