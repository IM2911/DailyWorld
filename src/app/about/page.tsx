export default function AboutPage() {
  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-50">About DailyWorld</h1>
      <section className="prose">
        <p>DailyWorld is a free, independent resource dedicated to helping households understand and reduce their electricity consumption.</p>
        <p>Our mission is to provide accurate, easy‑to‑use calculators, clear guides, and actionable tips that empower users worldwide to save money and lower their carbon footprint.</p>
        <p>All content is created by energy‑efficiency enthusiasts and reviewed by industry professionals. We do not sell products or services; our revenue model relies on contextual, non‑intrusive advertising through Google AdSense.</p>
        <p>If you have questions or suggestions, feel free to <a href="/contact" className="text-brand-600 underline">contact us</a>.</p>
      </section>
    </div>
  );
}