/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          custom: ['Titillium Web', 'sans-serif'],
        },
        colors:{
          customGray:'#f5f5f5'
        },
      },
    },
    plugins: [],
  }