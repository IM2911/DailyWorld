import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Clock } from "lucide-react";
import { AdInArticle } from "@/components/AdInArticle";

type ArticleTemplateProps = {
  title: string;
  content: string;
  category?: string;
  publishedAt?: string;
  readingTime?: number;
  relatedGuides?: { title: string; slug: string }[];
};

export const ArticleTemplate: React.FC<ArticleTemplateProps> = ({
  title,
  content,
  category = "Guide",
  publishedAt,
  readingTime,
  relatedGuides,
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    author: {
      "@type": "Organization",
      name: "DailyWorld",
      url: "https://dailyworld.app",
    },
    publisher: {
      "@type": "Organization",
      name: "DailyWorld",
      logo: {
        "@type": "ImageObject",
        url: "https://dailyworld.app/dailyworld-public-logo/icon.png",
      },
    },
    description: title,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://dailyworld.app/guides",
    },
  };

  return (
    <article className="container-page py-10 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="article-shell">
        <nav className="breadcrumb mb-8" aria-label="Breadcrumb">
          <Link href="/guides" className="inline-flex items-center gap-2">
            <ArrowLeft size={14} />
            Guides
          </Link>
          <span aria-hidden="true">/</span>
          <span>{category}</span>
        </nav>

        <header className="mb-10 border-b border-border pb-9">
          <span className="section-eyebrow">{category}</span>
          <h1 className="mt-4 mb-5 text-4xl md:text-5xl">{title}</h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            {publishedAt && (
              <span className="inline-flex items-center gap-2">
                <Clock size={15} />
                {publishedAt}
              </span>
            )}
            {readingTime && (
              <span className="inline-flex items-center gap-2">
                <BookOpen size={15} />
                {readingTime} min read
              </span>
            )}
          </div>
        </header>

        <div
          className="article-prose"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className="my-8">
          <AdInArticle />
        </div>

        {relatedGuides && relatedGuides.length > 0 && (
          <section className="mt-16 border-t border-border pt-10">
            <div className="mb-6">
              <span className="section-eyebrow">Keep exploring</span>
              <h2 className="mt-3 text-2xl">Related guides</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
                >
                  <h3 className="mb-3 text-lg transition-colors group-hover:text-brand">
                    {guide.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    Read guide
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
};
