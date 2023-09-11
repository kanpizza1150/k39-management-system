module.exports = {
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
    },
  },
  content: [
    "./*.html",
    "./src/**/*.css",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],

  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
}
