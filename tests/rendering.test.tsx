import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { metadata } from "../app/layout";
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
