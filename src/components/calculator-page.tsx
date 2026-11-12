import type { ReactNode } from "react";
import Script from "next/script";

interface CalculatorPageProps {
  title: string;
  description: string;
  canonical: string;
  schema: Record<string, unknown>;
  children: ReactNode;
}

export function CalculatorPage({
  title,
  description,
  canonical,
  schema,
  children,
}: CalculatorPageProps) {
  return (
    <>
      <Script
        id="calc-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container-page py-6">
        <nav className="text-sm text-slate-500 mb-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li><a href="/" className="hover:text-brand-600">Home</a></li>
            <li>/</li>
            <li><a href="/calculators" className="hover:text-brand-600">Calculators</a></li>
            <li>/</li>
            <li className="text-slate-700 dark:text-slate-300">{title}</li>
          </ol>
        </nav>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            {title}
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-3xl">
            {description}
          </p>
        </header>
        {children}
      </div>
    </>
  );
}