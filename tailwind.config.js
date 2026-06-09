/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        midnight: '#050510',
        void: '#08081a',
        surface: '#0d0d25',
        'surface-2': '#12122e',
        'surface-3': '#181838',
        border: '#1e1e4a',
        'border-bright': '#2d2d6e',
        purple: {
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          900: '#3b0764',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        pink: {
          400: '#f472b6',
          500: '#ec4899',
        },
        royal: '#3b4fd8',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139,92,246,0.3), transparent)',
        'card-glow': 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(34,211,238,0.05))',
        'btn-primary': 'linear-gradient(135deg, #7c3aed, #3b4fd8)',
        'btn-secondary': 'linear-gradient(135deg, #06b6d4, #3b4fd8)',
      },
      boxShadow: {
        'glow-purple': '0 0 30px rgba(139,92,246,0.4)',
        'glow-cyan': '0 0 30px rgba(34,211,238,0.3)',
        'glow-pink': '0 0 30px rgba(244,114,182,0.3)',
        'card': '0 8px 32px rgba(0,0,0,0.5)',
        'card-hover': '0 16px 48px rgba(139,92,246,0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
