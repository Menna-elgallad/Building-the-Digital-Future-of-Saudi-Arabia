/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        cream: '#f5f2ed',
        'cream-dark': '#edeae4',
        'cream-border': '#e0ddd7',
        ink: '#1a1a1a',
      },
    },
  },
  plugins: [],
}
