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
        primary: "#999999",
        "darker-primary": "#616161",
        background: "#1E1E1E",
        "custom-light-grey": "#B3B3B3",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      backgroundColor: {
        primary: "#141414",
        "darker-primary": "#0A0A0A",
        "near-black": "#050505",
        secondary: "#181818",
        light: "#E9E9E9",
      },
    },
  },
  plugins: [],
} satisfies Config;
