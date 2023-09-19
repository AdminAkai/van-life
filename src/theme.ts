interface IBackground {
  primary: '#FFF7ED'
  secondary: '#252525'
  tan: '#FFCC8D'
  gray: '#252525'
}

interface IText {
  black: '#000000'
  gray: '#4D4D4D'
  footer: '#AAAAAA'
  white: '#FFFFFF'
  tan: '#FFEAD0'
}

interface IButton {
  primary: '#FF8C38'
  orange: '#E17654'
  green: '#115E59'
  black: '#161616'
}

interface ITheme {
  black: '#161616'
  background: IBackground
  text: IText
  button: IButton
}

const theme: ITheme = {
  black: '#161616',
  background: {
    primary: '#FFF7ED',
    secondary: '#252525',
    tan: '#FFCC8D',
    gray: '#252525',
  },
  text: {
    black: '#000000',
    gray: '#4D4D4D',
    footer: '#AAAAAA',
    white: '#FFFFFF',
    tan: '#FFEAD0',
  },
  button: {
    primary: '#FF8C38',
    orange: '#E17654',
    green: '#115E59',
    black: '#161616',
  },
}

export default theme
