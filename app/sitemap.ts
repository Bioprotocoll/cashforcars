import type { MetadataRoute } from "next";
import { cities, site } from "@/lib/config";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = ["", "/how-it-works", "/faq", "/about", "/blog"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const cityRoutes = cities.map((c) => ({
    url: `${site.url}/sell/${c.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...cityRoutes, ...blogRoutes];
}
