import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        soft: "#0A0A0A",
        line: "#2A2A2A",
        muted: "#A1A1A1",
        paper: "#F5F5F5",
        ember: "#C08A55"
      },
      fontFamily: {
        sans: [
          "Inter",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "PingFang SC",
          "Hiragino Sans GB",
          "Microsoft YaHei",
          "sans-serif"
        ]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(0, 0, 0, 0.55)"
      }
    }
  },
  plugins: []
};

export default config;
