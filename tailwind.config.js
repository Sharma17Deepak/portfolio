/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fontcolor: "#171d32",
        creamcolor:"#FFFDD0",
        buttoncolor:"#272838",
      },
    },
  },
  plugins: [],
}
