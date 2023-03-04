/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 4px 12px 0 rgb(0 0 0 / 0.05)'
      },
      width: {
        '88': '88%'
      },
      lineHeight: {
        '12': '80px'
      },
      minWidth: {
        'xl': '980px'
      },
      animation:{
        slideinright: 'slideinright 1s ease-in-out',
        slideintop: 'slideintop 1s ease-in-out',
        slideinbottom: 'slideinbottom 1s ease-in-out',
      },
      keyframes:{
        slideinright: {
          '0%': { transform: 'translateX(50%)', opacity: '0'},
          '100%': { transform: 'translateX(0)', opacity: '1'}
        },
        slideintop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0'},
          '100%': { transform: 'translateY(0)', opacity: '1'}
        },
        slideinbottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0'},
          '100%': { transform: 'translateY(0)', opacity: '1'}
        }
      }
    },
  },
  plugins: [],
}