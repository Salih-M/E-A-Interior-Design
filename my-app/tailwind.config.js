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
        keyframes: {
          slideIn: {
            '0%': { transform: 'translateX(100%)', opacity: 0 },
            '100%': { transform: 'translateX(0)', opacity: 1 },
          },
        },
        animation: {
          slideIn: 'slideIn 2s ease-out forwards',
        },
      },
    },
    plugins: [],
  }