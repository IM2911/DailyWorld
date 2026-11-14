import type { Metadata } from "next";
import { PrivacySettingsLink } from "@/components/privacy-settings-link";
import { CONTACT_EMAIL, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How DailyWorld handles data, cookies and Google AdSense advertising, and how you can exercise your privacy rights.",
  path: "/privacy-policy",
});

const LAST_UPDATED = "November 14, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page dw-enter py-12">
      <h1 className="mb-6 text-4xl font-normal text-slate-900 md:text-5xl dark:text-slate-50">Privacy Policy</h1>
      <section className="prose">
        <p>
          <em>Last updated: {LAST_UPDATED}</em>
        </p>
        <p>
          DailyWorld is a free website with electricity cost calculators and
          energy guides. This policy explains what information is processed
          when you use the site, why, who else is involved, and the choices
          and rights you have.
        </p>

        <h2>Who is responsible</h2>
        <p>
          DailyWorld is responsible for the processing described here. You can
          reach us through the{" "}
          <a href="/contact" className="text-brand-600 underline">
            contact form
          </a>
          {CONTACT_EMAIL && (
            <>
              {" "}or by email at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-600 underline">
                {CONTACT_EMAIL}
              </a>
            </>
          )}
          .
        </p>

        <h2>Information we do not collect</h2>
        <p>
          You do not need an account to use DailyWorld. The numbers you type
          into a calculator (wattage, hours of use, your price per kWh) are
          processed in your browser to show the result. They are not sent to
          us or stored on our servers.
        </p>

        <h2>Information processed when you visit</h2>
        <ul>
          <li>
            <strong>Hosting and security.</strong> The site is served by
            Cloudflare. Like any web server, it receives technical data such as
            your IP address, browser type and the page requested, which is
            needed to deliver the page and protect the site from abuse.
          </li>
          <li>
            <strong>Theme preference.</strong> If you switch between light and
            dark mode, your choice is saved in your browser&apos;s local
            storage (key <code>dw-theme</code>). It never leaves your device.
          </li>
          <li>
            <strong>Contact form.</strong> When you send a message, we receive
            your name, email address, the reason you chose and your message.
            It is delivered to our inbox by Resend, an email delivery service,
            and used only to reply to you. We keep it for as long as needed to
            handle your request.
          </li>
        </ul>

        <h2>Advertising (Google AdSense)</h2>
        <p>
          DailyWorld is funded by advertising served through Google AdSense.
          Ads help keep every calculator and guide free.
        </p>
        <ul>
          <li>
            Third-party vendors, including Google, use cookies to serve ads
            based on your previous visits to this website and to other
            websites.
          </li>
          <li>
            Google&apos;s use of advertising cookies enables it and its
            partners to serve ads to you based on your visits to this site
            and/or other sites on the Internet.
          </li>
          <li>
            You can opt out of personalized advertising in{" "}
            <a
              href="https://adssettings.google.com"
              className="text-brand-600 underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google&apos;s Ads Settings
            </a>
            . You can also opt out of some third-party vendors&apos; use of
            cookies for personalized advertising at{" "}
            <a
              href="https://www.aboutads.info/choices/"
              className="text-brand-600 underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              aboutads.info
            </a>
            .
          </li>
          <li>
            Google explains how it uses information from sites that show its
            ads in{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="text-brand-600 underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              How Google uses information from sites or apps that use its
              services
            </a>
            .
          </li>
        </ul>
        <p>
          Visitors from the European Economic Area, the United Kingdom and
          Switzerland are asked for consent through Google&apos;s consent
          message, a consent management platform certified under the IAB
          Transparency and Consent Framework. Until you consent, Google serves
          only non-personalized or limited ads. You can change or withdraw
          your choice at any time from <PrivacySettingsLink fallback="the privacy settings link in the site footer" />.
        </p>

        <h2>Analytics</h2>
        <p>
          DailyWorld does not currently use analytics cookies. If we add an
          analytics service, we will name it here and ask for your consent
          where the law requires it before it runs.
        </p>

        <h2>Legal bases</h2>
        <ul>
          <li>
            Delivering and securing the site: our legitimate interest in
            running a working, safe website.
          </li>
          <li>
            Answering your messages: steps you ask us to take, and our
            legitimate interest in replying.
          </li>
          <li>
            Personalized advertising and advertising cookies: your consent,
            where consent is required.
          </li>
        </ul>

        <h2>Your rights</h2>
        <p>
          Depending on where you live (for example under the EU and UK GDPR or
          Brazil&apos;s LGPD), you may have the right to:
        </p>
        <ul>
          <li>access the personal data we hold about you;</li>
          <li>have it corrected or deleted;</li>
          <li>receive a portable copy of it;</li>
          <li>object to or restrict its processing;</li>
          <li>withdraw consent at any time, without affecting earlier processing;</li>
          <li>complain to your local data protection authority.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us through the{" "}
          <a href="/contact" className="text-brand-600 underline">
            contact form
          </a>
          . Requests about advertising data held by Google can also be made
          directly to Google.
        </p>

        <h2>Children</h2>
        <p>
          DailyWorld is not directed at children under 13, and we do not
          knowingly collect personal data from them.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy when the site or the services it uses
          change. The date at the top shows the latest version. Significant
          changes will be highlighted on the site.
        </p>

        <p>
          See also our{" "}
          <a href="/cookie-policy" className="text-brand-600 underline">
            Cookie Policy
          </a>{" "}
          and{" "}
          <a href="/terms-of-use" className="text-brand-600 underline">
            Terms of Use
          </a>
          .
        </p>
      </section>
    </div>
  );
}
