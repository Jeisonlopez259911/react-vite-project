/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated'),
    require("tw-elements/dist/plugin.cjs")
  ],
  darkMode: "class",
}

