import styled from 'styled-components/macro'

interface Props {
  direction?: 'row' | 'column'
}

const FlexContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`

export default FlexContainer
