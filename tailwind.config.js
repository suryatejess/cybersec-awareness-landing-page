/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pressStart: ["Press Start 2P", "sans-serif"],
      },
    },
  },
  plugins: [],
};
