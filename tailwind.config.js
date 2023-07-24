/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sujan: {
          100: "#124334",
        },

        customGradient:
          "linear-gradient(130deg, #FF56F6 18.31%, #B936EE 43.26%, #3BACE2 85.44%, #406AFF 100%)",

        backk: "rgba(2, 2, 27, 0.70);",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.40) 0.55%, rgba(255, 255, 255, 0.04) 100%)",
      },
      boxShadow: {
        custom: "0px 4px 97px 0px rgba(255, 86, 246, 0.51)",
      },
    },
  },
  plugins: [],
};
