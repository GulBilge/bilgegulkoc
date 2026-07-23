import type { Metadata } from "next";
import { siteConfig } from "./site";

export function pageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: "tr_TR",
      type: "website",
    },
  };
}
