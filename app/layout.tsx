import type { Metadata } from "next";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { siteOrigin } from "./lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: "Warren Hall | Raleigh & Triangle Real Estate Advisor",
  description:
    "Warren Hall is a Compass REALTOR® and Senior Broker serving Raleigh and the Triangle with clear strategy for selling, moving up, and buying high-value homes.",
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: "Warren Hall Real Estate",
    title: "Warren Hall | Raleigh & Triangle Real Estate Advisor",
    description:
      "Clear strategy for selling, moving up, and buying high-value homes in Raleigh and across the Triangle.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Warren Hall — Clear strategy for Raleigh real estate.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Warren Hall | Raleigh & Triangle Real Estate Advisor",
    description:
      "Clear strategy for selling, moving up, and buying high-value homes in Raleigh and across the Triangle.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
