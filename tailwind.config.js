/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
       'primary': 'rgba(50, 70, 255, 100%)',
       'neutral-1': 'rgba(227, 228, 230, 1)',
       'neutral-2': 'rgba(227, 228, 230, 0.55)',
       'navbarBtn': 'rgba(255, 255, 255, 1)',
       'white': 'rgba(rgba(255, 255, 255, 1))'
      },
    },
  },
  plugins: [],
}
