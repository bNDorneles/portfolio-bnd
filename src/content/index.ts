import { en } from "./en";
import { pt } from "./pt";
import type { Dictionary, Locale, Project } from "./types";

export const dictionaries: Record<Locale, Dictionary> = { pt, en };

export const defaultLocale: Locale = "pt";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function getProject(
  locale: Locale,
  slug: string,
): Project | undefined {
  return getDictionary(locale).projects.items.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return pt.projects.items.map((p) => p.slug);
}

export { en } from "./en";
export { pt } from "./pt";
export { type Dictionary, type Locale, type Project } from "./types";
