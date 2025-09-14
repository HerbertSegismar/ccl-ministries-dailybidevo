// components/ui/client-meteors.tsx
"use client";
import { useEffect, useState } from "react";
import { Meteors } from "./meteors";

export function ClientOnlyMeteors({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return <Meteors number={number} className={className} />;
}
