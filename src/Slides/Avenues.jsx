import FlexContainer from '../Container'
import List from '../List'
import Slide from '../Slide'
import SlideHeader from '../SlideHeader'
import Svg from '../Svg'
import TestDashboard from '../TestDashboard'
import Title from '../Title'

const SlideAvenues = () => {
  return (
    <Slide>
      <SlideHeader>I've got five months…</SlideHeader>
      <FlexContainer>
        <FlexContainer direction="column">
          <img src="./assets/dashboard.png" width="86%" />A Project Dashboard
        </FlexContainer>
        <FlexContainer direction="column">
          <img src="./assets/speckle-swarm.png" width="110%" />
          Speckle × Swarm
        </FlexContainer>
      </FlexContainer>
    </Slide>
  )
}

export default SlideAvenues
