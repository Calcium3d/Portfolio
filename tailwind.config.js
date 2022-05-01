module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#0b0c10',
        'grey': '#1f2833',
        'white': '#c5c6c7',
        'light-blue': '#66fcf1',
        'dark-blue': '#45a29e'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif']
      }
    },
  },
  plugins: [],
}

