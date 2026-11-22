/** @type {import('tailwindcss').Config} */
// Aicadmia — "Lavender & Ink" theme.
// Legacy color names (white, slate, purple, cyan…) are remapped so every
// existing class renders correctly on the new light lavender palette.
const ramp = (text, strong, tint, line) => ({
  50: tint, 100: tint, 200: text, 300: text, 400: text, 500: text,
  600: strong, 700: strong, 800: strong, 900: tint, 950: tint, DEFAULT: text,
  line,
})

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        body: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // new semantic tokens
        ink: { DEFAULT: '#1B1830', 2: '#4F4A68', muted: '#6E6888' },
        lavender: { DEFAULT: '#EEEBF6', deep: '#E4DFF5', soft: '#F5F3FA' },
        accent: { DEFAULT: '#5B4BB0', dark: '#4A3C99', light: '#B9AEE6' },
        cream: '#FFFFFF',
        // legacy surface names, remapped light
        midnight: '#F5F3FA',
        void: '#EEEBF6',
        surface: '#FFFFFF',
        'surface-2': '#FAF9FD',
        'surface-3': '#EEEBF6',
        border: '#E2DDF0',
        'border-bright': '#CCC6E0',
        royal: '#4A3C99',
        // "white" text in the old dark UI now means ink
        white: '#1B1830',
        slate: {
          50: '#FFFFFF', 100: '#1B1830', 200: '#25213D', 300: '#2E2A47', 400: '#504A6B',
          500: '#6E6888', 600: '#8E89A6', 700: '#B4AFC8', 800: '#D6D2E4', 900: '#E8E5F1', 950: '#F1EFF7',
        },
        purple: ramp('#5B4BB0', '#4A3C99', '#E4DFF5'),
        violet: ramp('#5B4BB0', '#4A3C99', '#E4DFF5'),
        indigo: ramp('#5B4BB0', '#4A3C99', '#E4DFF5'),
        cyan: ramp('#44597E', '#34466A', '#E3E8F1'),
        blue: ramp('#3E5C8A', '#2F4870', '#E2E9F3'),
        pink: ramp('#9C4F6E', '#7E3D58', '#F4E4EB'),
        green: ramp('#2F7A55', '#25644A', '#E3F1EA'),
        emerald: ramp('#2F7A55', '#25644A', '#E3F1EA'),
        teal: ramp('#2F7A6E', '#24635A', '#E1F0EE'),
        red: ramp('#B2413A', '#93332D', '#F7E3E1'),
        orange: ramp('#B5603C', '#954D2F', '#F6E7DF'),
        amber: ramp('#9A6A12', '#7E560E', '#F6EDD9'),
        yellow: ramp('#9A6A12', '#7E560E', '#F6EDD9'),
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'none',
        'card-glow': 'none',
        'btn-primary': 'none',
        'btn-secondary': 'none',
      },
      boxShadow: {
        'glow-purple': 'none',
        'glow-cyan': 'none',
        'glow-pink': 'none',
        'glow': 'none',
        card: '0 1px 2px rgba(27,24,48,0.04), 0 4px 16px rgba(27,24,48,0.04)',
        'card-hover': '0 2px 4px rgba(27,24,48,0.05), 0 12px 32px rgba(27,24,48,0.08)',
      },
      animation: {
        'pulse-slow': 'none',
        float: 'none',
        'gradient-shift': 'none',
      },
    },
  },
  plugins: [],
}
