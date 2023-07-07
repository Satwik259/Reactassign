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
      width: {
        '42': '42%',
        '58': '58%',
      },
    },
  },
  plugins: [],
}