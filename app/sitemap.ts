import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { primaryNav } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return primaryNav.map((item) => ({
    url: `${siteConfig.url}${item.href}`,
    lastModified: new Date(),
  }));
}
