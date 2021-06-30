import styled from 'styled-components/macro'
/* import CSS from 'csstype' */

/*  : CSS.Properties @TODO */

const Slide = styled.section((props) => ({
  background: props.theme.colours.background,
  display: 'flex',
  flexDirection: 'column',
  height: '98vh',
  width: '90vw',
  padding: '1vh 5vh',
  scrollSnapAlign: 'start',
  fontFamily: props.theme.fonts.body,
  fontSize: props.theme.fontSizes[1],
}))

export default Slide
