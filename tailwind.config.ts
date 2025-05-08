import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        playwrite: ['"Oleo Script Swash Caps"', "cursive"],
        oldStandard: ['"Old Standard TT"', "static"],
      },
    },
  },

  plugins: [animatePlugin],
} satisfies Config;
