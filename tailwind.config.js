/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "12rem", //6rem
        },
      },
      fontFamily: {
        sans: ["Mochiy Pop One", "sans-serif"],
      },
      fontSize: {
        xs: "0.663rem",
        sm: "0.720rem",
        base: "0.803rem",
        lg: "0.938rem",
        xl: "1.063rem",
        "2xl": "1.313rem",
        "3xl": "1.688rem",
        "4xl": "2.063rem",
        "5xl": "2.8rem",
        "6xl": "3.5rem",
        "7xl": "4.5rem",
      },
      colors: {
        green: {
          400: "#4ade80",
          500: "#00d49f",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
