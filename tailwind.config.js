/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "primary":"#040c18",
      "secondary":"#042c54",
      "cta":"#ff4820",
      "primaryBlur":"#072d56",
      "secondaryBlur":"#0f4279",
      "white":"#fff",
      "black":"#000",
      "red":"#ff8a71",
      "descriptions":"#81afdd",
      "footer-bg":"#031b34",
      "input-bg":"#052d56"
    },
    extend: {},
  },
  plugins: [],
}

