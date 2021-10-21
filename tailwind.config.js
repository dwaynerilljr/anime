module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'teal': '#10a3a2',
        'gentle-blue': '#5d83c0',
        'light-steel': '#B0B3B1',
        'dark-blue': '#3A416F'
      },
      height: {
        'h-half': '50vh'
      },
      fontFamily: {
        'roboto': ["'Roboto', 'sans'"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
