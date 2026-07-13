import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Warren Hall | Raleigh Real Estate Advisor",
  description:
    "Meet Warren Hall, a Raleigh-native Compass REALTOR® and Senior Broker with more than $120M in closed volume over eight years.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="about-hero section-shell" aria-labelledby="about-page-title">
        <div className="about-hero-copy">
          <p className="context-line">About Warren</p>
          <h1 id="about-page-title">
            Warren Hall brings a Raleigh-native perspective to every decision.
          </h1>
          <p className="about-deck">
            A Compass REALTOR® and Senior Broker, Warren advises sellers,
            buyers, and relocating clients across Raleigh and the Triangle with
            preparation, direct communication, and clear judgment.
          </p>
        </div>

        <figure className="about-portrait">
          <Image
            src="/warren-hall-top-100.png"
            alt="Warren Hall, Compass REALTOR and Senior Broker, with his 2026 Triangle Real Producers Top 100 recognition."
            width={804}
            height={798}
            priority
            unoptimized
            sizes="(max-width: 48rem) calc(100vw - 2.5rem), 38vw"
          />
        </figure>
      </section>

      <section className="about-evidence" aria-labelledby="experience-title">
        <div className="section-shell about-evidence-inner">
          <div>
            <p className="context-line light">Verified experience</p>
            <h2 id="experience-title">A record built one decision at a time.</h2>
          </div>
          <dl className="author-facts">
            <div>
              <dt>Closed volume</dt>
              <dd>More than $120M over eight years</dd>
            </div>
            <div>
              <dt>2026 recognition</dt>
              <dd>Top 100 Triangle Real Producers</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>REALTOR® / Senior Broker</dd>
            </div>
            <div>
              <dt>Production history</dt>
              <dd>Six consecutive years as a top producer at his previous firm</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section-shell author-approach" aria-labelledby="approach-title">
        <div>
          <p className="context-line">How Warren works</p>
          <h2 id="approach-title">Advice should make the tradeoffs visible.</h2>
        </div>
        <div className="narrative-copy">
          <p>
            Warren begins with the property, the market at the relevant price
            point, and the client&apos;s priorities. He then builds a practical
            plan for preparation, positioning, communication, and negotiation
            without manufacturing urgency or promising an outcome.
          </p>
          <p>
            His Raleigh roots inform the questions he asks, but every
            recommendation stays specific to the home and the move in front of
            the client.
          </p>
          <Link className="text-link" href="/market-mindset">
            Explore Warren&apos;s Market Mindset
          </Link>
        </div>
      </section>

      <section className="about-next-step" aria-labelledby="about-next-title">
        <div className="section-shell about-next-inner">
          <div>
            <p className="context-line light">Private next step</p>
            <h2 id="about-next-title">Start with a clearer view of the decision.</h2>
          </div>
          <div>
            <p>
              Contact destinations remain disabled during private review. No
              personal information is collected on this site.
            </p>
            <Link className="button button-primary" href="/#contact">
              Review consultation options
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
