import FlexContainer from '../Container'
import List from '../List'
import Slide from '../Slide'
import SlideHeader from '../SlideHeader'

const SlideBartleyInternetOfConstruction = () => {
  return (
    <Slide>
      <SlideHeader>The Internet of Construction</SlideHeader>
      "The Future of Revit is an API"
      <FlexContainer>
        <FlexContainer direction={'column'}>
          <img
            src="/assets/internet-of-construction.png"
            height={600}
            width={680}
          />
          <a href="https://tom-bartley.medium.com/towards-an-internet-of-construction-6ab9e211c241">
            Tom Bartley: Towards and Internet of Construction
          </a>
        </FlexContainer>
        <FlexContainer direction="column">
          <div>
            Status quo: Network of federated digital models, synced up by hand.
            BIM fails to be the <em>One True Model</em>.
          </div>
          <div>
            Paradigm shift:
            <List>
              <li>APIs</li>
              <li>Services not Products</li>
              <li>
                Unbundling means we can swap out parts we don't like and use
                something else
              </li>
            </List>
          </div>
        </FlexContainer>
      </FlexContainer>
    </Slide>
  )
}

export default SlideBartleyInternetOfConstruction
