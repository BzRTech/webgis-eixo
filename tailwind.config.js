/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand BZR Tech
        'brand-yellow': '#FCD34D',
        'brand-dark':   '#1F2937',

        // Secretarias (camadas do mapa)
        'planejamento': '#FCD34D',
        'tributos':     '#FBBF24',
        'ambiental':    '#F59E0B',
      },
    },
  },
  plugins: [],
}
