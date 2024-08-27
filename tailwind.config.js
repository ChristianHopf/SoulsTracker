/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  theme: {
    extend: {},
    colors: {
      'header-dark': colors.slate[800],
      'bg-dark': colors.gray[500],
      'primary-dark': colors.gray[100],
      'secondary-dark': colors.gray[300],
      'accent-dark': colors.amber[300],
      'header-light': colors.white,
      'bg-light': colors.gray[200],
      'primary-light': colors.black,
      'secondary-light': colors.gray[800],
      'accent-light': colors.sky[400],
    },
  },
  plugins: [],
};
