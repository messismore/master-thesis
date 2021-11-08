import styled from 'styled-components/macro'

const TimeSlot = styled.ol((props) => ({
  fontFamily: props.theme.fonts.body,
  color: props.theme.colours.text,
  fontSize: props.theme.fontSizes[0],
  lineHeight: props.theme.lineHeights.body,
  '& li': {
    border: `solid 2px ${props.theme.colours.text}`,
    display: 'inline-block',
    listStyle: 'none',
    margin: '0',
    marginRight: '-2px',
    padding: '1em',
    textAlign: 'center',
  },
  '& li + li': { marginTop: '2em' },
}))

const Timeline: React.FC = () => {
  return (
    <TimeSlot>
      <li>
        Market Research <br />
        Prior Art <br />
        ▶️ 44 + 45
      </li>
      <li>
        1st Crit <br />
        46 + 47
      </li>
      <li>48 + 49</li>
      <li>
        MVP defined <br />
        50 + 51
      </li>
      <li>
        ⛄️
        <br />
        52
      </li>
      <li>1 + 2</li>
      <li>3 + 4</li>
      <li>
        2nd Crit <br />5 + 6
      </li>
      <li>7 + 8</li>
      <li>9 + 10</li>
      <li>11 + 12</li>
      <li>13 + 14</li>
      <li>15</li>
      <li>
        ⭐️
        <br />
        16
      </li>
    </TimeSlot>
  )
}

export default Timeline
