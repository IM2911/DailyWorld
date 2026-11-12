import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CalculatorLayoutProps {
  title: string;
  description: string;
  formula: string;
  example: string;
  children: ReactNode;
  relatedCalculators?: { href: string; label: string }[];
  relatedGuides?: { href: string; label: string }[];
}

export function CalculatorLayout({
  title,
  description,
  formula,
  example,
  children,
  relatedCalculators,
  relatedGuides,
}: CalculatorLayoutProps) {
  return (
    <div className="container-page py-8 md:py-12">
      <nav className="breadcrumb mb-5" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/calculators">Calculators</Link>
        <span aria-hidden="true">/</span>
        <span>{title}</span>
      </nav>

      <header className="mb-8 md:mb-10 max-w-3xl">
        <span className="section-eyebrow">Energy calculator</span>
        <h1 className="mt-3 text-3xl md:text-4xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base md:text-lg">{description}</p>
      </header>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3 lg:gap-8">
        <section className="calculator-panel min-w-0 lg:col-span-2" aria-label={`${title} form`}>
          {children}
        </section>

        <aside className="grid gap-4 lg:sticky lg:top-24">
          <section className="calculator-aside">
            <span className="section-eyebrow">The method</span>
            <h2 className="mt-3 mb-3 text-xl">How it is calculated</h2>
            <p className="mb-3 text-sm leading-7">{formula}</p>
            <p className="mb-0 text-sm leading-7">
              <strong className="text-text-primary">Example:</strong> {example}
            </p>
          </section>

          {relatedCalculators && relatedCalculators.length > 0 && (
            <section className="calculator-aside">
              <h2 className="mb-3 text-base">Related calculators</h2>
              <ul className="grid gap-2">
                {relatedCalculators.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:gap-3"
                    >
                      {item.label}
                      <ArrowRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {relatedGuides && relatedGuides.length > 0 && (
            <section className="calculator-aside">
              <h2 className="mb-3 text-base">Related guides</h2>
              <ul className="grid gap-2">
                {relatedGuides.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:gap-3"
                    >
                      {item.label}
                      <ArrowRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>
      </div>
    </div>
  );
}
