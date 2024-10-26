/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    colors: {
      primary: "#C3937C",
      secondary: "#EAD9C9",
      whiteWedding: "#FBF8F1",
      greyWedding: "#787878",
    },
    fontFamily: {
      cormorant: ["Cormorant", "serif"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
