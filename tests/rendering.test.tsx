import { describe, expect, it } from "vitest";
import { metadata } from "../app/layout";

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
