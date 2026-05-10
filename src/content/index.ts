import { enContent } from "./en";
import { ptContent } from "./pt";
import type { Locale } from "@/i18n/routing";
import type { SiteContent } from "./types";

const map: Record<Locale, SiteContent> = {
  pt: ptContent,
  en: enContent,
};

export function getContent(locale: Locale): SiteContent {
  return map[locale];
}

export type { SiteContent };
