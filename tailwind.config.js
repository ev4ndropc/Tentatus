/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
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
        brand: {
          orange: {
            100: '#FDAC05',
            200: '#FE6D0B',
          },
          blue: {
            100: '#01D9FF',
            200: '#016EFD',
          }
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
      backgroundImage: {
        'hero': "url('/images/bg-2.png')",
      }
      
    },
  },
  plugins: [],
}
