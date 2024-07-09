/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        agustina: ['"Agustina Regular"', "sans-serif"],
      },
      animation: {
        wave: "wave 1s infinite",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
      transformOrigin: {
        custom: "70% 70%",
      },
    },
  },
  plugins: [],
};
