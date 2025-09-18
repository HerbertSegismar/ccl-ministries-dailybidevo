// app/rss.xml/route.ts
import { devotionals } from "@/app/data/devotionals-sep";

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.fountofhope.org";

  // Create RSS feed content
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Daily Bible Devotional - Fount Of Hope</title>
      <description>Get your daily dose of the Word of God with this Bible Devotional App free of charge from Fount Of Hope Devotionals.</description>
      <link>${baseUrl}</link>
      <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
      <language>en-us</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      ${devotionals
        .map((devotional) => {
          // Use the date directly from the devotional data
          // The date is already in a format like "Thu Sep 01 2025"
          const dateObj = new Date(devotional.date);

          return `
        <item>
          <title><![CDATA[${devotional.title}]]></title>
          <description><![CDATA[${
            devotional.content.split("\n\n")[0]
          }]]></description>
          <link>${baseUrl}?date=${devotional.id}</link>
          <guid>${baseUrl}?date=${devotional.id}</guid>
          <pubDate>${dateObj.toUTCString()}</pubDate>
        </item>
        `;
        })
        .join("")}
    </channel>
  </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
