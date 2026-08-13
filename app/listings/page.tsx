import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { featuredListings } from "../data/featured-listings";
import { siteOrigin } from "../lib/site";

export const metadata: Metadata = {
  title: "Featured Listings | Warren Hall",
  description:
    "A private-review gallery of featured property photography shared by Warren Hall.",
  alternates: { canonical: `${siteOrigin}/listings` },
};

export default function ListingsPage() {
  return (
    <main id="main-content">
      <header className="listings-hero section-shell">
        <p className="context-line">Featured listings</p>
        <h1>Properties worth a closer look.</h1>
        <p className="listings-intro">
          A selection of property photography Warren shared from his MLS
          materials. Availability and details can change; contact Warren for
          current property information.
        </p>
      </header>

      <section
        className="section-shell listings-section"
        aria-label="Featured listing gallery"
      >
        <div className="listings-grid">
          {featuredListings.map((listing) => (
            <figure className="listing-card" key={listing.number}>
              <Image
                src={listing.image}
                alt={`Featured property photography ${listing.number}`}
                width={1200}
                height={900}
                priority={listing.number === "01"}
                sizes="(max-width: 48rem) 100vw, (max-width: 68rem) 50vw, 33vw"
              />
              <figcaption>
                <span>Featured property</span>
                <span className="listing-num">{listing.number}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="contact-section" aria-labelledby="listings-cta-title">
        <div className="section-shell listings-cta">
          <div>
            <p className="context-line light">Private next step</p>
            <h2 id="listings-cta-title">Discuss a property with Warren.</h2>
          </div>
          <Link className="button button-light" href="/#contact">
            Start a private conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
