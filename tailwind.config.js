module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'teal': '#10a3a2',
        'blue': '#5d83c0'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
