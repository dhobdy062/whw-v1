import type { Metadata } from "next";
import Link from "next/link";
import { siteOrigin } from "../lib/site";

const buyerTitle = "Raleigh Luxury Homes $750K+ | Warren Hall Realtor";
const buyerDescription =
  "Explore premier $750K+ luxury homes in Hayes Barton, North Hills & Brier Creek. Partner with Top 100 Raleigh Realtor Warren Hall for expert Triangle market access.";

export const metadata: Metadata = {
  title: buyerTitle,
  description: buyerDescription,
  alternates: { canonical: `${siteOrigin}/buy` },
  openGraph: {
    title: buyerTitle,
    description: buyerDescription,
    url: `${siteOrigin}/buy`,
  },
  twitter: {
    title: buyerTitle,
    description: buyerDescription,
  },
};

export default function BuyerPage() {
  return (
    <main id="main-content">
      <header className="seller-page-hero section-shell">
        <p className="context-line">Buyer representation</p>
        <h1>Find your exceptional Triangle home.</h1>
        <p className="seller-page-intro">
          Finding an exceptional home in the Raleigh-Durham region requires
          local precision, hyper-focused market data, and an insider&apos;s
          perspective. With over $120 million in listed properties over the
          past eight years and a rank among the Top 100 Realtors in the area,
          Warren Hall provides buyers with a distinct advantage in homes priced
          from $750,000 and above. As a Raleigh native, Warren combines
          lifetime regional insight with high-caliber representation across the
          Triangle&apos;s most prestigious communities.
        </p>
        <Link className="button button-primary" href="/#contact">
          Schedule a Private Consultation
        </Link>
      </header>

      <section
        className="section-shell seller-page-section"
        aria-labelledby="enclaves-title"
      >
        <div className="seller-page-heading">
          <p className="context-line">Local market knowledge</p>
          <h2 id="enclaves-title">Featured Triangle Luxury Enclaves</h2>
        </div>
        <div className="seller-table-wrap" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th scope="col">Neighborhood</th>
                <th scope="col">Signature Appeal</th>
                <th scope="col">Market Profile ($750K+)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Hayes Barton</th>
                <td>
                  Historic charm, tree-lined avenues, Georgian and Tudor
                  architecture near Five Points.
                </td>
                <td>
                  Iconic Inside-the-Beltline estates, historic restorations,
                  and prime walkability.
                </td>
              </tr>
              <tr>
                <th scope="row">North Hills</th>
                <td>
                  Modern luxury, high-end retail, vibrant dining, and
                  contemporary custom estates.
                </td>
                <td>
                  Architectural masterpieces, luxury high-rises, and private
                  custom builds.
                </td>
              </tr>
              <tr>
                <th scope="row">Brier Creek</th>
                <td>
                  Gated country club living, championship golf, and executive
                  convenience.
                </td>
                <td>
                  Sprawling custom homes, luxury amenities, and immediate
                  access to RDU and RTP.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="seller-page-band" aria-labelledby="advantage-title">
        <div className="section-shell seller-page-section">
          <div className="seller-page-heading">
            <p className="context-line light">Buyer representation</p>
            <h2 id="advantage-title">The Warren Hall Buyer Advantage</h2>
          </div>
          <ul className="seller-advantage-list">
            <li>
              <strong>Native Market Intelligence:</strong> Lifetime familiarity
              with premier neighborhoods, private enclaves, and custom-build
              opportunities across Wake County.
            </li>
            <li>
              <strong>Off-Market &amp; Early Access:</strong> Direct connections
              across the top 1% of agents to surface high-end properties before
              they hit the MLS.
            </li>
            <li>
              <strong>Strategic Price Positioning:</strong> Data-driven offer
              strategies tailored to the unique valuation dynamics of the
              luxury tier.
            </li>
            <li>
              <strong>Seamless Advisory Service:</strong> Hands-on guidance
              through due diligence, high-end inspections, and complex
              negotiations.
            </li>
          </ul>
        </div>
      </section>

      <section
        className="section-shell seller-page-section"
        aria-labelledby="mindset-title"
      >
        <div className="seller-page-heading">
          <p className="context-line">Strategic Insights</p>
          <h2 id="mindset-title">The Market Mindset</h2>
        </div>
        <div className="seller-content">
          <p>
            Navigating the luxury tier brings unique questions about timing,
            custom construction, and contract structure. Explore Market Mindset
            for expert answers to the key decisions $750K+ buyers and sellers
            face in today&apos;s Triangle market.
          </p>
          <Link className="text-link" href="/market-mindset">
            Explore Market Mindset
          </Link>
        </div>
      </section>

      <section className="contact-section" aria-labelledby="buyer-contact-title">
        <div className="section-shell seller-page-valuation">
          <div>
            <p className="context-line light">Private next step</p>
            <h2 id="buyer-contact-title">Partner with a Proven Raleigh Leader</h2>
          </div>
          <div>
            <p>
              Whether relocating to the Research Triangle tech hub or securing
              a historic estate, work with an advisor who pairs local heritage
              with top-tier transaction leadership. Contact Warren Hall today
              to schedule a private, confidential luxury buyer consultation.
            </p>
            <Link className="button button-light" href="/#contact">
              Schedule a Private Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
