"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

// The home page is the static kit page (public/index.html), so links to it are
// plain <a> tags: a full page load, never a client-side route.
const navigation = [
  { href: "/calculators", label: "Calculators" },
  { href: "/guides", label: "Guides" },
  { href: "/energy-saving", label: "Saving" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const MAIN_ACTION = { href: "/#calculators", label: "Find your appliance" };

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header">
      <div className="container-page site-header-inner">
        <a href="/" className="brand-mark" aria-label="DailyWorld home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/dailyworld-public-logo/apple-icon.png" alt="" width={28} height={28} />
          <span>DailyWorld</span>
        </a>

        <nav className="site-nav hidden md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="site-nav-link"
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a href={MAIN_ACTION.href} className="btn btn-primary">
            {MAIN_ACTION.label}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="icon-button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-nav container-page md:hidden"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a href={MAIN_ACTION.href} className="btn btn-primary mt-2">
            {MAIN_ACTION.label}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
}
