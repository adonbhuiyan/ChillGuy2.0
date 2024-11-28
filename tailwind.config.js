/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif']
      },
      screens: {
        'mobile': { min: '200px', max: '499px' }
      },
      boxShadow: {

        'SM': '-10px 10px 0 0px rgb(0,0,0)',
        'SMCOLOR': '-10px 10px 0 0px rgb(34,197,94)'
      }
    },
  },
  plugins: [],
}

