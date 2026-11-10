import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { businessPhone, canonicalBaseUrl, serviceAreas } from "./site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(canonicalBaseUrl),
  title: "Premium Shisha Delivery | 30–45 Min Hookah Service",
  description:
    `Luxury shisha delivery across ${serviceAreas.join(", ")} with premium Arabic and Russian tobacco, fast 30–45 minute delivery, and flexible packages for homes, villas, and events.`,
  keywords: [
    "premium shisha delivery",
    "home hookah rental",
    "24/7 shisha delivery",
    "premium hookah delivery",
    ...serviceAreas,
  ],
  alternates: {
    canonical: canonicalBaseUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Premium Shisha Delivery | 30–45 Min Hookah Service",
    description:
      `Luxury shisha delivery across ${serviceAreas.join(", ")} with premium Arabic and Russian tobacco and fast home or event service.`,
    url: canonicalBaseUrl,
    siteName: "Shisha Home Service",
    type: "website",
    images: [
      {
        url: `${canonicalBaseUrl}/images/og-shisha-home.jpg`,
        width: 1200,
        height: 630,
        alt: "Premium shisha delivery from Shisha Home Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Shisha Delivery | 30–45 Min Hookah Service",
    description:
      `Luxury shisha delivery across ${serviceAreas.join(", ")} with premium Arabic and Russian tobacco and fast home or event service.`,
    images: [`${canonicalBaseUrl}/images/og-shisha-home.jpg`],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Shisha Home Service",
  url: canonicalBaseUrl,
  telephone: businessPhone,
  image: `${canonicalBaseUrl}/images/og-shisha-home.jpg`,
  areaServed: serviceAreas,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
