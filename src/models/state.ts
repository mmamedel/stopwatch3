import { createState } from 'solid-js'
import { timeToTimecode } from '../helpers/time'
import { inc, not } from 'ramda'
import { O } from 'ts-toolbelt'

const [_state, setState] = createState({
  time: 0,
  paused: true
})

export const state: O.Readonly<typeof _state, string, 'deep'> = _state

export const time = {
  inc: () => setState('time', inc),
  reset: () => setState('time', 0),
  label: () => timeToTimecode(_state.time)
}

export const paused = {
  toggle: () => setState('paused', not)
}
