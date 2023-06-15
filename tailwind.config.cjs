/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    mlg: "1130px",
    xl: "1440px",
    "2xl": "1660px",
  },
  colors: {
    black: "#000",
    white: "#fff",
    maroon: "#6A0F49",
    lightGrey: "#9FA2B4",
  },
  fontFamily: {
    sans: ["Montserrat", "sans-serif !important"],
  },
    extend: {},
  },
  plugins: [],
}

