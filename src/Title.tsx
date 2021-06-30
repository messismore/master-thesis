import styled from 'styled-components/macro'

const Title = styled.h1((props) => ({
  color: props.theme.colours.secondary,
  fontFamily: props.theme.fonts.heading,
  fontSize: props.theme.fontSizes[4],
  placeSelf: 'center',
}))

export default Title
