import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        construction: {
          yellow: "#FACC15",
          dark: "#050505",
          graphite: "#171717",
          panel: "#222222",
          light: "#F2F2F2",
          soft: "#FAFAFA",
          border: "#D9D9D9",
        },
      },
    },
  },
  plugins: [],
};
export default config;
