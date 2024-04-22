/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        DarkBlue: "hsl(240, 38%, 20%)",
        GrayishBlue: "hsl(240, 18%, 77%)",
      },
      backgroundImage: {
        Quotes: 'url("./src/assets/pattern-quotes.svg")',
        Curve: 'url("./src/assets/pattern-curve.svg")',
        Pattern: 'url("./src/assets/pattern-bg.svg")',
      },
      animation: {
        fadeIn: "fadeIn 1.2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },

  plugins: [],
};
