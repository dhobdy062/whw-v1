import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import BuyerPage, { metadata } from "../app/buy/page";

describe("BuyerPage", () => {
  it("uses the supplied luxury buyer metadata and canonical URL", () => {
    expect(metadata).toMatchObject({
      title: "Raleigh Luxury Homes $750K+ | Warren Hall Realtor",
      description:
        "Explore premier $750K+ luxury homes in Hayes Barton, North Hills & Brier Creek. Partner with Top 100 Raleigh Realtor Warren Hall for expert Triangle market access.",
      alternates: { canonical: expect.stringMatching(/\/buy$/) },
    });
  });

  it("renders the supplied buyer guidance and the internal Market Mindset link", () => {
    const html = renderToStaticMarkup(<BuyerPage />);

    expect(html).toContain("Finding an exceptional home in the Raleigh-Durham region");
    expect(html).toMatch(/<h2[^>]*>Featured Triangle Luxury Enclaves<\/h2>/);
    expect(html).toContain("Hayes Barton");
    expect(html).toContain("North Hills");
    expect(html).toContain("Brier Creek");
    expect(html).toMatch(/<h2[^>]*>The Warren Hall Buyer Advantage<\/h2>/);
    expect(html).toMatch(/<table[\s\S]*<\/table>/);
    expect(html).toMatch(/<a[^>]*href="\/market-mindset"[^>]*>\s*Explore Market Mindset\s*<\/a>/i);
  });
});
