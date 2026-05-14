import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-surface": "#e0e2ed",
        "primary-container": "#4b8eff",
        "on-primary": "#002e69",
        surface: "#10131b",
        "primary-fixed-dim": "#adc6ff",
        "secondary-fixed-dim": "#00dbe7",
        "secondary-container": "#00f1fe",
        "on-surface-variant": "#c1c6d7",
        "surface-container-highest": "#31353d",
        "surface-container-low": "#181c23",
        "surface-container-lowest": "#0b0e16",
        "surface-bright": "#363942",
        "outline-variant": "#414755",
        tertiary: "#ffb595",
        "secondary-fixed": "#74f5ff",
        outline: "#8b90a0",
        primary: "#adc6ff",
        "surface-container": "#1c2028",
        background: "#10131b",
        "surface-container-high": "#272a32",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        "2xl": "1rem",
        full: "0.75rem",
      },
      spacing: {
        unit: "8px",
        "margin-mobile": "20px",
        "container-max": "1280px",
        "margin-desktop": "64px",
        gutter: "24px",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        "display-lg": [
          "clamp(40px, 7vw, 72px)",
          { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "headline-lg": [
          "32px",
          { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "label-xs": [
          "11px",
          { lineHeight: "16px", fontWeight: "600", letterSpacing: "0.15em" },
        ],
        "technical-sm": [
          "13px",
          { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "500" },
        ],
        "body-md": ["16px", { lineHeight: "26px", fontWeight: "400" }],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "border-flow": "borderFlow 3s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        borderFlow: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
      backdropBlur: {
        xl: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
