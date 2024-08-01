/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/assets/js/*.js", "./public/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.7s ease-in-out",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
