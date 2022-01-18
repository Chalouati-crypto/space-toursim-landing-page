module.exports = {
  content: ["./src/**/*.html", "./index.html"],
  theme: {
    screens: {
      tablet: "35em",
      desktop: "65em",
      "big-desktop": "90em",
    },
    backgroundImage: {
      "hero-mobile": "url('./src/assets/home/background-home-mobile.jpg')",
      "hero-tablet": "url('./src/assets/home/background-home-tablet.jpg')",
      "hero-desktop": "url('./src/assets/home/background-home-desktop.jpg')",
      "destinations-mobile":
        "url('./src/assets/destination/background-destination-mobile.jpg')",
      "destinations-tablet":
        "url('./src/assets/destination/background-destination-tablet.jpg')",
      "destinations-desktop":
        "url('./src/assets/destination/background-destination-desktop.jpg')",
      "crew-mobile": "url('./src/assets/crew/background-crew-mobile.jpg')",
      "crew-tablet": "url('./src/assets/crew/background-crew-tablet.jpg')",
      "crew-desktop": "url('./src/assets/crew/background-crew-desktop.jpg')",
      "technology-mobile":
        "url('./src/assets/technology/background-technology-mobile.jpg')",
      "technology-tablet":
        "url('./src/assets/technology/background-technology-tablet.jpg')",
      "technology-desktop":
        "url('./src/assets/technology/background-technology-desktop.jpg')",
    },
    colors: {
      "dark-blue": "#0B0D17",
      purple: "#D0D6F9",
      white: "#FFFFFF",
    },
    fontFamily: {
      serif: "'Bellefair', serif",
      sans: "'Barlow Condensed', sans-serif",
    },
    fontSize: {
      heading1: "9.375rem",
      heading2: "6.25rem",
      heading3: "3.5rem",
      heading4: "2rem",
      heading5: "1.75rem",
      heading6: "1rem",
      paragraph: "1.125rem",
    },
    extend: {},
  },
  plugins: [],
};
