export default function PrivacyPolicyPage() {
  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-50">Privacy Policy</h1>
      <section className="prose">
        <p>At DailyWorld, we take your privacy seriously. This policy describes what information we collect, how we use it, and how you can exercise your rights.</p>
        <h2>Information We Collect</h2>
        <p>We do not require users to create accounts. We may collect anonymous analytics data such as pages visited, time on site, and device/browser type. This helps us improve the site. We do not sell personal data.</p>
        <h2>Cookies</h2>
        <p>Our site uses cookies for analytics and to remember user preferences (such as theme). You can manage cookies through your browser settings.</p>
        <h2>Advertising</h2>
        <p>DailyWorld uses Google AdSense, which may use cookies to serve ads based on your interests. Google's privacy policy applies.</p>
        <h2>Your Rights</h2>
        <p>You can request access to or deletion of any personal data we hold by contacting us at <a href="mailto:info@dailyworld.app" className="text-brand-600 underline">info@dailyworld.app</a>.</p>
        <h2>Changes</h2>
        <p>We may update this policy periodically. Continued use of the site after changes constitutes acceptance.</p>
      </section>
    </div>
  );
}