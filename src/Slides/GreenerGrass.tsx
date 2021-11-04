import FlexContainer from '../Container'
import List from '../List'
import Slide from '../Slide'
import SlideHeader from '../SlideHeader'

const GreenerGrass = () => {
  return (
    <Slide>
      <SlideHeader>"Why aren't we doing this?"</SlideHeader>
      <FlexContainer>
        <img src="/assets/greener-grass.png" width="25%" />
        <div>
          Managing Complexity in Software Development
          <List>
            <li>Version Control</li>
            <li>Functionality Modules</li>
            <li>Continuous Integration / Continuous Delivery</li>
            <li>Unit tests and Test Driven Development</li>
          </List>
        </div>
      </FlexContainer>
    </Slide>
  )
}

export default GreenerGrass
