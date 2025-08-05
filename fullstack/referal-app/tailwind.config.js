//host-app/tailwind.config.js: 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background_prime: "#F5F5F5",
        background_secondary: "#FFFFFF",
        text_color: '#353B41',
        text_color_secondary: '#8C9197',
        bank_green: '#4CA436',
        bank_green_light: '#EBFCE7',
        bank_orange: '#EA9632',
        bank_red: '#CD3737',
        border_color: '#E2E2E2',
        bank_blue: '#0077C8'
        

      },
    },
  },
  plugins: [],
}