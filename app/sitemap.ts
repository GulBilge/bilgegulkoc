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

  const claudeSeriesPages = [
    "/21gunClaude",
    "/21gunClaude/gonderiler",
    "/21gunClaude/promptlar",
    "/21gunClaude/hikayeler",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const coworkSeriesPages = [
    "/cowork",
    "/cowork/gonderiler",
    "/cowork/promptlar",
    "/cowork/karusel-promptu",
    "/cowork/newsletter-intelligence",
    "/cowork/instagram-analiz-panosu",
    "/cowork/pazarlama-eklentisi",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const standalonePages = [
    {
      url: `${siteConfig.url}/rehber`,
      lastModified: new Date(),
    },
  ];

  return [
    ...staticPages,
    ...postPages,
    ...claudeSeriesPages,
    ...coworkSeriesPages,
    ...standalonePages,
  ];
}
