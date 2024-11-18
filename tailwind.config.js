/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mystic: {
          50: '#f4f7fb',
          100: '#e9eff7',
          200: '#d8e2f2',
          300: '#c0cfe8',
          400: '#a5b5dc',
          500: '#8f9bd0',
          600: '#7b82c2',
          700: '#6a6eaf',
          800: '#585c8f',
          900: '#4b4e73',
        },
        dawn: {
          50: '#fdf4f6',
          100: '#fbe8ed',
          200: '#f9d1dd',
          300: '#f4adc1',
          400: '#ec7d9b',
          500: '#e15c7f',
          600: '#cc3d63',
          700: '#ab2e4e',
          800: '#8f2842',
          900: '#78243a',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};