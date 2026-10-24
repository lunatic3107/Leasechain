/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A6B6D',
        accent: '#D87A4A',
        success: '#2D7A4F',
        warning: '#E59500',
        danger: '#D9534F',
        'bg-warm': '#F7F5F3',
        'text-dark': '#2B2B2B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
