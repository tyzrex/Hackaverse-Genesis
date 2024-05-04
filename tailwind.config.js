/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Orbitron", "sans-serif"],
        secondary: ["Monsterrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
