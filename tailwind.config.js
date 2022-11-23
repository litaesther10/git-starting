/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "620px",
      lg: "976px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {},
  },
  plugins: [],
};
