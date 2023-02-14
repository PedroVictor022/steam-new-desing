/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'steam-bg': "#1B2838",
        'steam-home': "#0E131E"
      }
    },
  },
  plugins: [],
}