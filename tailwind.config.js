module.exports = {
  purge: {
    mode: 'layers',
    content: ['./Public/*.html', './Public/*.js']
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
