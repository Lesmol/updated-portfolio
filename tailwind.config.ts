import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a0a0a0",
        "darker-primary": "#616161",
        background: "#1E1E1E",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      backgroundColor: {
        primary: "#1E1E1E",
        "text-darker-primary": "#2D2D2D",
        secondary: "#181818",
        light: "#E9E9E9",
      },
    },
  },
  plugins: [],
} satisfies Config;
