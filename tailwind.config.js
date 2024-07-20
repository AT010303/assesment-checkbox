/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
    },
    colors: {
      'yellow-button': '#FFD84D',
      'yellow-button-hover': '#FFCE22',
    },
    },
  },
  plugins: [],
}

