/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(112.45deg, #8481FF 0%, #2EF1FD 48.5%, #0430A1 100%)',
      },
      colors: {
        'button-hover': '#75CCEB', // Define the base color for button hover
      },
      fontFamily: {
        sans: ['YourChosenFont', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

