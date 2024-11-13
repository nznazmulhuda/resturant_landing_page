/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rale: "Raleway",
        roboto: "Roboto",
        poppins: "poppins",
      },
      colors: {
        Yellow: "#FEBF00",
        Text_Primary: "#0A1425",
      },
    },
  },
  plugins: [],
};
