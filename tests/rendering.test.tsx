import { describe, expect, it } from "vitest";
import { metadata } from "../app/layout";

describe("site identity", () => {
  it("uses the finished Warren Hall metadata", () => {
    expect(metadata.title).toContain("Warren Hall");
    expect(metadata.description).toContain("Raleigh");
    expect(metadata.description).toContain("Triangle");
  });
});
