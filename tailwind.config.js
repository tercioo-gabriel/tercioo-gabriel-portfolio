/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace', 'sans-serif'],
      },
      screens:{
        'cell': '480px'
      },
      colors:{
        'cyan-1000' : '#011627',
        'cyan-1100' : '#011424',
        'cyan-1200' : '#010f1b',
      },
      dropShadow: {
        'white': '0px 2px 15px rgba(255, 255, 255, 0.5)',
      }
    },
  },
  plugins: [],
}