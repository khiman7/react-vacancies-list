/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'proxima': ['Proxima Nova', 'Montserrat'],
        'roboto': ['Roboto'],
      },
      colors: {
        'light-blue': '#e6e9f2',
        'navy': '#3a4562',
      },
      listStyleType: {
        square: 'square',
      }
    },
  },
  plugins: [],
}