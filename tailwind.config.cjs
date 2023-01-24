/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  separator: "_",
  daisyui: {
    themes: [
      {
        livroamarelo: {
          primary: "#29373A",
          secondary: "#000000",
          accent: "#E5AE41",
          neutral: "#000000",
          "base-100": "#29373A",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
