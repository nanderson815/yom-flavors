module.exports = {
  mode: 'jit',
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      'home-hero': "url(/images/homeHero.jpg)",
      'hero2': "url(/images/hero2.jpg)",
      'hero3': "url(/images/hero3.jpg)",
      'hero4': "url(/images/hero4.jpg)",
      'hero5': "url(/images/hero5.jpg)",
      'vanilla': "url(/images/backgroundVanilla.jpg)",
      'pints': "url(/images/backgroundPints.jpg)"
    },
    extend: {
      colors: {
        lightBlue: "#6999D1",
        lemon: "#F6871F"
      },
    },
  },
  plugins: [],
};
