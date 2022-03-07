const renderWidth = (part, full) => {
  return `${(100 / full) * part}%`
}
  
const calcWidth = (percent, minusPart) => {
  return `calc(${percent}% - ${minusPart}rem)`
}
  
module.exports = {
  // mode: 'jit',
  purge: [
    './src/**/*.tsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        graphik: ['Graphik', 'sans-serif']
      },
      border: {
        border16: 'border-r-16',
        '1': '1px'
      },
      borderRadius: {
        DEFAULT: '4px'
      },
      fontSize: {
        xss: '10px'
      },
      colors: {
        gray: {
          DEFAULT: '#7E8299',
          border: '#E5E5E5'
        },
        yellow: {
          DEFAULT: '#F6CA65'
        },
        blue: {
          DEFAULT: '#005B96'
        },
        green: {
          DEFAULT: '#1BC5BD',
          hover: '#3aae84',
          btnText: '#00BF9D'
        },

        purple: {
          DEFAULT: '#5E5BF9',
          hover: '#4b48c7',
          purpleDisabled: '#eeeefd',
          blackPurple: 'rgba(94, 91, 249, 0.2)',
          purpleBg: 'rgba(94, 91, 249, 0.1)'
        },
        red: {
          DEFAULT: '#EB5757',
          hover: '#e84040'
        },
        white: {
          DEFAULT: '#fff',
          sixty: 'rgba(255, 255, 255, 0.6)',
          fifty: 'rgba(255, 255, 255, 0.5)',
          forty: 'rgba(255, 255, 255, 0.4)'
        },
        black: {
          dark: '#011F4B',
          darkest: '#16151A',
          DEFAULT: '#000',
          border: '#33333F',
          background: 'rgba(0,0,0,0.5)'
        },
        success: '#41C092'
      },
      width: {
        '370px': '370px',
        '27': '27%',
        '5px': '5px',
        '120px': '120px',
        '200px': '200px',
        '288px': '288px',
        '196px': '196px',
        '100%-288px': 'calc(100% - 288px)',
        '448px': '448px',
        '488px': '488px',
        '573px': '573px',
        'full-scroll': 'calc(100% - 6px)',
        '1/13': renderWidth(1,13),
        '1.5/13': renderWidth(1.5,13),
        '2/13': renderWidth(2,13),
        '3/13': renderWidth(3,13),
        '4/13': renderWidth(4,13),
        '5/13': renderWidth(5,13),
        '6/13': renderWidth(6,13),
        '7/13': renderWidth(7,13),
        '8/13': renderWidth(8,13),
        '9/13': renderWidth(9,13),
        '10/13': renderWidth(10,13),
        '11/13': renderWidth(11,13),
        '12/13': renderWidth(12,13),
        '1/16': renderWidth(1,16),
        '1.5/16': renderWidth(1.5,16),
        '2/16': renderWidth(2,16),
        '2.5/16': renderWidth(2.5,16),
        '3/16': renderWidth(3,16),
        '3.5/16': renderWidth(3.5,16),
        '4/16': renderWidth(4,16),
        '5/16': renderWidth(5,16),
        '6/16': renderWidth(6,16),
        '7/16': renderWidth(7,16),
        '8/16': renderWidth(8,16),
        '9/16': renderWidth(9,16),
        '10/16': renderWidth(10,16),
        '11/16': renderWidth(11,16),
        '12/16': renderWidth(12,16),
        '13/16': renderWidth(13,16),
        '14/16': renderWidth(14,16),
        '15/16': renderWidth(15,16),
        '1/3-0.5rem': calcWidth(33, 0.5),
        '1/3-1rem': calcWidth(33, 1),
        '1/3-2rem': calcWidth(33, 2),
        '1/3-3rem': calcWidth(33, 3),
        '100%-4rem': calcWidth(100, 4)
      },
      minWidth: {
        '330px': '330px'
      },
      maxWidth: {
        '60%': '60%',
        '345px': '345px'
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding'
      },
      height: {
        '1px': '1px',
        '2px': '2px',
        '25px': '25px',
        '38px': '38px',
        '80px': '80px',
        '26px': '26px',
        '212px': '212px',
        '235px': '235px',
        '400px': '400px',
        '500px': '500px',
        '600px': '600px',
        '100vh-6rem': 'calc(100vh - 6rem)',
        '100%-50px': 'calc(100% - 50px)',
        '100%-84px': 'calc(100% - 84px)',
        '100vh-80px': 'calc(100vh - 80px',
        'private-market': 'calc(100vh - 6.5rem - 98px)',
        '100%-125px': 'calc(100% - 125px)',
        '100vh-152px': 'calc(100vh - 152px)',
        '100%-87.4px': 'calc(100% - 87.4px)',
        '43%-15px': 'calc(50% - 15px)',
        '50%-7px': 'calc(50% - 7px)'
      },
      padding: {
        '05': '2px'
      },
      zIndex: {
        '60': 60,
        '65': 65,
        '70': 70,
        '75': 75,
        '80': 80,
        '100': 100,
        '999': 999
      },
      animation: {
        growDown: 'growDown 0.8s ease-in-out both'
      },
      keyframes: {
        growDown: {
          '0%': { 
            transform: 'translateY(-10%)' 
          },
          '100%': { 
            transform: 'translateY(0))' 
          }
        }
      },
      transformOrigin: {
        'top-center': 'top center'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms')
  ]
}