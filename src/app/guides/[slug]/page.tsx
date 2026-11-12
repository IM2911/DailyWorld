import { notFound } from "next/navigation";
import { guides } from "@/lib/guides";
import { ArticleTemplate } from "@/components/ArticleTemplate";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug?.toLowerCase();
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return {
      title: "Guide Not Found | DailyWorld",
    };
  }

  return {
    title: `${guide.title} | DailyWorld Energy Guides`,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
    },
  };
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
  const relatedGuides = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <ArticleTemplate
      title={guide.title}
      content={guide.content}
      relatedGuides={relatedGuides}
    />
  );
}
