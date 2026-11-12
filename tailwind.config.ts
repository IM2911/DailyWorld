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
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        "brand-dark": "#1d4ed8",
        "brand-light": "#dbeafe",
        "brand-muted": "#eff6ff",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-subtle": "var(--text-subtle)",
        muted: "var(--text-muted)",
        surface: "var(--surface)",
        "surface-raised": "var(--surface-raised)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "Inter", "system-ui", "sans-serif"],
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
