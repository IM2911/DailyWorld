import { MetadataRoute } from "next";
import { guides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dailyworld.app";

  const staticPages = [
    "",
    "/calculators",
    "/calculators/electricity-cost",
    "/calculators/appliance-energy",
    "/calculators/kwh-to-cost",
    "/calculators/monthly-bill",
    "/calculators/air-conditioner",
    "/calculators/heating-cost",
    "/calculators/washing-machine",
    "/calculators/refrigerator",
    "/calculators/dishwasher",
    "/calculators/electric-oven",
    "/calculators/television",
    "/calculators/gaming-pc",
    "/calculators/water-heater",
    "/calculators/energy-savings",
    "/calculators/price-comparison",
    "/guides",
    "/energy-saving",
    "/about",
    "/contact",
    "/privacy-policy",
    "/cookie-policy",
    "/terms-of-use",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const guidePages = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...guidePages];
}