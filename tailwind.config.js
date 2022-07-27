// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./src/App.js",
    "./src/pages/Home.js",
    "./src/pages/NotFound.js",
    "./src/components/Header.js",
    "./src/components/Footer.js",
    "./src/components/DoubleDropdownList.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Josefin Sans']
      }
    },
  },
  plugins: [],
}