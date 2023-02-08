module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#58575D", //grey
        //brand: "#f97236", //orange
        brand: "#0081B4", //blue
        // secondary: "#FE9D0B",
        secondary: "#58575D", //grey
        primarybg: "#A21C26", //red
        //accent: "#FE9D0B", //orange
        accent: "#0081B4", //blue
        //tint: "#EBEFF4",
        tint: "#EBEFF4", //light grey
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
