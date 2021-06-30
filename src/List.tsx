import styled from 'styled-components/macro'

const List = styled.ul((props) => ({
  fontFamily: props.theme.fonts.body,
  color: props.theme.colours.text,
  fontSize: props.theme.fontSizes[1],
  lineHeight: props.theme.lineHeights.body,
  '& li::marker': {
    fontSize: props.theme.fontSizes[0],
  },
  '& > li + li': {
    marginTop: '1rem',
  },
}))

export default List
