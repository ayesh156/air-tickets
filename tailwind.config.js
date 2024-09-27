/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        titleGray :"#646D73",
        primaryBlue : "#045894",
        btnOrange: "#FB4F0F"
      },
      boxShadow: {
        btnShadow: 'inset 0 2px 5px rgba(0, 0, 0, 0.2)', // Adjust values as needed
      },
    },
  },
  plugins: [],
}