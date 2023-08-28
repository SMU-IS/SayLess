/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#000024',
      },
      fontFamily: {
        sen: ['Sen', 'sans-serif'],
      },     
      // fontFamily: {
      //   sen: ['Sen', 'sans-serif'],
      // },
    },
  },
  plugins: [],
};
