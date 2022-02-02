module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "theme-white": '#f8f9fa',
        "theme-yellow": '#f9c74f',
        "theme-green": '#90be6d',
        "theme-orange": '#f8961e',
        "theme-red": '#f94144',
        "theme-blue": '#277da1',
        "theme-black": '#212529',
      },
      height: {
        'screen-75': '90vh',
        'screen-50': '50vh'
      },
      letterSpacing: {
        '05-rem': '0.5rem',
      }
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [],
}
