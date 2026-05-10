"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  ACCENT_STORAGE_KEY,
  DEFAULT_ACCENT,
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  isAccent,
  isTheme,
  type Accent,
  type Theme,
} from "@/lib/theme";

type ThemeContextValue = {
  theme: Theme;
  accent: Accent;
  setTheme: (next: Theme) => void;
  setAccent: (next: Accent) => void;
  cycleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_CYCLE: Theme[] = ["dark", "light", "mono"];

export function ThemeProvider({ children }: { children: ReactNode }) {
  // The boot script in <head> already set the attributes before hydration.
  // Read them back so React state matches DOM.
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [accent, setAccentState] = useState<Accent>(DEFAULT_ACCENT);

  useEffect(() => {
    const root = document.documentElement;
    const t = root.getAttribute("data-theme");
    const a = root.getAttribute("data-accent");
    if (isTheme(t)) setThemeState(t);
    if (isAccent(a)) setAccentState(a);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* noop — private mode, etc. */
    }
  }, []);

  const setAccent = useCallback((next: Accent) => {
    setAccentState(next);
    document.documentElement.setAttribute("data-accent", next);
    try {
      localStorage.setItem(ACCENT_STORAGE_KEY, next);
    } catch {
      /* noop */
    }
  }, []);

  const cycleTheme = useCallback(() => {
    setThemeState((current) => {
      const idx = THEME_CYCLE.indexOf(current);
      const next = THEME_CYCLE[(idx + 1) % THEME_CYCLE.length];
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        /* noop */
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, accent, setTheme, setAccent, cycleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
