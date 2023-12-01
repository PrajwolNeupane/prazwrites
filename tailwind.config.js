/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-800": "#141414",
        "dark-600": "#262626",
        "dark-400": "#404040",
        "dark-200":"#5e5d5d",
        "light-200": "#ffffff",
        "light-400": "#f7f7f7",
        "light-600": "#e6e6e6",
        "primary-400": "#dafa7f",
        "primary-600": "#D5F96E",
        "primary-800": "#d1fa5c",
      },
      fontWeight: {
        bold: "700",
        semi: "600",
        medium: 500,
        regular: 400,
        light: 300,
      },
      fontSize: {
        xxxl: "50px",
        xxl: "40px",
        xl: "34px",
        lg: "28px",
        md: "23px",
        rg: "20px",
        sm: "17px",
        xs: "14px",
        xxs: "12px",
        xxxs: "10px",
      },
      screens:{
        md:"1200px",
        sm:"700px"
      }
    },
  },
  plugins: [],
};
