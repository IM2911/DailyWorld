import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "DailyWorld is a free, independent resource with electricity cost calculators and guides that help households understand and reduce their energy use.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container-page dw-enter py-12">
      <h1 className="mb-6 text-4xl font-normal text-slate-900 md:text-5xl dark:text-slate-50">About DailyWorld</h1>
      <section className="prose">
        <p>DailyWorld is a free, independent resource dedicated to helping households understand and reduce their electricity consumption.</p>
        <p>Our mission is to provide accurate, easy‑to‑use calculators, clear guides, and actionable tips that empower users worldwide to save money and lower their carbon footprint.</p>
        <p>All content is created by energy‑efficiency enthusiasts and reviewed by industry professionals. We do not sell products or services; our revenue model relies on contextual, non‑intrusive advertising through Google AdSense.</p>
        <p>If you have questions or suggestions, feel free to <a href="/contact" className="text-brand-600 underline">contact us</a>.</p>
      </section>
    </div>
  );
}