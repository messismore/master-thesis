import styled from 'styled-components'
/* import CSS from 'csstype' */

/*  : CSS.Properties @TODO */

const Slide = styled.section((props) => ({
  background: props.theme.colours.background,
  display: 'flex',
  height: '90vh',
  width: '90vw',
  alignItems: 'center',
  padding: '5vh',
  scrollSnapAlign: 'start',
}))

export default Slide
