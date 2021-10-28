module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'teal': '#10a3a2',
        'gentle-blue': '#F72585',
        'light-steel': '#B0B3B1',
        'dark-blue': '#7209b7'
      },
      height: {
        'h-half': '50vh',
        '60': '60px'
      },
      fontFamily: {
        'roboto': ["'Roboto', 'sans'"]
      },
      padding: {
        '52': '64px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
