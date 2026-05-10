import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-soft": "var(--bg-soft)",
        "bg-raised": "var(--bg-raised)",
        fg: "var(--fg)",
        "fg-strong": "var(--fg-strong)",
        muted: "var(--muted)",
        "muted-2": "var(--muted-2)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        status: "var(--status)",
      },
      fontFamily: {
        serif: "var(--serif)",
        sans: "var(--sans)",
        mono: "var(--mono)",
      },
      maxWidth: {
        page: "1100px",
      },
    },
  },
  plugins: [],
};

export default config;
