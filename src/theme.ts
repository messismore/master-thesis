import CSS from 'csstype'
import { modularScale } from 'polished'
import colours from './gh-colours'

interface Theme {
  colours: {
    text?: CSS.Property.Color
    background?: CSS.Property.Color
    primary: CSS.Property.Color
    secondary?: CSS.Property.Color
    tertiary?: CSS.Property.Color
  }
  lineHeights: {}
  fonts?: {}
  fontSizes?: any
  space?: {}
}

const ratio = 'perfectFifth'

const theme: Theme = {
  colours: {
    primary: colours['0'],
    secondary: colours['1'],
    background: 'white',
    text: 'rgb(10, 12, 16)',
  },
  fonts: {
    body: 'Graphik, sans-serif',
    heading: 'Graphik, sans-serif',
  },
  lineHeights: { body: 1.5, heading: 1.125 },
  fontSizes: [0, 1, 2, 3, 4, 5].map(
    (step) => modularScale(step, 16, ratio) + 'px'
  ),
}

export default theme
