/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         boxShadow: {
            popoverShadow: 'rgb(0 0 0 / 12%) 0px 2px 12px;',
         },
         backgroundColor: {
            primaryColor: '#fe2c55',
         },
      },
   },
   plugins: [require('tailwind-scrollbar')],
}
