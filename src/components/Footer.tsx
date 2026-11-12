import Link from "next/link";
import { Zap } from "lucide-react";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { href: "/calculators", label: "All calculators" },
      { href: "/guides", label: "Energy guides" },
      { href: "/energy-saving", label: "Energy saving" },
    ],
  },
  {
    title: "Popular tools",
    links: [
      { href: "/calculators/electricity-cost", label: "Electricity cost" },
      { href: "/calculators/refrigerator", label: "Refrigerator cost" },
      { href: "/calculators/air-conditioner", label: "Air conditioner cost" },
      { href: "/calculators/washing-machine", label: "Washing machine cost" },
    ],
  },
  {
    title: "DailyWorld",
    links: [
      { href: "/about", label: "About us" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy-policy", label: "Privacy policy" },
      { href: "/terms-of-use", label: "Terms of use" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-page">
        <div className="site-footer-main">
          <div>
            <Link href="/" className="brand-mark" aria-label="DailyWorld home">
              <span className="brand-symbol" aria-hidden="true">
                <Zap size={17} strokeWidth={2.6} />
              </span>
              <span>DailyWorld</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7">
              Clear electricity cost calculators and practical energy guides
              to help make everyday energy decisions easier.
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
          <p className="m-0 text-xs">
            © {new Date().getFullYear()} DailyWorld. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/cookie-policy">Cookie policy</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
