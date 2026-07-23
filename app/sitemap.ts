import type { MetadataRoute } from "next";
import { siteConfig, primaryNav } from "@/lib/site";
import { posts } from "@/lib/yazilar";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = primaryNav.map((item) => ({
    url: `${siteConfig.url}${item.href}`,
    lastModified: new Date(),
  }));

  const postPages = posts.map((post) => ({
    url: `${siteConfig.url}/yazilar/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticPages, ...postPages];
}
