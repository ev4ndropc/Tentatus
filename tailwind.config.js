/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      keyframes: {
        hello: {
          '0%': {
              transform: 'rotate(0deg)'
          },
          '10%': {
              transform: 'rotate(14deg)'
          },
          '20%': {
              transform: 'rotate(-8deg)'
          },
          '30%': {
              transform: 'rotate(14deg)'
          },
          '40%': {
              transform: 'rotate(-4deg)'
          },
          '50%': {
              transform: 'rotate(10deg)'
          },
          '60%': {
              transform: 'rotate(0deg)'
          },
          'to': {
              transform: 'rotate(0deg)'
          }
        }
      },
      animation: {
        hello: 'hello 2.5s infinite',
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    },
  },
  plugins: [],
}
