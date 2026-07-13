import { renderToStaticMarkup } from "react-dom/server";
import { expect, it } from "vitest";
import HomePage from "../app/page";

it("serves the portrait directly without the runtime image optimizer", () => {
  const html = renderToStaticMarkup(<HomePage />);

  expect(html).toContain('src="/warren-hall-top-100.png"');
  expect(html).not.toContain("/_next/image");
});
