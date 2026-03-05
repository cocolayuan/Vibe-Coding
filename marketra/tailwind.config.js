/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        green: '#2DFF7A',
        purple: '#9FAFFF',
        gold: '#EFDDAC',
        dark: '#050508',
        'dark-card': '#0a0a12',
      },
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        body: ['Exo 2', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
