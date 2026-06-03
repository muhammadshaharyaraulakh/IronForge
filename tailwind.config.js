/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C8A84B',
          light: '#E8C96A',
          dark: '#A08030',
        },
        dark: {
          bg: '#0A0A0A',
          secondary: '#111111',
          card: '#1A1A1A',
          deeper: '#050505',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
        'ken-burns': 'kenBurns 12s ease-in-out infinite alternate',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.08)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(12px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      boxShadow: {
        'gold-glow': '0 20px 60px rgba(200, 168, 75, 0.2)',
        'gold-glow-lg': '0 30px 80px rgba(200, 168, 75, 0.35)',
      },
    },
  },
  plugins: [],
};
