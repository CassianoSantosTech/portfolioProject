import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const BASE = "https://cassianosantos-dev.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: `${BASE}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === routing.defaultLocale ? 1 : 0.8,
    alternates: {
      languages: {
        "pt-BR": `${BASE}/pt`,
        "en-US": `${BASE}/en`,
      },
    },
  }));
}
