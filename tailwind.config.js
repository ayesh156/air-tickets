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
        primaryOrange: '#FB4F0F',
        primaryGreen: '#28A700',
        primaryLightBlue: '#2EA6FF',
      },
      boxShadow: {
        btnShadow: 'inset 0 2px 5px rgba(0, 0, 0, 0.2)', // Adjust values as needed
      },
      screens: {
        'md9': '991px', // Custom screen size at 991px
      },
    },
  },
  plugins: [],
}