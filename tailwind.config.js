/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        midnight: '#000024',
        green: {
          light: '#9E9E9E',
          DEFAULT: '#006400',
          dark: '#006400',
        },
        purple: {
          light: '#A3B3ED',
          default: '#6580E1',
          dark: '#455DB3',
        },
        pink: {
          light: '#E3D1EC',
          default: '#D0B2E0',
          dark: '#AC83C2',
        },
        main: {
          light: '#2D1577',
          default: '#140935',
          dark: '#0C0520',
        },
        card: {
          light: '#332E46',
          default: '#221E2F',
          dark: '#1B1826',
        },
        trans: {
          light: 'rgba(255,255,255,0.3)',
          default: 'rgba(255,255,255,0.2)',
          dark: '#FFFFFF1A',
        },
      },
      fontFamily: {
        sen: ['Sen', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
