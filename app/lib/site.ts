const fallbackOrigin = "https://warren-hall-real-estate.example";

export const siteOrigin = (
  process.env.NEXT_PUBLIC_SITE_URL ?? fallbackOrigin
).replace(/\/$/, "");
