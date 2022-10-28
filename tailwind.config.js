/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: { primary: "#16091B" },
      colors: {
        yellow: "#FFCE4E",
        lightPink: "#96839B",
        customRed: "#D53D5C",
        iconHover: "#F7D7FF",
        customGray: "#4F464E",
        primary: "#16091B",
      },
    },
  },
  plugins: [],
};
