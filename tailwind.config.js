/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2opx',
        md: '50px'
      }
    },
    extend: {
      colors: {
        primary: '#01051e',
        secondary: '#ff7d3b',
        light: '#020726',
        dark: '#010417',
        gray: '#333',
        blob: '#A427DF',
      },
      height: {
        "50": "200px"
      }
    },
  },
  plugins: [],
}

