import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mat-qengineering.co.za",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}