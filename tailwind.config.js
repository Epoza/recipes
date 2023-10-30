/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        subtleGreen: {
          background: '#dde1db',
          nav: '#e5e8e3',
          border: '#c1cfba',
        },
        barelyGreen: '#495648',
        brownShirt: '#82716e',
        blondey: {
          primary: '#cab786',
          secondary: '#cfbd91',
        },
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '888883',
        },
      },
      fontFamily: {
        body: ['Nunito'],
      },
    },
  },
  plugins: [],
}

