import type { MarketMindsetEntry } from "../data/market-mindset";

type MarketMindsetCardProps = {
  entry: MarketMindsetEntry;
};

const audienceLabels: Record<MarketMindsetEntry["audience"], string> = {
  seller: "For sellers",
  buyer: "For buyers",
  homeowner: "For homeowners",
  agent: "For agents",
};

export function MarketMindsetCard({ entry }: MarketMindsetCardProps) {
  const firstSentenceEnd = entry.directAnswer.indexOf(". ");
  const excerpt =
    firstSentenceEnd === -1
      ? entry.directAnswer
      : entry.directAnswer.slice(0, firstSentenceEnd + 1);

  return (
    <article className="mindset-card">
      <div className="mindset-meta">
        <span>{entry.category}</span>
        <span>{audienceLabels[entry.audience]}</span>
      </div>
      <h3>
        <a href={`/market-mindset/${entry.slug}`}>{entry.question}</a>
      </h3>
      <p>{excerpt}</p>
      <div className="mindset-status">
        <span>Video answer coming soon</span>
        <a href={`/market-mindset/${entry.slug}`}>Read Warren&apos;s answer</a>
      </div>
    </article>
  );
}
