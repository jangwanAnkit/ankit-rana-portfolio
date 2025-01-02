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
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'word-color': {
          '0%, 100%': { color: 'var(--color-arch-light)' },
          '50%': { color: 'var(--color-arch-accent)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'word-color': 'word-color 10s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}