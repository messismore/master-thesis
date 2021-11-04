/* Theming */
import { ThemeProvider } from 'styled-components'
import theme from './theme'

/* Slides */
import SlideCover from './Slides/Cover'
import SlideGreenerGrass from './Slides/GreenerGrass'
import SlideBartleyInternetOfConstruction from './Slides/BartleyInternetOfConstruction'
import SlideDavisAppSpecificity from './Slides/DavisAppSpecificity'
import SlideANewSetOfTools from './Slides/ANewSetOfTools'
import SlideAvenues from './Slides/Avenues'

/* Components */
import FlexContainer from './Container'
import List from './List'
import Slide from './Slide'
import SlideHeader from './SlideHeader'
import Svg from './Svg'
import TestDashboard from './TestDashboard'
import Title from './Title'

/* Images */
import { ReactComponent as VennDiagram } from './venn-diagram.svg'
import { ReactComponent as VersionControl } from './version-control.svg'
import { ReactComponent as Pipeline } from './pipeline.svg'
import { ReactComponent as IterativeModel } from './iterative-model.svg'
import { ReactComponent as WaterfallModel } from './waterfall-model.svg'

import ghUnitTestSuccess from './gh-unit-test-success'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <SlideCover />
        <SlideGreenerGrass />
        <SlideBartleyInternetOfConstruction />
        <SlideDavisAppSpecificity />
        <SlideANewSetOfTools />

        <SlideAvenues />

        <Slide>
          <SlideHeader>More</SlideHeader>
          <FlexContainer>
            <img src="/assets/pipeline.png" width="40%" />
            <div>
              <List>
                Build a pipeline, solve one or two pain points
                <li>Figma Connector or SVG Transport</li>
                <li>Build a test runner / engine for serverless functions</li>
                <li>Project Dashboard</li> with simple queries?
                <li>
                  Build a couple <em>Design Services</em> plugged into different
                  <br />
                  points along the design process:
                  <List>
                    <li>Room connectivity graph?</li>
                    <li>Escape routes?</li>
                    <li>A11y for architecture?</li>
                  </List>
                </li>
                <li>
                  Investigate interop: Spectle's schema is intentionally <br />
                  fluid. How connect apps to such data? <em>"Data Shaper"?</em>
                </li>
                <li>How to bundle up continuous integration?</li>
              </List>
            </div>
          </FlexContainer>
        </Slide>

        {/* <Slide>
          <SlideHeader>How to follow this talk</SlideHeader>
          <FlexContainer direction={'column'}>
            <div>
              I don't really know what I'm doing: My professional experience is
              limited. <br />
              But it meshes with what I hear.
              <List>
                <li>Do I make sense?</li>
                <li>What needs more depth?</li>
                <li>What needs less?</li>
                <li>What am I missing?</li>
              </List>
            </div>
          </FlexContainer>
        </Slide> */}

        {/* <Slide>
          <SlideHeader>Version Control</SlideHeader>
          <FlexContainer>
            <FlexContainer direction="column">
              <img src="/assets/why-version-control.png" width="80%" />
              <Svg image={VersionControl} width={500} />
            </FlexContainer>
            <List>
              <li>Collaboration: Branch and integrate changes</li>
              <li>
                Disposable Experimentation: Try stuff, use what works, throw
                away what doesn't
              </li>
              <li>Single source of truth</li>
              <li>Preserve history: know who did what (and why!)</li>
            </List>
          </FlexContainer>
        </Slide>

        <Slide>
          <SlideHeader>Modules vs. Atoms</SlideHeader>
          <FlexContainer>
            <img src="/assets/grasshopper-nodes.png" height="400" />

            <List>
              <li>Composed and composable</li>
              <li>Reusable</li>
              <li>Not tied to specific projects</li>
              <li>Can improve over time</li>
              <li>Versioned!</li>
            </List>
          </FlexContainer>
        </Slide>

        <Slide>
          <SlideHeader>CI / CD</SlideHeader>
          <FlexContainer>
            <Svg image={Pipeline} height={600} />
            <List>
              <li>Continuous Integration, Delivery / Deployment</li>
              <li>Automation pipelines</li>
              <li>
                Transform Data (Code, Assets, BIM-Models)
                <br /> into Artefacts (Software, Plans, Renderings,
                Documentation)
              </li>
            </List>
          </FlexContainer>
        </Slide>
        <Slide>
          <SlideHeader>Tests</SlideHeader>
          <FlexContainer>
            <img src="/assets/tests.png" width="60%" />
            <List>
              <li>Validate changes ("Regression Testing")</li>
              <li>Assess performance: Are we meeting our requirements? </li>
              <li>
                Scalable: Easy to set up, use as few or as
                <br />
                many as you like
              </li>
              <li>
                Test driven design: Define the tests first, <br />
                then design until they pass
              </li>
            </List>
          </FlexContainer>
        </Slide>
        <Slide>
          <FlexContainer direction="column">
            <TestDashboard unitTestSuccess={ghUnitTestSuccess} />
          </FlexContainer>
        </Slide>
        <Slide>
          <FlexContainer>
            <Title>How can we get there?</Title>
          </FlexContainer>
        </Slide>

        <Slide>
          <FlexContainer>
            <Title>Building Blocks of an Internet of Construction</Title>
          </FlexContainer>
        </Slide>
        <Slide>
          <SlideHeader>Grasshopper, Rhino Compute, and Hops</SlideHeader>
          <FlexContainer direction="column">
            <img src="/assets/hops-overview.png" width="1000" />
            <List>
              <li>Headless* Rhino, called over a Web Api</li>
              <li>Deployed on a local server on in the cloud</li>
              <li>Functions can be either Grasshopper scripts or code</li>
              <li>Can integrate with web apps!</li>
            </List>
          </FlexContainer>
        </Slide>
        <Slide>
          <SlideHeader>Speckle</SlideHeader>
          <FlexContainer>
            <img src="/assets/speckle.png" width="40%" />
            <List>
              <li>Data repository</li>
              <li>Connectors translate data between applications</li>
              <li>Version control</li>
              <li>Automation platform</li>
              <li>Wants to be a platform to build applications on</li>
              <li>Open Source!</li>
            </List>
          </FlexContainer>
        </Slide>
        <Slide>
          <SlideHeader>Hypar</SlideHeader>
          <FlexContainer>
            <img src="/assets/hypar.png" width="40%" />
            <List>
              <li>
                Compose Buildings from funcional modules <br />
                (think a façade module, a roofing module…)
              </li>
              <li>
                Surfaces an inherent problem in the balance
                <br /> between engineering and craft: <br />
                <em>«The Tyranny of the Default»</em>
              </li>
              <li>Mainly closed source</li>
            </List>
          </FlexContainer>
        </Slide>
        <Slide>
          <SlideHeader>Revit? Archicad?</SlideHeader>
          <FlexContainer>¯\_(ツ)_/¯</FlexContainer>
        </Slide>

        <Slide>
          <SlideHeader>A Project Dashboard?</SlideHeader>
          <FlexContainer>
            <FlexContainer direction={'column'}>
              <img src="/assets/dashboard.png" height={600} width={800} />
            </FlexContainer>
          </FlexContainer>
        </Slide>

        <Slide>
          <SlideHeader>Curiosities…</SlideHeader>
          <List>
            <li>A Taxonomy</li>
            <li>An example project and pipeline</li>
            <li>A design automation service</li>
            <List>
              <li>Unit tests</li>
              <li>Artefact Creation</li>
            </List>
          </List>
          { <div>
            <List>
              <li>
                Design ≠ Engineering!
                <br /> Good architecture is complex, contradictory,
                idiosyncratic.
                <br />
                Do we run danger of optimising out the humanity? <br />
                (see also:
                <em>The Tyranny of the Default</em>)
              </li>
              <li>How do tools affect the way we think?</li>
              <li>Design systems</li>
            </List>
          </div>
        </Slide> */}
        {/* <Slide>
          <SlideHeader>
            More Unstructured Interests, rambling thoughts:
          </SlideHeader>
          <List>
            <li>
              Orchestration: How to manage the parts of our Internet of
              Construction. Microservices?
            </li>
            <li>
              And adjacent to that: How can we make these things nimble and
              pluggable, so that small shops can use them and not only the
              juggernauts
            </li>
          </List>
        </Slide> */}
        {/*
        <Slide>
          <FlexContainer>
            <Svg image={VennDiagram} />
          </FlexContainer>
        </Slide>

        <Slide>
          <FlexContainer>
            <Title>So what's stopping us?</Title>
          </FlexContainer>
        </Slide>
        <Slide>
          <SlideHeader>Waterfall</SlideHeader>
          <FlexContainer>
            <FlexContainer direction={'column'}>
              <Svg image={WaterfallModel} height={500} />
              Waterfall
            </FlexContainer>
            <List>
              <li>Conventional approach</li>
              <li>Codified: Leistungsphasen</li>
              <li>
                Assumes clean interface between
                <br /> each step of the cascade
              </li>
              <li>Assumes an optimal solution at each interface</li>
              <li>
                High{' '}
                <a href="https://en.wikipedia.org/wiki/Path_dependence">
                  Path Dependence
                </a>
                :<br />
                Upstream changes are difficult / impossible
                <br />
                (Reacting to new insights / requirement changes)
              </li>
              <li>
                As complexity increases this approach
                <br /> produces worse results
              </li>
            </List>
          </FlexContainer>
        </Slide>
        <Slide>
          <SlideHeader>Iterative</SlideHeader>
          <FlexContainer>
            <FlexContainer direction={'column'}>
              <Svg image={IterativeModel} height={500} />
              Iterative
            </FlexContainer>
            <List>
              <li>React to new insights and requirements</li>
              <li>
                Hard and soft requirements building code, physics, programme
              </li>
              <li>«Agile Project Management»</li>
            </List>
          </FlexContainer>
        </Slide>

        <Slide>
          <SlideHeader>
            But we're already doing <em>X</em> in Revit!
          </SlideHeader>
          <FlexContainer>
            <FlexContainer direction={'column'}>
              <img src="/assets/macleamy.jpg" height={600} width={680} />
              <a href="https://www.danieldavis.com/macleamy/">
                The MacLeamy Curve should never be shown without linking to this
                article.
              </a>
            </FlexContainer>
          </FlexContainer>
        </Slide> */}
      </ThemeProvider>
    </div>
  )
}

export default App
