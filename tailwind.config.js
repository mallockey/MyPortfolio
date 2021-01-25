module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': {'min': '200px', 'max': '1000px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
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
