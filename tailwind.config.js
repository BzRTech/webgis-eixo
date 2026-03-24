/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand BZR Tech
        'brand-yellow': '#FCD34D',
        'brand-dark':   '#1F2937',

        // Camadas do mapa
        'quadras':      '#FCD34D',
        'lotes':        '#FBBF24',
        'logradouros':  '#F59E0B',
      },
    },
  },
  plugins: [],
}
