/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#7C3AED',
          light: '#A78BFA',
          dark: '#5B21B6',
        },
        secondary: '#06B6D4',
        'accent-pink': '#EC4899',
        'accent-rose': '#F43F5E',
        bg: {
          DEFAULT: '#FAF5FF',
          warm: '#FDF4FF',
        },
        'text-primary': '#1E1B4B',
        'text-secondary': '#475569',
        'text-muted': '#64748B',
      },
    },
  },
  plugins: [],
}
