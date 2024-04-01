/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        colorgen:'https://uicolors.app/create',
        primary: {
          '50': '#f2f9f9',
          '100': '#dfeeee',
          '200': '#b4d6d7',
          '300': '#98c6c8',
          '400': '#67a5a9',
          '500': '#4b8a8f',
          '600': '#417279',
          '700': '#3a5e64',
          '800': '#354f55',
          '900': '#304449',
          '950': '#1c2b30',
        },
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
