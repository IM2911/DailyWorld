import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "The terms for using DailyWorld and its electricity cost calculators, including the accuracy and limits of calculator results.",
  path: "/terms-of-use",
});

export default function TermsOfUsePage() {
  return (
    <div className="container-page dw-enter py-12">
      <h1 className="mb-6 text-4xl font-normal text-slate-900 md:text-5xl dark:text-slate-50">Terms of Use</h1>
      <section className="article-prose max-w-3xl">
        <p>
          <em>Last updated: November 14, 2026</em>
        </p>
        <p>
          Welcome to DailyWorld. By accessing or using this website (the
          &ldquo;Site&rdquo;) you agree to these Terms of Use. If you do not
          agree with any part of them, please do not use the Site.
        </p>

        <h2>1. Acceptance of these terms</h2>
        <p>
          Using the Site means you accept these Terms together with our{" "}
          <a href="/privacy-policy" className="text-brand-600 underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/cookie-policy" className="text-brand-600 underline">
            Cookie Policy
          </a>
          . If any provision is found to be invalid, it will be replaced by a
          valid provision that comes as close as possible to its original
          purpose, and the rest of the Terms stay in force.
        </p>

        <h2>2. Using the Site</h2>
        <ul>
          <li>
            The Site is free and needs no account. You may use it for personal
            and lawful purposes only.
          </li>
          <li>
            You must not use the Site in a way that breaks any applicable law
            or regulation, harms the Site or its visitors, or interferes with
            its normal operation (for example automated scraping that overloads
            it, or attempts to break its security).
          </li>
        </ul>

        <h2>3. Accuracy and limits of results</h2>
        <p>
          DailyWorld calculators give general estimates for information only.
          Each result depends on the values you enter (power rating, hours of
          use, price per kWh) and on simplifying assumptions, such as an
          average duty cycle or a flat electricity rate. Real consumption
          varies with the specific appliance, how it is used, the weather,
          your tariff structure, taxes and fixed charges on your bill.
        </p>
        <p>
          We work to keep the formulas and guides correct, but we do not
          guarantee that any result or article is accurate, complete or
          suitable for a particular purpose. The calculators are not a
          substitute for professional financial, legal, tax or engineering
          advice, and DailyWorld is not responsible for decisions you make
          based on them. Check important figures against your appliance&apos;s
          label and your electricity bill.
        </p>

        <h2>4. Intellectual property</h2>
        <p>
          The text, calculators, design and other content of the Site belong to
          DailyWorld or its licensors and are protected by copyright and other
          intellectual property laws. You may share links to any page and
          quote short passages with attribution. All other rights are reserved.
        </p>

        <h2>5. Advertising and third-party links</h2>
        <p>
          The Site shows ads served by Google AdSense and may link to other
          websites. We do not control third-party sites or ads and are not
          responsible for their content, products or practices; your use of
          them is governed by their own terms and policies.
        </p>

        <h2>6. Prohibited uses</h2>
        <p>Without our prior written permission, you may not:</p>
        <ul>
          <li>
            sell, rent, sublicense or commercially redistribute the Site or
            substantial parts of its content;
          </li>
          <li>
            copy the Site&apos;s content in bulk to republish it elsewhere;
          </li>
          <li>
            click on ads or generate traffic artificially, or encourage
            others to do so.
          </li>
        </ul>

        <h2>7. Availability</h2>
        <p>
          We may change, suspend or discontinue any part of the Site at any
          time without notice. The Site is provided &ldquo;as is&rdquo;,
          without warranties of any kind, to the extent permitted by law.
        </p>

        <h2>8. Changes to these terms</h2>
        <p>
          We may update these Terms from time to time. The new version applies
          from the date it is published on this page. Continuing to use the
          Site after a change means you accept the updated Terms.
        </p>

        <h2>9. Contact</h2>
        <p>
          If you have any questions about these Terms, please use the{" "}
          <a href="/contact" className="text-brand-600 underline">
            contact form
          </a>
          .
        </p>
      </section>
    </div>
  );
}
