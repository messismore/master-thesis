import FlexContainer from '../Container'
import Slide from '../Slide'
import SlideHeader from '../SlideHeader'

const SlideDavisAppSpecifity = () => {
  return (
    <Slide>
      <SlideHeader>App Specificity</SlideHeader>
      Unbundling and …rebundling?
      <FlexContainer>
        <FlexContainer direction="column">
          <img src="/assets/davis-horizontal.webp" width="100%" />
          Horizontal
        </FlexContainer>
        <FlexContainer direction="column">
          <img src="/assets/davis-vertical.webp" width="100%" />
          Vertical
        </FlexContainer>
        <FlexContainer direction="column">
          <img src="/assets/vertical-ioc.png" width="150%" />
          "Pluggable"
        </FlexContainer>
      </FlexContainer>
      <a href="https://www.danieldavis.com/cads-boring-future/">
        Daniel Davis: CAD's Boring Future and Why it's Exciting
      </a>
    </Slide>
  )
}

export default SlideDavisAppSpecifity
