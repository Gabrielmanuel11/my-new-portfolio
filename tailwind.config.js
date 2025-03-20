/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        max: { max: "3456px" },
        retina: { max: "3024px" },
        ultra: { max: "2880px" },
        full: { max: "2560px" },
        wide: { max: "1920px" },
        customLaptop: { max: "1680px" },
        laptop: { max: "1536px" },
        mediumLaptop: { max: "1440px" },
        smallLaptop: { max: "1366px" },
        laptopSm: { max: "1280px" },
        tablet: { max: "1024px" },
        tabletSm: { max: "768px" },
        mobile: { max: "640px" },
        mobileSm: { max: "425px" },
        mobileXs: { max: "380px" },
        mobileMini: { max: "320px" },
      },
      borderColor: {
        ellipse: "#E7C0F8",
      },
    },
  },
  plugins: [],
  corePlugins: {
    textFillColor: true,
  },
}

