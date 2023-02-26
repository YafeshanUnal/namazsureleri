/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        laptop: { max: "1210px" },
        tablet: { max: "1023px" },
        mobile: { max: "550px" },
        mini: { max: "300px" },
      },
    },
  },
  plugins: [],
}
