import type { MetadataRoute } from "next";
import { siteOrigin } from "./lib/site";

export default function robots(): MetadataRoute.Robots {
  // Public indexing requires a separate approval event and must not be enabled
  // as part of the private review deployment.
  return {
    rules: { userAgent: "*", disallow: "/" },
    sitemap: `${siteOrigin}/sitemap.xml`,
  };
}
