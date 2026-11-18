import type { MetadataRoute } from "next";
import { clinic } from "@/lib/site";
import { treatments } from "@/lib/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/treatments", "/about", "/consultation", "/contact"].map((path) => ({
    url: `${clinic.website}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const treatmentPages = treatments.map((treatment) => ({
    url: `${clinic.website}/treatments/${treatment.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...treatmentPages];
}
