/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-rubik)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        neem: {
          purple: '#C985FF',
          blue: '#5B8AF0',
          orange: '#EB8F24',
          green: '#70C4BB',
          ['font-faded']: '#9DA7BE',
          ['font-default']: '#263446',
        },
      },
    },
  },
  plugins: [],
};
