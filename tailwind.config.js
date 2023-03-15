/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-backgound': "url('./src/assets/Background.jpg')",
      },
      colors: {
        'eggshell': '#EDF1D6',
        'dark_sea_green': '#9DC08B',
        'russian_green': '#609966',
        'rifle_green': '#40513B',
        'light_silver': '#D9D9D9',
        'electric_green': '#00ff11',
        'candy_apple_red': '#ff1100',
      },
      fontFamily: {
        'acme': ['"Acme"', 'sans-serif'],
        'galindo': ['"Galindo"', 'cursive'],
        'gothic-a1': ['"Gothic A1"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
      },
      width: {
        '1/7': '14.2857%',
        '6/7': '85.7143%',
      }
    },
  },
  plugins: [],
}
