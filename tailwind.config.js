module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat'],
        rob: ['Roboto Slab', 'san-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
