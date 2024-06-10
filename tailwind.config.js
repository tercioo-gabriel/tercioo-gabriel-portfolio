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
        'xs': '380px'
      },
      colors:{
        'cyan-1000' : '#011627',
        'cyan-1100' : '#011424',
        'cyan-1200' : '#010f1b',
        'string': '#dd8461',
      },
      dropShadow: {
        'white': '0px 2px 15px rgba(255, 255, 255, 0.5)',
        'indigo': '0px 0px 20px rgba(155, 135, 255, 0.9)',
      },
      animation: {
        'pulse-slow': 'pulse-slow 1.8s ease-in-out infinite',
      },
      keyframes: {
        'pulse-slow': {
          '20%, 80%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
        },
      }
    },
  },
  plugins: [],
}