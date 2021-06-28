/* Theming */
import { ThemeProvider } from 'styled-components'
import theme from './theme'

/* Components */
import Slide from './Slide'
import Svg from './Svg'

/* Images */
import { ReactComponent as Logo } from './logo.svg'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Slide>
          <Svg image={Logo} />
          <ul>
            <li>Okay, so what is it that I want to talk about / work on</li>
            <li>Unit tests</li>
            <li>Single Source of truth</li>
            <li>Version Control</li>
            <li>What other Design automation feature are interesting?</li>
          </ul>
        </Slide>
        <Slide>
          <Svg image={Logo} />
          <ul>
            <li>Unit tests</li>
            <li>Okay, we're getting there…</li>
            <li>Finally, someone let me out of my cage</li>
          </ul>
        </Slide>
        <Slide>
          <Svg image={Logo} />
        </Slide>
        <Slide>
          <Svg image={Logo} />
        </Slide>
        <Slide>
          <Svg image={Logo} />
        </Slide>
        <Slide>
          <Svg image={Logo} />
        </Slide>
        <Slide>
          <Svg image={Logo} />
        </Slide>
        <Slide>
          <Svg image={Logo} />
        </Slide>
        <Slide>
          <Svg image={Logo} />
        </Slide>
        <Slide>
          <Svg image={Logo} />
        </Slide>
        <Slide>
          <Svg image={Logo} />
        </Slide>
        <Slide>
          <Svg image={Logo} />
        </Slide>
        <Slide>
          <Svg image={Logo} />
        </Slide>
        <Slide>
          <Svg image={Logo} />
        </Slide>
      </ThemeProvider>
    </div>
  )
}

export default App
