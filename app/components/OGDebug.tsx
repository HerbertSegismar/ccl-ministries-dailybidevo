// components/OGDebug.tsx
"use client";

import { useEffect } from "react";

export default function OGDebug() {
  useEffect(() => {
    // Log OG tags for debugging
    const metaTags = document.querySelectorAll(
      'meta[property^="og:"], meta[name^="twitter:"]'
    );
    console.group("OG & Twitter Tags Debug");
    metaTags.forEach((tag) => {
      const property = tag.getAttribute("property") || tag.getAttribute("name");
      const content = tag.getAttribute("content");
      console.log(`${property}: ${content}`);
    });
    console.groupEnd();
  }, []);

  return null;
}
