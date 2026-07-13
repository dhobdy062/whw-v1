import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Warren Hall | Raleigh & Triangle Real Estate Advisor",
  description:
    "Warren Hall is a Compass REALTOR® and Senior Broker serving Raleigh and the Triangle with clear strategy for selling, moving up, and buying high-value homes.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
