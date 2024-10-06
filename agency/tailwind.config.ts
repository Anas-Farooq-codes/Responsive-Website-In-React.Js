import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        1: "var(--color-bg-1)",
        2: "var(--color-bg-2)",
        3: "var(--color-bg-3)",
        4: "var(--color-bg-4)",
        "color-1":"var(--color-border-1)",
        "color-2":"var(--color-border-2)",
      },
    },
  },
  plugins: [],
};
export default config;