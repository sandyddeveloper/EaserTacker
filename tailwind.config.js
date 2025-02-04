/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const Color = require('color');

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        '0': '0',
        xl: '36rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["odd", "dark"],
      textColor: ["focus-within", "hover", "active", "dark"],
      placeholderColor: ["focus", "dark"],
      borderColor: ["focus", "hover", "dark"],
      divideColor: ["dark"],
      boxShadow: ["focus", "dark:focus"],
    },
  },
  plugins: [],
};
