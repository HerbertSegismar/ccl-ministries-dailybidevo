"use client";

import { usePathname } from "next/navigation";
import CreditsAndContact from "./CreditsAndContact";

export default function ConditionalCreditsAndContact() {
  const pathname = usePathname();
  if (pathname === "/bible-app-privacy-policy") {
    return null;
  }
  return <CreditsAndContact />;
}
