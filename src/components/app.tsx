import { css, styled } from 'solid-styled-components'
import { Shortcuts } from '../hooks/shortcuts'
import { Clock } from '../hooks/clock'
import { state, time, paused } from '../models/state'

//#region Styles
const containerCss = css({
  fontFamily: 'Arial, Helvetica, sans-serif',
  textAlign: 'center'
})
const timeCodeCss = css({
  fontSize: '16vw',
  fontWeight: 'bold'
})
const buttonSize = 20
const buttonCss = css({
  width: `${buttonSize}vw`,
  height: `${buttonSize}vw`,
  borderRadius: `${buttonSize / 2}vw`,
  fontSize: `${buttonSize / 5}vw`
})
const PlayButton = styled('button')<{ paused: boolean }>((props) => ({
  background: props.paused ? 'green' : 'yellow'
}))
//#endregion

export const App = () => (
  <div className={containerCss}>
    <Shortcuts />
    <Clock />
    <div className={timeCodeCss}>{time.label()}</div>
    <button className={buttonCss} onClick={time.reset} disabled={!state.paused}>
      Reset
    </button>
    <PlayButton
      className={buttonCss}
      paused={state.paused}
      onClick={paused.toggle}
    >
      {state.paused ? 'Start' : 'Pause'}
    </PlayButton>
  </div>
)
