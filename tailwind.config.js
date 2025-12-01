import defaultTheme from 'tailwindcss/defaultTheme'
import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        display: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#050505',
        foreground: '#f4f4f5',
        muted: '#18181b',
        'muted-foreground': '#a1a1aa',
        border: 'rgba(255,255,255,0.08)',
        surface: 'rgba(15,15,15,0.8)',
        primary: {
          DEFAULT: '#ef4444',
          foreground: '#0a0a0a',
          light: '#f87171',
          dark: '#b91c1c',
        },
        accent: {
          DEFAULT: '#f97316',
          soft: 'rgba(249, 115, 22, 0.15)',
        },
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'hero-glow':
          'radial-gradient(circle at 20% 20%, rgba(239,68,68,0.45), transparent 45%), radial-gradient(circle at 80% 0%, rgba(59,7,100,0.5), transparent 40%)',
      },
      boxShadow: {
        brand: '0 20px 70px -35px rgba(239,68,68,0.8)',
        outline: '0 0 0 1px rgba(239,68,68,0.4)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}

