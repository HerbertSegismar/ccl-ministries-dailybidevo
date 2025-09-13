import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BibleVersionProvider } from "./contexts/BibleVersionContext";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "./components/Footer";

// Define your site's base URL (important for canonical URLs and OG tags)
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.fountofhope.org";

export const metadata: Metadata = {
  title: "Daily Bible Devotional - Spiritual Growth Through Scripture",
  description:
    "Get your daily dose of the Word of God with this Bible Devotional App free of charge from Fount Of Hope Devotionals. Start each day with inspirational Bible verses and Christian devotionals.",
  keywords:
    "daily bible devotional, bible verses, christian devotionals, spiritual growth, word of God, Bible app, free devotionals",
  authors: [{ name: "Fount Of Hope Devotionals" }],
  creator: "Fount Of Hope Devotionals",
  publisher: "Fount Of Hope Devotionals",
  metadataBase: new URL(baseUrl),
  icons: {
    icon: "/icon.svg",
  },

  // Open Graph for social media sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Daily Bible Devotional",
    title: "Daily Bible Devotional - Spiritual Growth Through Scripture",
    description:
      "Get your daily dose of the Word of God with free devotionals from Fount Of Hope.",
    images: [
      {
        url: "/og-image.png", // You should create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: "Daily Bible Devotional",
      },
    ],
  },

  // Robots indexing instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Additional metadata
  verification: {
    google: "gAaD2oPgemntA9aBOM0YF8mNCyf_gG5CgloF5JaEhTI", // For Google Search Console
  },
  alternates: {
    canonical: baseUrl,
    types: {
      "application/rss+xml": `${baseUrl}/rss.xml`, // Consider adding an RSS feed
    },
  },
  category: "religion",
};

// JSON-LD structured data for better search engine understanding
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Daily Bible Devotional",
  description:
    "Get your daily dose of the Word of God with this Bible Devotional App free of charge from Fount Of Hope Devotionals.",
  applicationCategory: "Religious Application",
  operatingSystem: "Web Browser",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "Fount Of Hope Devotionals",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/icon.svg" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`antialiased`}>
        <ThemeProvider>
          <BibleVersionProvider>
            <ClerkProvider>
              <a href="#main-content" className="skip-link">
                Skip to main content
              </a>
              <Navbar />
              <main id="main-content">{children}</main>
              <Footer />
            </ClerkProvider>
          </BibleVersionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
