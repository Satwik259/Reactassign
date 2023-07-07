module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '10': '10px',
      },
      colors: {
        'wild-sand': '#F5F5F5',
        'gallery': '#EAEAEA'
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      screens: {
        'sm': '700px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      width: {
        '42': '42%',
        '58': '58%',
      },
    },
  },
  plugins: [],
}