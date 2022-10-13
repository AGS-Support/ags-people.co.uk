module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#58575D",
        brand: "#f97236",
        // secondary: "#FE9D0B",
        secondary: "#58575D",
        primarybg: "#A21C26",
        accent: "#FE9D0B",
        //tint: "#EBEFF4",
        tint: "#EBEFF4",
        para: "#2D1115",
        dark: "#111111",
        yellow: "#F8CE01",
        header: "#F2F2F2",
        footer: "#F2F2F2",
      },
    },
    screens: {
      md: "820px",
      sm: "420px",
      quickLinks: "1200px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
