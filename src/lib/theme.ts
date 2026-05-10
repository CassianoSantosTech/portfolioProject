export const THEMES = ["dark", "light", "mono"] as const;
export type Theme = (typeof THEMES)[number];

export const ACCENTS = ["amber", "sage", "slate", "terra"] as const;
export type Accent = (typeof ACCENTS)[number];

export const DEFAULT_THEME: Theme = "dark";
export const DEFAULT_ACCENT: Accent = "amber";

export const THEME_STORAGE_KEY = "theme";
export const ACCENT_STORAGE_KEY = "accent";

export function isTheme(value: unknown): value is Theme {
  return typeof value === "string" && (THEMES as readonly string[]).includes(value);
}

export function isAccent(value: unknown): value is Accent {
  return typeof value === "string" && (ACCENTS as readonly string[]).includes(value);
}

/**
 * Inline boot script — written into <head> as a literal string so it runs
 * before React hydration, preventing a flash of wrong theme on reload.
 */
export const THEME_BOOT_SCRIPT = `
(function () {
  try {
    var t = localStorage.getItem("${THEME_STORAGE_KEY}");
    var a = localStorage.getItem("${ACCENT_STORAGE_KEY}");
    var validThemes = ${JSON.stringify(THEMES)};
    var validAccents = ${JSON.stringify(ACCENTS)};
    var theme = validThemes.indexOf(t) >= 0 ? t : "${DEFAULT_THEME}";
    var accent = validAccents.indexOf(a) >= 0 ? a : "${DEFAULT_ACCENT}";
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-accent", accent);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "${DEFAULT_THEME}");
    document.documentElement.setAttribute("data-accent", "${DEFAULT_ACCENT}");
  }
})();
`.trim();
