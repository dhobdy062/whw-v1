import type { Metadata } from "next";
import Link from "next/link";
import { MarketMindsetCard } from "../components/market-mindset-card";
import { marketMindsetEntries } from "../data/market-mindset";
import { siteOrigin } from "../lib/site";

const categories = [
  "Selling strategically",
  "Protecting and increasing home value",
  "Buying and moving up",
  "Raleigh market conditions",
  "Relocation and neighborhoods",
  "Financing, inspections, and negotiations",
  "Agent growth and higher-value real estate",
] as const;

const categoryId = (category: string) =>
  `topic-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;

export const metadata: Metadata = {
  title: "Market Mindset | Warren Hall Real Estate",
  description:
    "Experience-led answers from Warren Hall about selling, buying, relocation, home value, Raleigh market decisions, and agent growth.",
  alternates: { canonical: `${siteOrigin}/market-mindset` },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Market Mindset | Warren Hall Real Estate",
    description:
      "Video perspectives and substantial written answers for Raleigh and Triangle real estate decisions.",
    url: `${siteOrigin}/market-mindset`,
    type: "website",
  },
};

export default function MarketMindsetPage() {
  return (
    <main id="main-content" className="mindset-index">
      <header className="mindset-index-hero section-shell">
        <p className="context-line">Questions, answered with judgment</p>
        <h1>Market Mindset</h1>
        <p className="mindset-index-intro">
          Each answer pairs Warren&apos;s video perspective with useful written
          detail, transcript support, and relevant sources. Videos are being
          prepared; the complete written guidance is available now.
        </p>
      </header>

      <nav className="topic-cluster-nav section-shell" aria-label="Market Mindset topics">
        <p>Explore by topic</p>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <a href={`#${categoryId(category)}`}>{category}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mindset-topic-list section-shell">
        {categories.map((category) => {
          const entries = marketMindsetEntries.filter(
            (entry) => entry.category === category,
          );

          return (
            <section
              className="mindset-topic"
              id={categoryId(category)}
              key={category}
              aria-labelledby={`${categoryId(category)}-heading`}
            >
              <div className="mindset-topic-heading">
                <p>{String(categories.indexOf(category) + 1).padStart(2, "0")}</p>
                <h2 id={`${categoryId(category)}-heading`}>{category}</h2>
              </div>
              {entries.length > 0 ? (
                <div className="mindset-grid mindset-topic-grid">
                  {entries.map((entry) => (
                    <MarketMindsetCard entry={entry} key={entry.slug} />
                  ))}
                </div>
              ) : (
                <div className="mindset-empty-state">
                  <p>
                    Raleigh market-condition answers are being prepared. In the
                    meantime, Warren can provide property-specific context in a
                    private consultation.
                  </p>
                  <Link className="text-link" href="/#contact">
                    Request a private consultation
                  </Link>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}
