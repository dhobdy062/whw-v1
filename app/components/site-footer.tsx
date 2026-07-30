import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link className="footer-name" href="/">
            Warren Hall
          </Link>
          <p>Compass REALTOR® / Senior Broker</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/market-mindset">Market Mindset</Link>
          <Link href="/about">About Warren</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className="footer-disclosures">
          <p>Equal Housing Opportunity</p>
          <p>Private review — inquiries are not submitted.</p>
          <p>
            Exact brokerage disclosure, license details, and privacy destination
            remain pending approval before public launch.
          </p>
        </div>
      </div>
    </footer>
  );
}
