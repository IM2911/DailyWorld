import Link from "next/link";
import { guides } from "@/lib/guides";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";

export default function GuidesPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <header className="page-intro">
        <span className="section-eyebrow">The knowledge library</span>
        <h1>Energy guides</h1>
        <p>
          Clear, practical explanations to help you understand electricity,
          improve efficiency and make confident decisions about energy at home.
        </p>
      </header>

      <div className="directory-grid">
        {guides.map((guide) => (
          <article key={guide.slug} className="directory-card group">
            <div className="mb-5 flex items-center justify-between text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <BookOpen size={15} />
                Guide
              </span>
              {guide.readingTime && (
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} />
                  {guide.readingTime} min
                </span>
              )}
            </div>
            <h2 className="transition-colors group-hover:text-brand">
              {guide.title}
            </h2>
            <p className="flex-1">{guide.description}</p>
            <Link
              href={`/guides/${guide.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
            >
              Read guide
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
