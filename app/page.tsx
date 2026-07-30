import Image from "next/image";
import Link from "next/link";
import { MarketMindsetCard } from "./components/market-mindset-card";
import { marketMindsetEntries } from "./data/market-mindset";

const featuredSlugs = [
  "fix-before-listing-750k-home",
  "buy-before-selling-raleigh",
  "improvements-that-protect-resale-value",
  "new-agent-credible-experience-750k-market",
];

const featuredEntries = featuredSlugs.flatMap((slug) => {
  const entry = marketMindsetEntries.find((item) => item.slug === slug);
  return entry ? [entry] : [];
});

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="context-line">Compass REALTOR® / Senior Broker</p>
          <h1 id="hero-title">
            Clear judgment for selling well in Raleigh and across the Triangle.
          </h1>
          <p className="hero-intro">
            Warren Hall helps established homeowners prepare, position, and
            negotiate a move with the care of a private market briefing.
          </p>
          <p className="hero-proof-line">
            More than $120M in closed volume over eight years.
          </p>
          <div className="action-row">
            <a className="button button-primary" href="#contact">
              Request a Private Valuation
            </a>
            <a className="button button-secondary" href="#buy">
              Plan a Private Consultation
            </a>
          </div>
          <p className="review-note">
            Private review — these actions do not submit an inquiry.
          </p>
        </div>
        <figure className="hero-portrait">
          <Image
            src="/warren-hall-top-100.png"
            alt="Warren Hall, Compass REALTOR and Senior Broker, recognized among the 2026 Triangle Real Producers Top 100."
            width={804}
            height={798}
            priority
            unoptimized
            sizes="(max-width: 48rem) calc(100vw - 2.5rem), (max-width: 68rem) 38vw, 32vw"
          />
          <figcaption>
            Raleigh-native perspective. Experience-led advice. Private next
            steps.
          </figcaption>
        </figure>
      </section>

      <section className="authority-section" aria-labelledby="authority-title">
        <div className="section-shell authority-inner">
          <div>
            <p className="context-line light">Verified experience</p>
            <h2 id="authority-title">Evidence before assertion.</h2>
          </div>
          <div className="authority-proof">
            <p className="authority-lead">
              More than $120M in closed volume over eight years.
            </p>
            <ul>
              <li>2026 Top 100 Triangle Real Producers</li>
              <li>REALTOR® / Senior Broker</li>
              <li>
                Six consecutive years as a top producer at his previous firm
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="sell" className="section-shell narrative-section">
        <div className="section-heading">
          <p className="context-line">Seller strategy</p>
          <h2>A strong sale begins before the home reaches the market.</h2>
        </div>
        <div className="narrative-copy">
          <p>
            Warren starts with the property, the competing choices buyers will
            see, and the seller&apos;s priorities. That creates a practical plan
            for preparation, positioning, and presentation without assuming
            every home needs a renovation.
          </p>
          <p>
            Once the home is active, communication and negotiation stay tied to
            real buyer response. The objective is a considered decision at each
            stage—not a promise about price, timing, or outcome.
          </p>
          <a className="text-link" href="#contact">
            Discuss your selling plan
          </a>
        </div>
      </section>

      <section id="buy" className="buyer-section">
        <div className="section-shell buyer-inner">
          <div className="section-heading">
            <p className="context-line">Buy & relocate</p>
            <h2>Coordinate the purchase with the sale—not after it.</h2>
          </div>
          <div className="narrative-copy">
            <p>
              Move-up and relocation decisions often connect financing,
              carrying costs, timing, and two sets of market conditions. Warren
              helps clients compare those tradeoffs before choosing whether to
              buy first, sell first, or coordinate both.
            </p>
            <a className="text-link" href="#contact">
              Plan a private consultation
            </a>
          </div>
        </div>
      </section>

      <section className="section-shell mindset-section" aria-labelledby="mindset-title">
        <div className="collection-heading">
          <div>
            <p className="context-line">Questions, answered directly</p>
            <h2 id="mindset-title">Market Mindset</h2>
          </div>
          <p>
            Practical guidance for sellers, buyers, homeowners, and real estate
            professionals—written to be useful before a conversation begins.
          </p>
        </div>
        <div className="mindset-grid">
          {featuredEntries.map((entry) => (
            <MarketMindsetCard key={entry.slug} entry={entry} />
          ))}
        </div>
        <Link className="button button-secondary collection-action" href="/market-mindset">
          Explore every question
        </Link>
      </section>

      <section className="local-section">
        <div className="section-shell local-inner">
          <p className="context-line light">Local perspective</p>
          <h2>Raleigh knowledge should change the advice, not decorate it.</h2>
          <p>
            Citywide headlines rarely explain one property or one move. Warren
            frames Triangle conditions at the relevant price band and property
            level, then refreshes the evidence when a client is ready to act.
          </p>
        </div>
      </section>

      <section className="section-shell about-section" aria-labelledby="about-title">
        <div className="about-statement">
          <p className="context-line">About Warren</p>
          <h2 id="about-title">A Raleigh-native advisor who prepares before he recommends.</h2>
        </div>
        <div className="narrative-copy">
          <p>
            Warren Hall is a Compass REALTOR® and Senior Broker serving Raleigh
            and the Triangle. His approach is grounded in direct communication,
            property-specific preparation, and advice that makes the tradeoffs
            visible.
          </p>
          <p>
            Clients receive a clear point of view without manufactured urgency.
            The purpose is to help them understand the decision and choose the
            next step with confidence.
          </p>
          <a className="text-link" href="/about">
            Read Warren&apos;s story
          </a>
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="section-shell contact-inner">
          <div>
            <p className="context-line light">Private next step</p>
            <h2 id="contact-title">Start with the decision in front of you.</h2>
          </div>
          <div className="contact-copy">
            <p>
              Approved phone, email, scheduling, privacy, and CRM destinations
              are still being prepared. No personal information is collected in
              this private review.
            </p>
            <div className="action-row">
              <a className="button button-primary" href="#review-status">
                Private Valuation — preview
              </a>
              <a className="button button-light" href="#review-status">
                Consultation — preview
              </a>
            </div>
            <p id="review-status" className="review-state" role="status">
              Private review — inquiries are not submitted.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
