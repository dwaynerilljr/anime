module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#10a3a2',
        'secondary': '#F72585',
        'light-primary': '#e7f6f6',
        'ternary': '#7209b7'
      },
      height: {
        'h-half': '50vh',
        '60': '60px'
      },
      fontFamily: {
        'bangers': ["'Bangers', 'sans'"],
        'raleway': ["'Raleway', 'sans'"]
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
  coreplugins: {
    divideStyle: true
  }
}
