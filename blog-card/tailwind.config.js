/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        grayLight1: '#F9FAFB',
        grayLight2: '#D2D6DB',
        indigo: '#4338CA',
        black: '#171717',
        grayDark: '#525252',
        greenDark: '#15803D',
        greenMedium: '#BBF7D0',
        greenLight: '#F0FDF4' 
      }
    },
  },
  plugins: [],
}

