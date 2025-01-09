/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c1': ['#2a2a2a'], 
        'c2': ['#3a3a3a'],
        'c3': ['#606060'],
        'c4': ['#FaFaFa']
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        'dm-mono': ['DM Mono', 'monospace'],
        'questrial': ['Questrial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}