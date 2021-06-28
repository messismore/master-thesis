import CSS from 'csstype'

interface Theme {
  colours: {
    text?: CSS.Property.Color
    background?: CSS.Property.Color
    primary: CSS.Property.Color
    secondary?: CSS.Property.Color
    tertiary?: CSS.Property.Color
  }
  fonts?: {}
  space?: {}
}

const theme: Theme = {
  colours: {
    primary: 'blue',
    secondary: 'palevioletred',
    background: 'white',
  },
}

export default theme
