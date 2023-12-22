/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        "roboto": ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant("native", "&::part(native)")
      addVariant("scroll", "&::part(scroll)")
      addVariant("image", "&::part(image)")
      addVariant("background", "&::part(background)")
      addVariant("content", "&::part(content)")
      addVariant("content", "&::part(detail-icon)")
    })
  ],
}