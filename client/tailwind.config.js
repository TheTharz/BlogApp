/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      default: ['Roboto Mono', 'monospace'],
    },
    extend: {
      colors: {
        yellow: '#E2B714',
        lightgray: '#646669',
        darkgray: '#2C2E31',
        darkbackground: '#323437',
        border: '#282828',
        text: '#d1d0c5',
        error: '#ca4754',
      },
    },
  },
  plugins: [],
};
