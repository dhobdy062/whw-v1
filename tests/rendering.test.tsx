import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { metadata } from "../app/layout";
import AboutPage from "../app/about/page";
import MarketMindsetPage from "../app/market-mindset/page";
import HomePage from "../app/page";

describe("site identity", () => {
  it("uses the finished Warren Hall metadata", () => {
    expect(metadata.title).toContain("Warren Hall");
    expect(metadata.description).toContain("Raleigh");
    expect(metadata.description).toContain("Triangle");
  });

  it("keeps the private review out of search indexes", () => {
    expect(metadata.robots).toEqual({ index: false, follow: false });
  });

  it("does not publish the starter favicon identity", () => {
    expect(metadata.icons).toBeUndefined();
  });

  it("uses the finished social preview without changing review indexing", () => {
    expect(metadata.metadataBase).toBeInstanceOf(URL);
    expect(metadata.openGraph).toMatchObject({
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
        },
      ],
    });
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      images: ["/og.png"],
    });
  });
});

it("renders the approved seller authority message", () => {
  const html = renderToStaticMarkup(<HomePage />);

  expect(html).toMatch(/<h1[^>]*>[\s\S]*(Raleigh|Triangle)[\s\S]*<\/h1>/i);
  expect(html).toContain("More than $120M");
  expect(html).toContain("2026 Top 100 Triangle Real Producers");
  expect(html).toMatch(
    /<a[^>]*href="#contact"[^>]*>\s*Request a Private Valuation\s*<\/a>/i,
  );
  expect(html).toMatch(/<h2[^>]*>Market Mindset<\/h2>/i);
});

it("renders the verified Warren Hall author profile", () => {
  const html = renderToStaticMarkup(<AboutPage />);

  expect(html).toMatch(/<h1[^>]*>[\s\S]*Warren Hall[\s\S]*<\/h1>/i);
  expect(html).toContain("Compass");
  expect(html).toContain("Senior Broker");
  expect(html).toContain("Six consecutive years");
});

it("renders crawlable links for every Market Mindset answer", () => {
  const html = renderToStaticMarkup(<MarketMindsetPage />);
  const answerLinks = html.match(
    /<a[^>]*href="\/market-mindset\/[^\"]+"[^>]*>Read Warren&#x27;s answer<\/a>/g,
  );

  expect(answerLinks).toHaveLength(8);
  expect(html.match(/<section[^>]*id="topic-/g)).toHaveLength(7);
});
