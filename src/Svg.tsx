import styled from 'styled-components/macro'

const SvgContainer = styled.div<{
  height?: number
  width?: number
}>`
  & svg {
    height: ${(props) => (props.height ? `${props.height}px` : '100%')};
    width: ${(props) => (props.width ? `${props.width}px` : '100%')};
    & .fill-primary {
      fill: ${(props) => props.theme.colours.primary};
    }
    & .fill-secondary {
      fill: ${(props) => props.theme.colours.secondary};
    }
  }
`

interface Props {
  image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  width?: number
  height?: number
}

const Svg: React.FC<Props> = (props) => {
  const Image = props.image
  return (
    <SvgContainer {...props}>
      <Image />
    </SvgContainer>
  )
}

export default Svg
