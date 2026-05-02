import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        construction: {
          yellow: "#FACC15",
          dark: "#0F172A",
          graphite: "#111827",
          soft: "#F8FAFC",
          border: "#E5E7EB",
        },
      },
    },
  },
  plugins: [],
};
export default config;
