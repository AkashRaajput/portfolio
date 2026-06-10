import type { MetadataRoute } from "next";

import { routes } from "@/config/navigation";
import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routeEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.url}${route.href}`,
    lastModified: new Date(),
    changeFrequency: route.href === "/" ? "monthly" : "yearly",
    priority: route.href === "/" ? 1 : 0.7,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...routeEntries, ...projectEntries];
}
