import { describe, expect, it } from "vitest";
import {
  getMarketMindsetEntry,
  marketMindsetEntries,
} from "../app/data/market-mindset";
import { buildArticleJsonLd } from "../app/market-mindset/[slug]/page";
import { generateStaticParams } from "../app/market-mindset/[slug]/page";
import robots from "../app/robots";
import sitemap from "../app/sitemap";

describe("Market Mindset content", () => {
  it("ships eight unique canonical question pages", () => {
    expect(marketMindsetEntries).toHaveLength(8);
    expect(new Set(marketMindsetEntries.map((entry) => entry.slug)).size).toBe(8);
  });

  it("covers every approved audience track", () => {
    expect(new Set(marketMindsetEntries.map((entry) => entry.audience))).toEqual(
      new Set(["seller", "buyer", "homeowner", "agent"]),
    );
  });

  it("keeps draft video pages out of VideoObject eligibility", () => {
    for (const entry of marketMindsetEntries) {
      expect(entry.video.status).toBe("coming-soon");
      expect(entry.video.contentUrl).toBeUndefined();
    }
  });

  it("resolves known slugs", () => {
    expect(
      getMarketMindsetEntry("private-valuation-vs-online-estimate")?.audience,
    ).toBe("seller");
  });

  it("builds visible-content Article schema without invented video schema", () => {
    const entry = getMarketMindsetEntry(
      "private-valuation-vs-online-estimate",
    )!;
    const jsonLd = buildArticleJsonLd(entry, "https://example.com");

    expect(jsonLd["@type"]).toBe("Article");
    expect(jsonLd.headline).toBe(entry.question);
    expect(jsonLd.author.name).toBe("Warren Hall");
    expect(JSON.stringify(jsonLd)).not.toContain("VideoObject");
  });

  it("generates one static route for every approved answer", () => {
    expect(generateStaticParams()).toEqual(
      marketMindsetEntries.map(({ slug }) => ({ slug })),
    );
  });

  it("publishes the complete canonical route inventory", () => {
    const records = sitemap();

    expect(records).toHaveLength(11);
    for (const entry of marketMindsetEntries) {
      expect(records).toContainEqual(
        expect.objectContaining({
          url: expect.stringContaining(`/market-mindset/${entry.slug}`),
          lastModified: entry.modifiedAt,
        }),
      );
    }
  });

  it("blocks all crawling during private review", () => {
    expect(robots().rules).toEqual({ userAgent: "*", disallow: "/" });
  });
});
