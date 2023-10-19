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
          light: '#EE4B2B',
          DEFAULT: '#CC5500',
          dark: '#D22B2B',
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
          DEFAULT: '#FFFFFF',
          dark: '#E2E8F0',
        },
        black: {
          light: '#343434',
          DEFAULT: '#000000',
          dark: '#28282B',
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
