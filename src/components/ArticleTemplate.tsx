import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Clock } from "lucide-react";
import { AdInArticle } from "@/components/AdInArticle";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

type ArticleTemplateProps = {
  title: string;
  description?: string;
  /** Absolute canonical URL of the article, used in the JSON-LD. */
  url?: string;
  content: string;
  category?: string;
  publishedAt?: string;
  readingTime?: number;
  relatedGuides?: { title: string; slug: string }[];
};

export const ArticleTemplate: React.FC<ArticleTemplateProps> = ({
  title,
  description,
  url,
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
    description: description ?? title,
    image: absoluteUrl(DEFAULT_OG_IMAGE.url),
    ...(url && { url }),
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/dailyworld-public-logo/apple-icon.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url ?? absoluteUrl("/guides"),
    },
  };

  return (
    <article className="container-page py-10 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          // Escape "<" so the JSON can never close the script tag early.
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
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

        <header className="dw-enter mb-10 border-b border-border pb-9">
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

        <AdInArticle className="my-8" />

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
