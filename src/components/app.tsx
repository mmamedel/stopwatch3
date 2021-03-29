import { css } from 'solid-styled-components'
import time from '../models/time'
import paused from '../models/paused'
import { Shortcuts } from '../hooks/shortcuts'
import { Clock } from '../hooks/clock'

//#region Styles
const containerCss = css({
  fontFamily: 'Arial, Helvetica, sans-serif',
  textAlign: 'center',
})

const timeCodeCss = css({
  fontSize: '16vw',
  fontWeight: 'bold',
})
const buttonSize = 20
const buttonCss = css({
  width: `${buttonSize}vw`,
  height: `${buttonSize}vw`,
  borderRadius: `${buttonSize / 2}vw`,
  fontSize: `${buttonSize / 5}vw,`
})
const playCss = css({
  background: 'green',
})
//#endregion

export const App = () => (
  <div className={containerCss}>
    <Shortcuts />
    <Clock />
    <div className={timeCodeCss}>{time.label()}</div>
    <button className={buttonCss} onClick={time.reset} disabled={!paused.get()}>
      Reset
    </button>
    <button className={`${buttonCss} ${playCss}`} onClick={paused.toggle}>
      {paused.get() ? 'Start' : 'Pause'}
    </button>
  </div>
)