import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BibleVersionProvider } from "./contexts/BibleVersionContext";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Daily Bible Devotional",
  description: "Get your daily dose of the Word of God with this Bible Devotional App free of charge from City Cross Link Ministries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ThemeProvider>
          <BibleVersionProvider>
            <ClerkProvider>
              <Navbar />
              {children}
              <Footer/>
            </ClerkProvider>
          </BibleVersionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
