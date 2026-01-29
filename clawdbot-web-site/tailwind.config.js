/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#00897B',
        accent: '#D4A017',
        text: '#1A2E1A',
        'text-muted': '#4A6B4A',
        glass: 'rgba(255, 255, 255, 0.45)',
        'glass-border': 'rgba(255, 255, 255, 0.6)',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #E8F5E1 0%, #D4F0E8 50%, #F5F9E8 100%)',
      },
    },
  },
  plugins: [],
}
