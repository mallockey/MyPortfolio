module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: { min: '200px', max: '1000px' },
    },
    extend: {
      backgroundImage: (theme) => ({
        'macos-back': 'url(./macos.jpg)',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
