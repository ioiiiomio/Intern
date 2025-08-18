/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bank_green: "var(--bank_green)",
        bank_orange: "var(--bank_orange)",
        bank_red: "var(--bank_red)",
        background_prime: "var(--background_prime)",
        background_secondary: "var(--background_secondary)",
        border_color: "var(--border_color)",
        text_color: "var(--text_color)",
        text_color_secondary: "var(--text_color_secondary)",
        blue_accent: "var(--blue_accent)",
        bank_yellow: "var(--bank_yellow)",
      },
    },
  },
  plugins: [],
};
