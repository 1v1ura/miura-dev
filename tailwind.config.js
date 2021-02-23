module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica\\ Neue', 'Arial', 'Hiragino\\ Kaku\\ Gothic\\ ProN', 'Hiragino\\ Sans', 'Meiryo', 'sans-serif'],
      },
      gridTemplateRows: {
        'layout-default': 'auto 30px 1fr 80px auto',
      },
      scale: {
        '101': '1.01'
      },
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}
