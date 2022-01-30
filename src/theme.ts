import CSS from 'csstype'
import { getValueAndUnit, modularScale, stripUnit, remToPx } from 'polished'
import '@fontsource/space-grotesk/latin.css'
import '@fontsource/inter'

// Loosely modelled after https://theme-ui.com/theme-spec/

interface Theme {
  colours: {
    text?: CSS.ColorProperty
    background?: CSS.ColorProperty
    primary: CSS.ColorProperty
    secondary?: CSS.ColorProperty
    tertiary?: CSS.ColorProperty
  }
  lineHeights: any
  fonts?: any
  fontSizes?: any
  fontWeights?: any
  space?: any
}

const minRatio = 1.2
const maxRatio = 1.333
const minSize = 1 / minRatio + 'rem'
const maxSize = '1rem'
const minWidth = '320px'
const maxWidth = '1920px'

const between = (
  minSize: CSS.FontSizeProperty<string>,
  maxSize: CSS.FontSizeProperty<string>,
  minWidth: CSS.WidthProperty<string>,
  maxWidth: CSS.WidthProperty<string>
): CSS.FontSizeProperty<string> | CSS.WidthProperty<string> => {
  const sizeRange = +stripUnit(remToPx(maxSize)) - +stripUnit(remToPx(minSize))

  const widthRange = +stripUnit(maxWidth) - +stripUnit(minWidth)

  return `clamp(
      ${minSize},
      calc(
          ${minSize}
        + (
            ${sizeRange}
          * (
              (100vw - ${minWidth})
            / ${widthRange}
            )
          )
      ),
    ${maxSize}
  )`
}

const fluidScale = (
  minSize: CSS.FontSizeProperty<string>,
  minWidth: CSS.WidthProperty<string>,
  minRatio: number,
  maxSize: CSS.FontSizeProperty<string>,
  maxWidth: CSS.WidthProperty<string>,
  maxRatio: number,
  steps: number,
  startAt: number
) => {
  const [minStart, maxStart] = [
    [minSize, minRatio],
    [maxSize, maxRatio],
  ].map(([size, ratio]) => {
    const [value, unit] = getValueAndUnit(size)
    return `${value * Math.pow(+ratio, startAt)}${unit}`
  })

  return Array(steps)
    .fill(0) /* Array(x) is just the slots, still empty */
    .map((_, i) =>
      between(
        modularScale(i, minStart, minRatio),
        modularScale(i, maxStart, maxRatio),
        minWidth,
        maxWidth
      )
    )
    .reduce(
      /* build a Map with the index: value, index starting at 'startsAt' */
      (previousValue, currentValue, currentIndex) =>
        previousValue.set(currentIndex + startAt, currentValue),
      new Map()
    )
}

const scale = fluidScale(
  minSize,
  minWidth,
  minRatio,
  maxSize,
  maxWidth,
  maxRatio,
  31,
  -10
)

const theme: Theme = {
  colours: {
    primary: 'slateblue',
    secondary: 'magenta',
    background: 'white',
    text: 'rgb(10, 12, 16)',
  },
  fonts: {
    body: 'Inter',
    heading: 'Space Grotesk',
  },
  fontWeights: {
    body: '400',
    heading: '500',
    bold: '700',
  },
  lineHeights: { body: 1.5, heading: 1.125 },
  fontSizes: (num: number) => scale.get(num),
  space: (num: number) => scale.get(num),
}

export default theme
