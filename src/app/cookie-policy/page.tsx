import type { Metadata } from "next";
import { PrivacySettingsLink } from "@/components/privacy-settings-link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy",
  description:
    "What cookies and browser storage DailyWorld uses, what they are for, and how you can control them.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <div className="container-page dw-enter py-12">
      <h1 className="mb-6 text-4xl font-normal text-slate-900 md:text-5xl dark:text-slate-50">Cookie Policy</h1>
      <section className="prose">
        <p>
          <em>Last updated: November 14, 2026</em>
        </p>
        <p>
          This page explains which cookies and similar technologies DailyWorld
          uses, why, and how you can control them. It complements our{" "}
          <a href="/privacy-policy" className="text-brand-600 underline">
            Privacy Policy
          </a>
          .
        </p>

        <h2>What cookies are</h2>
        <p>
          Cookies are small text files that a website or a service embedded in
          it stores in your browser. Local storage is a similar browser feature
          that keeps data on your device without sending it with every request.
          Both let a site remember something between visits.
        </p>

        <h2>What DailyWorld uses</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Set by</th>
              <th>Purpose</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>dw-theme</code> (local storage)
              </td>
              <td>DailyWorld</td>
              <td>Remembers whether you chose the light or dark theme.</td>
              <td>Preference, stays on your device</td>
            </tr>
            <tr>
              <td>Consent cookies (for example FCCDCF, FCNEC)</td>
              <td>Google</td>
              <td>
                Store the choice you make in Google&apos;s consent message so it
                is not shown on every page.
              </td>
              <td>Necessary for consent</td>
            </tr>
            <tr>
              <td>Advertising cookies (for example __gads, __gpi, IDE)</td>
              <td>Google and its ad partners</td>
              <td>
                Deliver and measure ads, limit how often you see the same ad
                and, with your consent, personalize ads.
              </td>
              <td>Advertising</td>
            </tr>
          </tbody>
        </table>
        <p>
          The calculators themselves do not use cookies: what you type is
          processed in your browser. DailyWorld does not currently use
          analytics cookies.
        </p>
        <p>
          Google publishes the full, current list of the cookies it uses and
          what each one does in its{" "}
          <a
            href="https://policies.google.com/technologies/cookies"
            className="text-brand-600 underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            cookie overview
          </a>
          .
        </p>

        <h2>Your choices</h2>
        <ul>
          <li>
            <strong>Consent message.</strong> Visitors from the European
            Economic Area, the United Kingdom and Switzerland see Google&apos;s
            consent message before advertising cookies are used. You can change
            your choice at any time: <PrivacySettingsLink fallback="use the privacy settings link in the footer" />.
          </li>
          <li>
            <strong>Personalized ads.</strong> Turn personalized advertising
            off in{" "}
            <a
              href="https://adssettings.google.com"
              className="text-brand-600 underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google&apos;s Ads Settings
            </a>{" "}
            or at{" "}
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
            <strong>Your browser.</strong> Every browser lets you block or
            delete cookies and clear local storage. Blocking all cookies does
            not stop the calculators from working; it only means your theme
            and consent choices are forgotten.
          </li>
        </ul>

        <h2>Questions</h2>
        <p>
          If anything here is unclear, write to us through the{" "}
          <a href="/contact" className="text-brand-600 underline">
            contact page
          </a>
          .
        </p>
      </section>
    </div>
  );
}
