import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:        "#1a1625",
        "ink-soft": "#4a4460",
        fog:        "#f5f3f0",
        "fog-mid":  "#ede9e4",
        cream:      "#faf8f5",
        sage:       "#7a9e8a",
        "sage-light":"#a8c5b5",
        blush:      "#d4908a",
        lavender:   "#9b8ec4",
        gold:       "#c9a96e",
        sky:        "#7ab3cc",
      },
      fontFamily: {
        lora:    ["Lora", "Georgia", "serif"],
        sans:    ["DM Sans", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      borderRadius: {
        xl2: "2rem",
        pill: "100px",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-left": {
          "0%":   { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "bubble-in": {
          "0%":   { opacity: "0", transform: "scale(.95) translateY(8px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        "fade-up":   "fade-up .9s ease forwards",
        "fade-left": "fade-left .9s ease forwards",
        "bubble-in": "bubble-in .4s ease",
      },
    },
  },
  plugins: [],
};
export default config;
