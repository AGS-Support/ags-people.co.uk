module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003D7A",
        brand: "#003D7A",
        secondary: "#FE9D0B",
        accent: "#FE9D0B",
        tint: "#EBEFF4",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
