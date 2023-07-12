/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
       'primary': '#3246FF',
       'backgroundColor': 'linear-gradient(180deg, #010208 16.39%, #010206 20.51%, #040008 24.79%, #010101 30.46%, #010101 34.11%, #010101 36.21%, #010101 100%)',
       'neutral-1': 'rgba(227, 228, 230, 1)',
       'neutral-2': 'rgba(227, 228, 230, 0.55)',
       'buttonColor': 'rgba(255, 255, 255, 1)',
      },
      fontFamily: {
        sans: ['var(--font-work_sans)']
      },
    },
  },
  plugins: [],
}
