import Link from "next/link";
import { ArrowRight } from "lucide-react";

// The same dark footer as the home page (public/index.html, footer-dark with close-type):
// the main action once more, the name set large, the link columns and the legal row.
const footerGroups = [
  {
    title: "Calculators",
    links: [
      { href: "/calculators/air-conditioner", label: "Air conditioner" },
      { href: "/calculators/refrigerator", label: "Refrigerator" },
      { href: "/calculators/monthly-bill", label: "Monthly bill" },
      { href: "/calculators", label: "All 15" },
    ],
  },
  {
    title: "Guides",
    links: [
      { href: "/guides/how-to-reduce-your-electricity-bill", label: "Lower your bill" },
      { href: "/guides/kwh-explained-a-complete-guide", label: "kWh explained" },
      { href: "/energy-saving", label: "Saving tips" },
      { href: "/guides", label: "All 20" },
    ],
  },
  {
    title: "DailyWorld",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Policies",
    links: [
      { href: "/privacy-policy", label: "Privacy" },
      { href: "/terms-of-use", label: "Terms" },
      { href: "/cookie-policy", label: "Cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-page">
        <div className="site-footer-cta">
          <h2>Find what your appliances cost</h2>
          <p className="m-0">Free to use, with no account.</p>
          <a href="/#calculators" className="btn btn-primary">
            Find your appliance
            <ArrowRight size={24} aria-hidden="true" />
          </a>
        </div>

        <div className="site-footer-main">
          <div>
            <a href="/" className="brand-mark" aria-label="DailyWorld home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/dailyworld-public-logo/apple-icon.png" alt="" width={44} height={44} />
              <span>DailyWorld</span>
            </a>
            <p className="mt-5 max-w-xs text-lg leading-7">
              Electricity cost calculators and energy guides
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="footer-heading">{group.title}</h2>
              <ul className="footer-link-list">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="site-footer-bottom">
          <p className="m-0 text-sm">© {new Date().getFullYear()} DailyWorld</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-of-use">Terms</Link>
            <a href="/sitemap.xml">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
