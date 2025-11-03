/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Poppins', 'ui-sans-serif', 'system-ui'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'ui-serif', 'Georgia'],
      },
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Main teal
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        secondary: {
          50: '#fef3c7',
          100: '#fde68a',
          200: '#fcd34d',
          300: '#fbbf24',
          400: '#f59e0b',
          500: '#d97706', // Main amber
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        }
      },
      backgroundImage: {
        'film-grain': "url('https://res.cloudinary.com/dmjxho2rl/image/upload/v1759639916/Pngtree_film_grain_overlay_8671079_amgbm1.png')",
        'subtle-paper': "url('/subtle-paper.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
