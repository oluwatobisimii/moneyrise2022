module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {

    extend: {
      colors:{
        primary2: 'var(--primary-2)',
        black:  'var(--black)',
        bodycopy: 'var(--body-copy)',
        dark2: 'var(--dark-2)',
        dark3: 'var(--dark-3)',
        dark4:  'var(--dark-4)',
        darktext: 'var(--dark-text)',
        darktextHD: 'var(--dark-textHD)',
        teal4: 'var(--teal-4)',
        darkstroke: 'var(--dark-stroke)',
        white: 'white',
        grey: '#f5f5f5',
        darker: '#1F2323',
        aboutgrey: '#f1f1f1',
        stroke: '#dfdfdf',
        featdark: '#414141',
        speaker: '#f8f9f9',
        speakercardtext:'#787878',
        profile: '#696969',
        allright: '#494949',
        btnhover: '#0898a0',
         },

      fontFamily: {
        'dm-sans': ['"DM Sans"', 'san-serif'],
        'tomato': ['"Tomato Grotesk"', 'serif']
      },
      fontSize:{
        '14': '14px',
        '18': '18px',
      },

      boxShadow: {
        'speaker': '0px 10px 60px rgba(0, 0, 0, 0.07)',
      },

      keyframes: {
        btnbounce: {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },

      animation: {
        'btnbounce': 'btnbounce 1s infinite',
      }
    },
  },
  plugins: [],
}
