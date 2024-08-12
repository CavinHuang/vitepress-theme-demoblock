import type { Config } from 'tailwindcss'
/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./.vitepress/**/*.{ts,tsx,vue}', './.vitepress/**/*.{ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '92rem'
      },
      colors: {
        background: {
          dark: 'rgb(var(--background-dark))',
          light: 'rgb(var(--background-light))'
        },
        primary: {
          DEFAULT: 'rgb(var(--primary))',
          light: 'rgb(var(--primary-light))'
        },
        gray: {
          50: 'rgb(var(--gray-50))',
          100: 'rgb(var(--gray-100))',
          200: 'rgb(var(--gray-200))',
          300: 'rgb(var(--gray-300))',
          400: 'rgb(var(--gray-400))',
          500: 'rgb(var(--gray-500))',
          600: 'rgb(var(--gray-600))',
          700: 'rgb(var(--gray-700))',
          800: 'rgb(var(--gray-800))',
          900: 'rgb(var(--gray-900))',
          950: 'rgb(var(--gray-950))'
        }
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
