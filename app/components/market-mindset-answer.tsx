import Link from "next/link";
import type { MarketMindsetEntry } from "../data/market-mindset";
import { getRelatedEntries } from "../data/market-mindset";

type MarketMindsetAnswerProps = {
  entry: MarketMindsetEntry;
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));

function getAnswerCallToAction({ audience }: Pick<MarketMindsetEntry, "audience">) {
  if (audience === "agent") {
    return {
      eyebrow: "For real estate professionals",
      heading: "Build experience with disciplined guidance.",
      label: "Explore agent guidance",
      href: "/market-mindset#topic-agent-growth-and-higher-value-real-estate",
    };
  }

  if (audience === "buyer") {
    return {
      eyebrow: "Planning a move",
      heading: "Put the next decision in property-specific context.",
      label: "Request a Private Consultation",
      href: "/#contact",
    };
  }

  return {
    eyebrow: "Considering a sale",
    heading: "Start with a private, property-specific perspective.",
    label: "Request a Private Valuation",
    href: "/#contact",
  };
}

export function MarketMindsetAnswer({ entry }: MarketMindsetAnswerProps) {
  const relatedEntries = getRelatedEntries(entry);
  const cta = getAnswerCallToAction({ audience: entry.audience });

  return (
    <main id="main-content" className="mindset-answer">
      <article>
        <header className="answer-header section-shell">
          <nav aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/market-mindset">Market Mindset</Link>
          </nav>
          <p className="context-line">{entry.category}</p>
          <h1>{entry.question}</h1>
          <p className="direct-answer">{entry.directAnswer}</p>
          <div className="answer-byline">
            <span>
              By <Link href="/about">Warren Hall</Link>
            </span>
            <span>
              Published <time dateTime={entry.publishedAt}>{formatDate(entry.publishedAt)}</time>
            </span>
            <span>
              Updated <time dateTime={entry.modifiedAt}>{formatDate(entry.modifiedAt)}</time>
            </span>
          </div>
        </header>

        <div className="answer-body section-shell">
          <aside className="answer-media" aria-label="Video answer status">
            {entry.video.status === "published" ? (
              <div className="video-published">
                <p>Video available</p>
                {entry.video.duration ? <span>{entry.video.duration}</span> : null}
              </div>
            ) : (
              <div className="video-coming-soon">
                <span aria-hidden="true">▶</span>
                <p>Warren&apos;s video answer is coming soon.</p>
              </div>
            )}
            <div className="transcript-state">
              <h2>Transcript</h2>
              {entry.video.transcript ? (
                <p>{entry.video.transcript}</p>
              ) : (
                <p>
                  A verified transcript will be published with the finished
                  video. The written answer on this page is complete and
                  available now.
                </p>
              )}
            </div>
          </aside>

          <div className="answer-guidance">
            {entry.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}

            <section className="answer-sources">
              <h2>Sources and review note</h2>
              {entry.sources.length > 0 ? (
                <ul>
                  {entry.sources.map((source) => (
                    <li key={source.href}>
                      <a href={source.href} rel="noreferrer">
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>
                  This experience-led answer does not depend on an external
                  market report.
                </p>
              )}
              <p className="answer-disclosure">
                Real estate conditions and property details change. Review
                current local data, professional advice, and contract terms
                before acting; this general guidance does not promise an
                outcome.
              </p>
            </section>
          </div>
        </div>
      </article>

      <section className="related-answers section-shell" aria-labelledby="related-heading">
        <p className="context-line">Continue the conversation</p>
        <h2 id="related-heading">Related Market Mindset questions</h2>
        <ul>
          {relatedEntries.map((related) => (
            <li key={related.slug}>
              <Link href={`/market-mindset/${related.slug}`}>
                {related.question}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="answer-cta">
        <div className="section-shell">
          <p className="context-line light">{cta.eyebrow}</p>
          <h2>{cta.heading}</h2>
          <Link className="button button-light" href={cta.href}>
            {cta.label}
          </Link>
          <p className="review-note">Private review — inquiries are not submitted.</p>
        </div>
      </section>
    </main>
  );
}
