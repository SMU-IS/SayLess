/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-header': "url('./assets/Reusable/GradientHeader.png')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
      },
      colors: {
        midnight: '#221E2F',
        red: {
          light: '#FF0000',
          DEFAULT: '#FF0000',
          dark: '#8B0000',
        },
        green: {
          light: '#228B22',
          DEFAULT: '#9E9E9E',
          dark: '#006400',
        },
        blue: {
          light: '#ADD8E6',
          DEFAULT: '#0047AB',
          dark: '#00008B',
        },
        purple: {
          light: '#A3B3ED',
          DEFAULT: '#6580E1',
          dark: '#455DB3',
        },
        pink: {
          light: '#E3D1EC',
          DEFAULT: '#D0B2E0',
          dark: '#AC83C2',
        },
        main: {
          light: '#2D1577',
          DEFAULT: '#242343',
          dark: '#191835',
        },
        white: {
          light: '#94A3B8',
          DEFAULT: '#ffffff',
          dark: '#E2E8F0',
        },
        card: {
          light: '#332E46',
          DEFAULT: '#221E2F',
          dark: '#1B1826',
        },
        transparent: {
          light: 'rgba(255,255,255,0.3)',
          DEFAULT: 'rgba(255,255,255,0.2)',
          dark: '#FFFFFF1A',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
