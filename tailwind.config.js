module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'poppins': ['"Poppins"', 'sans-serif'] 
    },
    extend: {
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
      },
      width: {
        "10%": "10%",
        "20%": "20%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
      },
      margin:{
        "50%": "50%"
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        orange: {
          light: '#FF7549',
          DEFAULT: '#FF7549',
          dark: '#009eeb',
        },
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
