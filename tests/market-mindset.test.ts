import { describe, expect, it } from "vitest";
import {
  getMarketMindsetEntry,
  marketMindsetEntries,
} from "../app/data/market-mindset";

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
});
