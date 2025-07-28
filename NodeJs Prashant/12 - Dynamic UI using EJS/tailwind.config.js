/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",   // if you're using EJS
    "./views/**/*.html",  // or HTML
    "./public/**/*.js",   // if any JS files are using Tailwind
    "./app.js"            // optional, if Tailwind classes are here
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
