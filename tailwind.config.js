/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#240699",
        "primary-hover": "#1e067f",
      },
    },
  },
  plugins: [],
};
