module.exports = {
  purge: {
    mode: 'layers',
    content: ['./views/*.html', './views/*.js']
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
