import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const baseUrl = "https://caio.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["pt", "en"];

  const staticPages = [
    "",
    "/sobre",
    "/projetos",
    "/curriculo",
    "/contato",
    "/timeline",
    "/engineering",
  ];

  const staticEntries = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.8,
    }))
  );

  const projectEntries = projects.flatMap((project) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/projetos/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...staticEntries, ...projectEntries];
}
