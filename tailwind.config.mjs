/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        'arch-dark': '#2C3539',
        'arch-light': '#F5F5F5',
        'arch-accent': '#9A8A78',
      }
    },
  },
  plugins: [],
}