import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        brand: {
          50: "#f0f5ff",
          100: "#deeaff",
          200: "#bdd5ff",
          300: "#90b6ff",
          400: "#5e90fd",
          500: "#2d66f3",
          600: "#1f2de6",
          700: "#1824b8",
          800: "#141e91",
          900: "#121b72",
          950: "#0b1046",
        },
        "brand-dark": "#1824b8",
        "brand-light": "#deeaff",
        "brand-muted": "#f0f5ff",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-subtle": "var(--text-subtle)",
        muted: "var(--text-muted)",
        surface: "var(--surface)",
        "surface-raised": "var(--surface-raised)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(16, 24, 40, 0.06)",
        card: "0 2px 8px rgba(16, 24, 40, 0.04), 0 16px 40px rgba(16, 24, 40, 0.06)",
        float: "0 20px 60px rgba(16, 24, 40, 0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      letterSpacing: {
        tighter: "-0.045em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
