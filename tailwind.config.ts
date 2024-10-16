import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#fff",
        gray: "#111",
        whitesmoke: "#f0f0f0",
      },
      "spacing": {},
      "fontFamily": {
        "inter": "Inter",
        "poppins": "Poppins",
      }
    },
    "fontSize": {
      "lg": "18px",
      "xs": "12px",
      "inherit": "inherit"
    },
    screens: {
      "2xs": "375px",
      "xs": "420px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
export default config;
