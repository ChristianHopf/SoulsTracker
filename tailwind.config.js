/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  theme: {
    extend: {},
    colors: {
      'header-dark': '#1A2325',
      'bg-dark': '#494E54',
      'primary-dark': '#E0E0E0',
      'secondary-dark': '#B0B0B0',
      'accent-dark': '#F2D16C',
      'header-light': colors.white,
      'bg-light': colors.gray[200],
      'primary-light': colors.black,
      'secondary-light': colors.gray[800],
      'accent-light': colors.sky[400],
    },
  },
  plugins: [],
};
