/* Theming */
import { ThemeProvider } from 'styled-components'
import theme from './theme'

/* Components */
import FlexContainer from './Container'
import List from './List'
import Slide from './Slide'
import SlideHeader from './SlideHeader'
import Svg from './Svg'
import Title from './Title'

/* Images */
import { ReactComponent as VennDiagram } from './venn-diagram.svg'
import { ReactComponent as VersionControl } from './version-control.svg'
import { ReactComponent as Pipeline } from './pipeline.svg'
import { ReactComponent as IterativeModel } from './iterative-model.svg'
import { ReactComponent as WaterfallModel } from './waterfall-model.svg'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Slide>
          <FlexContainer>
            <Title>
              Why aren't <em>we</em> doing this?!
            </Title>
          </FlexContainer>
        </Slide>
        <Slide>
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
        </Slide>
        <Slide>
          <FlexContainer>
            <Svg image={VennDiagram} />
          </FlexContainer>
        </Slide>
        <Slide>
          <SlideHeader>Greener Grass…</SlideHeader>
          <FlexContainer>
            <img src="/assets/greener-grass.png" width="25%" />
            <List>
              <li>Version Control</li>
              <li>Modules and Functions</li>
              <li>Continuous Integration / Continuous Delivery</li>
              <li>Unit tests and Test Driven Development</li>
            </List>
          </FlexContainer>
        </Slide>

        <Slide>
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
          <SlideHeader>Atoms vs. Modules</SlideHeader>
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
            <div>
              <SlideHeader>Project Dashboard</SlideHeader>
              <List>
                <li>✅ BGF</li>
                <li>
                  ⚠️ Rettungswege
                  <br /> Zulassung im Einzelfall notwendig
                </li>
                <li>❌ Abstandsflächen </li>
                <li>
                  💡 Wohnungsschlüssel️
                  <br /> Typ A zu 15% unterschritten
                </li>
                <li>…</li>
              </List>
            </div>
          </FlexContainer>
        </Slide>
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
                by Tom Bartley
              </a>
            </FlexContainer>
            <List>
              <li>A network of federated digital models</li>
              <li>APIs</li>
              <li>Services not Products</li>
              <li>
                Unbundling means we can swap out parts we don't like and use
                something else
              </li>
            </List>
          </FlexContainer>
        </Slide>

        <Slide>
          <FlexContainer>
            <Title>
              Again, why <em>aren't</em> we doing this?!
            </Title>
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
              <li>As complexity increases</li>
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
              <li>
                Flexibel auf neue Erkenntnisse und Anforderungen reagieren.
              </li>
              <li>Harte und weiche Anforderungen Baurecht, Physik, Programm</li>
              <li>«Agile Project Management»</li>
            </List>
          </FlexContainer>
        </Slide>
        <Slide>
          <SlideHeader>Grasshopper, Rhino Compute, and Hops</SlideHeader>
          <FlexContainer direction="column">
            <img src="/assets/hops-overview.png" width="1000" />
            <List>
              <li>Headless Rhino, called over an Web Api</li>
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
              <li>Tries to do the same thing</li>
              <li>Mainly closed source</li>
            </List>
          </FlexContainer>
        </Slide>
        <Slide>
          <SlideHeader>Revit? Archicad?</SlideHeader>
          <FlexContainer>¯\_(ツ)_/¯</FlexContainer>
        </Slide>
        <Slide>
          <SlideHeader>What this could be…</SlideHeader>
          <List>
            <li>A Taxonomy</li>
            <li>An example project and pipeline</li>
            <li>A design automation service</li>
            <List>
              <li>Unit tests</li>
              <li>Artefact Creation</li>
            </List>
          </List>
          <div>
            <h3>Curiousnesses:</h3>
            <List>
              <li>
                Design ≠ Engineering!
                <br /> Good architecture is complex, contradictory,
                idiosyncratic.
                <br />
                Do we run danger of optimising out the humanity?
              </li>
              <li>How do tools affect the way we think.</li>
              <li>Design systems</li>
            </List>
          </div>
        </Slide>
      </ThemeProvider>
    </div>
  )
}

export default App
