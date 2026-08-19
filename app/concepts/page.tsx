import Image from "next/image";
import { FeaturedPropertyCarousel } from "../components/featured-property-carousel";
import { featuredListings } from "../data/featured-listings";

const carouselListings = featuredListings.slice(0, 5);

export default function ConceptsPage() {
  return (
    <main id="main-content" className="section-shell concept-page">
      <p className="concept-label">
        Concept 1 — Overlap feature row (compare against the live homepage
        hero, which uses Concept 3 — Magazine diptych)
      </p>
      <section className="concept-1-hero" aria-label="Concept 1 hero">
        <div className="hero-copy">
          <p className="context-line">Compass REALTOR® / Senior Broker</p>
          <h1>Clear advice for consequential moves.</h1>
          <p className="hero-intro">
            A private, evidence-led perspective for sellers, buyers, and
            homeowners across the Triangle.
          </p>
          <div className="action-row">
            <a className="button button-primary" href="#contact">
              Request a Private Valuation
            </a>
            <a className="button button-secondary" href="#buy">
              Book a Private Consultation
            </a>
          </div>
        </div>
        <div className="concept-1-portrait-col">
          <figure className="concept-1-portrait">
            <Image
              src="/warren-hall-top-100.png"
              alt="Warren Hall, Compass REALTOR and Senior Broker."
              width={804}
              height={798}
              unoptimized
            />
          </figure>
          <div className="concept-1-feature-row">
            <FeaturedPropertyCarousel listings={carouselListings} />
            <div className="concept-1-feature-copy">
              <p className="context-line">Featured portfolio</p>
              <h3>
                Exceptional homes, <em>exceptionally presented.</em>
              </h3>
              <p>
                A curated portfolio of Raleigh and the Triangle&apos;s most
                considered properties, each one guided to market with
                evidence-based pricing and marketing built to perform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
