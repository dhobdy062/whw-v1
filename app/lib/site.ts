const fallbackOrigin =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://warren-hall-real-estate.example";

export const siteOrigin = (
  process.env.NEXT_PUBLIC_SITE_URL ?? fallbackOrigin
).replace(/\/$/, "");
