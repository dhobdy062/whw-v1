import type { MetadataRoute } from "next";
import { marketMindsetEntries } from "./data/market-mindset";
import { siteOrigin } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestModifiedAt = marketMindsetEntries.reduce(
    (latest, entry) =>
      entry.modifiedAt > latest ? entry.modifiedAt : latest,
    marketMindsetEntries[0].modifiedAt,
  );

  return [
    { url: siteOrigin, lastModified: latestModifiedAt },
    { url: `${siteOrigin}/about`, lastModified: latestModifiedAt },
    { url: `${siteOrigin}/market-mindset`, lastModified: latestModifiedAt },
    ...marketMindsetEntries.map((entry) => ({
      url: `${siteOrigin}/market-mindset/${entry.slug}`,
      lastModified: entry.modifiedAt,
    })),
  ];
}
