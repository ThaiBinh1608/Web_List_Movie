/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "Sans-serif"],
      },

      colors: {
        primary: "#6529F3",
      },
    },
  },
  plugins: [],
};
