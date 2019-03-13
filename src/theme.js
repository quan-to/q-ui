// descbribe your themes here
const themes = {
  default: {
    typo: {
      directory: '/assets/fonts/',
      base: 16,
      lineHeight: '1.5',
      scale: [0.8, 1, 1.25, 1.563, 1.953, 2.441, 3.052],
    },
    rythm: {
      base: 9,
      scale: [9, 27, 81],
    },
    grid: {
      container: 960,
    },
    palette: {
      foreground: '',
      background: '',
      hyperlink: '',
      card: '',
      red: '',
      blue: '',
      green: '',
      yellow: '',
      black: '',
      white: '',
      gray: '',
    },
    iconDirectory: '/assets/icons/',
    imageDirectory: '/assets/images/',
  },
}

// describe your current theme name here
const current = 'default';
export default themes[current];
