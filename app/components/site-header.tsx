import Link from "next/link";

const navigation = [
  { label: "Sell", href: "/#sell" },
  { label: "Buy & Relocate", href: "/#buy" },
  { label: "Market Mindset", href: "/market-mindset" },
  { label: "About Warren", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Warren Hall home">
          <span>Warren Hall</span>
          <small>Compass · Raleigh, North Carolina</small>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="button button-primary header-action" href="/#contact">
          Private Valuation
        </Link>

        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="button button-primary" href="/#contact">
              Private Valuation
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
