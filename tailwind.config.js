const colors = require('tailwindcss/colors')
const { color } = require('./public/infos.json')

module.exports = {
   mode: 'jit',   
   darkMode: 'class',

   theme: {
      extend: {
         colors: {
            'main-color': color,
            gray: colors.coolGray
         },
         screens: {
            'xs':'350px',
            'sm': '576px',
            // => @media (min-width: 576px) { ... }
      
            'md': '960px',
            // => @media (min-width: 960px) { ... }
      
            'lg': '1040px',
            // => @media (min-width: 1440px) { ... }
          },
      },

      fontFamily: {
         'sans': ['"Open Sans"', 'sans-serif'],
         'body': ['"Open Sans"', '"Font Awesome"']
      }
   },

   purge: [
      './index.html',
      './src/**/*.vue',
      './src/**/*.vue',
      './node_modules/vue3-carousel/dist/**/*.js',
      './node_modules/aos/src/sass/*.scss'
   ]
}