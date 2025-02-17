/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': ['#'],
        'black': ['#'],
        'white': ['#'],
        'grey': ['#'],
        'button-1': ['#'],
        'button-2': ['#'],
        'button-hover': ['#'],
      },
      fontFamily: {
        '-light': ['-Light', 'sans-serif'],
        '-light-italic': ['-LightItalic', 'sans-serif'],
        '': ['-Regular', 'sans-serif'],
        '-italic': ['-Italic', 'sans-serif'],
        '-medium': ['-Medium', 'sans-serif'],
        '-medium-italic': ['-MediumItalic', 'sans-serif'],
        '-semibold': ['-Semibold', 'sans-serif'],
        '-semibold-italic': ['-Semibold', 'sans-serif'],
        '-bold': ['-Bold', 'sans-serif'],
        '-bold-italic': ['-BoldItalic', 'sans-serif'],
        '-variable': ['-Variable', 'sans-serif'],
        '-variable-italic': ['-VariableItalic', 'sans-serif'],
      }
    },
  },
  plugins: [],
}