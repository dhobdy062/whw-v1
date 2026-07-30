import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketMindsetAnswer } from "../../components/market-mindset-answer";
import {
  getMarketMindsetEntry,
  marketMindsetEntries,
  type MarketMindsetEntry,
} from "../../data/market-mindset";
import { siteOrigin } from "../../lib/site";

type AnswerPageProps = {
  params: Promise<{ slug: string }>;
};

const canonicalUrl = (entry: MarketMindsetEntry, origin = siteOrigin) =>
  `${origin.replace(/\/$/, "")}/market-mindset/${entry.slug}`;

export const dynamicParams = false;

export function generateStaticParams() {
  return marketMindsetEntries.map(({ slug }) => ({ slug }));
}

export function buildArticleJsonLd(
  entry: MarketMindsetEntry,
  origin: string,
) {
  const normalizedOrigin = origin.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.question,
    datePublished: entry.publishedAt,
    dateModified: entry.modifiedAt,
    author: {
      "@type": "Person",
      name: "Warren Hall",
      url: `${normalizedOrigin}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Warren Hall Real Estate",
    },
    mainEntityOfPage: canonicalUrl(entry, normalizedOrigin),
  } as const;
}

export function buildBreadcrumbJsonLd(
  entry: MarketMindsetEntry,
  origin: string,
) {
  const normalizedOrigin = origin.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: normalizedOrigin,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Market Mindset",
        item: `${normalizedOrigin}/market-mindset`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: entry.question,
        item: canonicalUrl(entry, normalizedOrigin),
      },
    ],
  } as const;
}

export async function generateMetadata({
  params,
}: AnswerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getMarketMindsetEntry(slug);

  if (!entry) {
    return { robots: { index: false, follow: false } };
  }

  const url = canonicalUrl(entry);

  return {
    title: `${entry.question} | Market Mindset`,
    description: entry.directAnswer,
    alternates: { canonical: url },
    robots: { index: false, follow: false },
    openGraph: {
      title: entry.question,
      description: entry.directAnswer,
      type: "article",
      url,
      publishedTime: entry.publishedAt,
      modifiedTime: entry.modifiedAt,
      authors: [`${siteOrigin}/about`],
    },
  };
}

export default async function MarketMindsetAnswerPage({
  params,
}: AnswerPageProps) {
  const { slug } = await params;
  const entry = getMarketMindsetEntry(slug);

  if (!entry) {
    notFound();
  }

  const articleJsonLd = buildArticleJsonLd(entry, siteOrigin);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(entry, siteOrigin);
  const serializeJsonLd = (value: object) =>
    JSON.stringify(value).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }}
      />
      <MarketMindsetAnswer entry={entry} />
    </>
  );
}
