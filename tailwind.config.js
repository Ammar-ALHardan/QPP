/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{html,ts}",
  ],
  // mode: 'aot',//deployment mode
  mode: 'jit',//development mode
  theme: {
    extend: {
      screens: {
        'lg-max': { 'max': '991px' },
        'sm-max': { 'max': '640px' },
        'max-mobile': { 'max': '1024px' },
        'max-mobile-dashboard': { 'max': '640px' },
        'min-desktop-fuel': { 'min': '1420px' },
        'lg-custom': {
          'raw': '(min-width: 768px) and (orientation: landscape), (min-width: 1024px) and (orientation: portrait)'
        },
        'btn-w-image-extra-small': { max: '449px' }
      },
      fontFamily: {
        'Futura-Bk-BT-Medium': ['Futura-Bk-BT-Medium', 'Red Hat Text', 'sans-serif'],
        'red-hat-text': ['Red Hat Text']
      },
      boxShadow: {
        'custom-1': '0px 40px 80px #0000001A',
        'custom-2': '0px 20px 40px #0000004D',
        'custom-3': '0px 10px 30px #00000033',
        'custom-4': '0px 3px 6px #00000029',
        'custom-5': '0 20px 40px #0000001A',
        'custom-6': '0px 1px 13px #0000001A',
        'custom-7': '0px 1px 3px #0000000D',
        'custom-8': '0px 0px 10px #0000001A',
        'custom-9': '1px 1px 20px #fff'
      },
      dropShadow: {
        'widget': '0 3px 6px rgba(0, 0, 0, 0.16)',
        'map-shadow': '0px 10px 30px #00000033',
        'offer': '16px 16px 0px #00904A',
        'offer-RTL': '-16px 16px 0px #00904A'
      },
      maxWidth: {
        'desktop-less': '1440px',
        'desktop': '1440px',
        'large-desktop': '1792px'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(9,9,121,1) 100%)',
        'custom-gradient-rtl': 'linear-gradient(90deg,rgba(9,9,121,1) 0%, rgba(9,9,121,1) 35%, rgba(2,0,36,1)  100%)',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}

