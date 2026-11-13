import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How DailyWorld handles data, cookies, Google Analytics and Google AdSense, and how you can exercise your privacy rights.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-50">Privacy Policy</h1>
      <section className="prose">
        <p>
          At DailyWorld, we take your privacy seriously. This policy describes
          what information we collect, how we use it, and how you can
          exercise your rights.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We do not require users to create accounts. We may collect anonymous
          analytics data such as pages visited, time on site, and
          device/browser type. This helps us improve the site. We do not sell
          personal data.
        </p>

        <h2>Cookies and Similar Technologies</h2>
        <p>
          DailyWorld uses cookies for analytics (Google Analytics) and to
          remember user preferences (such as theme). We may also use cookies
          for advertising (Google AdSense). Users can manage cookies through
          their browser settings.
        </p>

        <h2>Google Analytics</h2>
        <p>
          We use Google Analytics to collect anonymous data about site usage,
          helping us improve content and navigation. These cookies only
          collect aggregated information and do not personally identify
          users.
        </p>

        <h2>Google AdSense</h2>
        <p>
          DailyWorld uses Google AdSense to serve contextual ads based on
          user interests. Ads are served through Google AdSense, which may use
          advertising cookies to show more relevant ads on our site and on
          other websites.
        </p>

        <h2>User Rights (GDPR/LGPD)</h2>
        <p>
          If you are a resident of the European Union, you may request at any
          time:
        </p>
        <ul>
          <li>Access to your personal data that we have stored.</li>
          <li>Rectification or deletion of your data.</li>
          <li>Obtaining a portable copy of your data.</li>
          <li>Objection to the processing of your data.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us through the{" "}
          <a href="/contact" className="text-brand-600 underline">
            Contact page
          </a>{" "}
          or by email at{" "}
          <a href="mailto:info@dailyworld.app" className="text-brand-600 underline">
            info@dailyworld.app
          </a>.
        </p>

        <h2>Data Retention and Protection</h2>
        <p>
          Personal data we collect will be retained for as long as necessary
          for the purposes for which it was collected, unless a longer
          retention period is required by law. We take appropriate technical
          and organizational measures to protect your personal data against
          unauthorized access, loss, destruction, or alteration.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy periodically. If we make
          significant changes, we will notify users through a notice on the
          site or by email (if we have one). Continued use of the site after
          any change constitutes acceptance of the new terms.
        </p>

        <h2>Data Controller</h2>
        <p>
          The data controller is:
        </p>
        <ul>
          <li>Name: DailyWorld</li>
          <li>Address: (pending completion)</li>
          <li>Email: info@dailyworld.app</li>
        </ul>

        <p>
          If you have any questions about this Privacy Policy, please use the{" "}
          <a href="/contact" className="text-brand-600 underline">
            Contact form
          </a>{" "}
          to get in touch with us.
        </p>
      </section>
    </div>
  );
}