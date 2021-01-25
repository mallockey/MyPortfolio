module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'macos-back' : "url(./macos.jpg)"
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
