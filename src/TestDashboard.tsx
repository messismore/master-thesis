import styled from 'styled-components/macro'

import FlexContainer from './Container'

interface Props {
  unitTestSuccess: boolean
}
const BoardContainer = styled.div`
  & td {
    padding: 0.5em 2em 0 0;
  }
  & h3 {
    margin: 0 0 0.25em 0;
  }
  & .icon {
    font-size: 2em;
  }
`

const TestDashboard: React.FC<Props> = (props) => (
  <BoardContainer>
    <div>
      <h2>Project Dashboard</h2>
      <table>
        <tr>
          <td className="icon">✅</td>
          <td>
            <h3>BGF</h3>
          </td>
        </tr>
        <tr>
          <td className="icon">⚠️</td>
          <td>
            <h3>Rettungswege</h3>
            Zulassung im Einzelfall notwendig
          </td>
        </tr>
        <tr>
          <td className="icon">{props.unitTestSuccess ? '✅' : '❌'}</td>
          <td>
            <h3>Abstandsflächen</h3>
          </td>
        </tr>
        <tr>
          <td className="icon">💡</td>
          <td>
            <h3>Wohnungsschlüssel️</h3>
            Typ A zu 15% unterschritten
          </td>
        </tr>
        <tr>
          <td></td>
          <td>…</td>
        </tr>
      </table>
    </div>
  </BoardContainer>
)

export default TestDashboard
