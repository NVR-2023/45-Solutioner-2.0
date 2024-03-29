import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/frontend/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/frontend/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      interTight: ["var(--font-InterTight)"],
      aperçu: ["var(--font-Aperçu)"],
      basis: ["var(--font-Basis)"],
    },
  },
  plugins: [require("tailwindcss-opentype")],
  darkMode: "class",
};
export default config;
