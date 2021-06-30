import styled from 'styled-components/macro'

const SlideHeader = styled.h2((props) => ({
  color: props.theme.colours.text,
  fontFamily: props.theme.fonts.heading,
  fontSize: props.theme.fontSizes[2],
  margin: 0
}))

export default SlideHeader
