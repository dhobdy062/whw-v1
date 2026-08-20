import type { Metadata } from "next";
import Link from "next/link";
import { siteOrigin } from "../lib/site";

const sellerTitle = "Raleigh Luxury Home Seller Guide | Triangle NC | Warren Hall";
const sellerDescription =
  "Maximize your home's equity in the $750K+ Triangle market. Explore expert seller representation and market insights with top Raleigh Realtor Warren Hall.";

export const metadata: Metadata = {
  title: sellerTitle,
  description: sellerDescription,
  alternates: { canonical: `${siteOrigin}/sell` },
  openGraph: {
    title: sellerTitle,
    description: sellerDescription,
    url: `${siteOrigin}/sell`,
  },
  twitter: {
    title: sellerTitle,
    description: sellerDescription,
  },
};

export default function SellerPage() {
  return (
    <main id="main-content">
      <header className="seller-page-hero section-shell">
        <p className="context-line">Seller representation</p>
        <h1>Selling luxury real estate in the Triangle.</h1>
        <p className="seller-page-intro">
          Selling a high-end property in Raleigh and across the Triangle calls
          for precise pricing, considered presentation, and current market
          context. Warren brings a Raleigh-native perspective and more than
          $120M in closed volume over eight years to listing representation for
          properties valued at $750,000 and above.
        </p>
        <Link className="button button-primary" href="/#contact">
          Request a Private Valuation
        </Link>
      </header>

      <section className="section-shell seller-page-section" aria-labelledby="advantage-title">
        <div className="seller-page-heading">
          <p className="context-line">The Luxury Advantage</p>
          <h2 id="advantage-title">Why list with Warren Hall</h2>
        </div>
        <div className="seller-content">
          <ul className="seller-advantage-list">
            <li>
              <strong>Raleigh-native perspective:</strong> Local knowledge that
              informs preparation, pricing, and buyer positioning across the
              Triangle.
            </li>
            <li>
              <strong>Proven experience:</strong> 2026 Top 100 Triangle Real
              Producers recognition and more than $120M in closed volume over
              eight years.
            </li>
            <li>
              <strong>Purposeful presentation:</strong> A property-specific
              marketing plan that considers the visual story, buyer audience,
              and the channels appropriate to the listing.
            </li>
            <li>
              <strong>Data-informed valuation:</strong> Pricing guidance
              tailored to the property, relevant competing homes, and current
              buyer response at its price tier.
            </li>
          </ul>
        </div>
      </section>

      <section className="seller-page-band" aria-labelledby="concierge-title">
        <div className="section-shell seller-page-section">
          <div className="seller-page-heading">
            <p className="context-line light">Concierge seller representation</p>
            <h2 id="concierge-title">A clear plan at every stage.</h2>
          </div>
          <div className="seller-table-wrap" tabIndex={0}>
            <table>
              <thead>
                <tr>
                  <th scope="col">Strategy Phase</th>
                  <th scope="col">Action Plan</th>
                  <th scope="col">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Preparation &amp; Staging</th>
                  <td>
                    Listing preparation, architectural media planning, and
                    design guidance appropriate to the property.
                  </td>
                  <td>Help the home make a clear, considered first impression.</td>
                </tr>
                <tr>
                  <th scope="row">Precision Marketing</th>
                  <td>
                    A targeted marketing plan, informed by the property, likely
                    buyer audience, and approved listing channels.
                  </td>
                  <td>Present the property consistently to relevant audiences.</td>
                </tr>
                <tr>
                  <th scope="row">Expert Negotiation</th>
                  <td>
                    Contract structuring, due-diligence coordination, and
                    appraisal preparation based on the terms that matter to the
                    seller.
                  </td>
                  <td>
                    Help the seller evaluate price, timing, and contract
                    tradeoffs clearly.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-shell seller-page-section" aria-labelledby="mindset-title">
        <div className="seller-page-heading">
          <p className="context-line">The Market Mindset</p>
          <h2 id="mindset-title">Navigate the luxury landscape with context.</h2>
        </div>
        <div className="seller-content">
          <p>
            High-value transactions benefit from clear thinking about timing,
            seller leverage, valuation shifts, and buyer expectations. Explore
            Market Mindset for practical guidance on Triangle real estate
            decisions in the $750K+ price tier.
          </p>
          <Link className="text-link" href="/market-mindset">
            Explore Market Mindset
          </Link>
        </div>
      </section>

      <section className="contact-section" aria-labelledby="seller-valuation-title">
        <div className="section-shell seller-page-valuation">
          <div>
            <p className="context-line light">Private next step</p>
            <h2 id="seller-valuation-title">Unlock your home&apos;s potential market value.</h2>
          </div>
          <div>
            <p>
              Request a custom equity valuation and private consultation to
              discuss your property, timing, and listing goals.
            </p>
            <Link className="button button-light" href="/#contact">
              Request a Private Valuation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
