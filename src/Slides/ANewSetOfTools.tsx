import FlexContainer from '../Container'
import List from '../List'
import Slide from '../Slide'
import SlideHeader from '../SlideHeader'
import Svg from '../Svg'
import TestDashboard from '../TestDashboard'
import Title from '../Title'

import { ReactComponent as AWSLambda } from '../aws-lambda.svg'

const SlideANewSetOfTools = () => {
  return (
    <Slide>
      <SlideHeader>A new set of Tools</SlideHeader>
      Spanning from Simple to Complex
      <FlexContainer>
        <FlexContainer direction="column">
          Simple
          <div>
            <Svg image={AWSLambda} height={100} />
          </div>
          AWS Lambda
        </FlexContainer>
        …
        <FlexContainer direction="column">
          Some batteries included
          <img src="../assets/github-actions.png" width="400px" />
          Github Actions
        </FlexContainer>
        …
        <FlexContainer direction="column">
          Complex
          <img src="../assets/giraffe.png" width="400px" />
          (Authoring) Applications
        </FlexContainer>
      </FlexContainer>
      Unbundling functionality will happen gradually and at different scales:
      Augment workflows with simple functions and design automation modules,
      replace whole parts with full blown apps.
    </Slide>
  )
}

export default SlideANewSetOfTools
