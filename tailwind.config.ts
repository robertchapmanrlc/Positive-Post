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
        text: "#e3fcdf",
        background: "#020b01",
        primary: "#90f587",
        hover: "#27cd1a",
        active: "#17860f",
        secondary: "#46584c",
        accent: "#32efde",
      },
    },
  },
  plugins: [],
};
export default config;
