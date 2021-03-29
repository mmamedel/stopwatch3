import { createEffect, onCleanup } from 'solid-js'
import { state, time } from '../models/state'

export const Clock = () => {
  createEffect(() => {
    const interval = !state.paused ? setInterval(time.inc, 10) : undefined
    onCleanup(() => interval && clearInterval(interval))
  })
  return null
}
