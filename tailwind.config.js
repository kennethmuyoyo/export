/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './sections/**/*.{js,ts,jsx,tsx,mdx}',
  './styles/**/*.{js,ts,jsx,tsx,mdx}',
  './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  './public/**/*.{js,ts,ttf,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
  fontFamily: {
    montserrat: ['Montserrat', 'sans-serif'],
  },
};
export const plugins = [];
