import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guides } from "@/lib/guides";
import { ArticleTemplate } from "@/components/ArticleTemplate";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug?.toLowerCase();
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return {
      title: "Guide not found",
      robots: { index: false, follow: true },
    };
  }

  // The root layout's title template appends " | DailyWorld".
  return pageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    type: "article",
  });
}

export default async function GuidePage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug?.toLowerCase();

  if (!slug) {
    notFound();
  }

  const guide = guides.find((g) => g.slug === slug);
  if (!guide) {
    notFound();
  }

  // Find related guides (exclude current guide)
  // The next three guides in the list (wrapping around), so every guide links
  // to different articles instead of all pointing at the first three.
  const index = guides.indexOf(guide);
  const relatedGuides = [1, 2, 3].map((k) => guides[(index + k) % guides.length]);

  return (
    <ArticleTemplate
      title={guide.title}
      description={guide.description}
      url={absoluteUrl(`/guides/${guide.slug}`)}
      content={guide.content}
      readingTime={guide.readingTime}
      relatedGuides={relatedGuides}
    />
  );
}
