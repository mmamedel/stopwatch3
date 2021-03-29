import { createEffect } from 'solid-js'
import { state, paused, time } from '../models/state'

export const Shortcuts = () => {
  createEffect(() => {
    document.onkeydown = (e) => {
      if (e.code === 'Space') paused.toggle()
      if (e.code === 'Backspace' && state.paused) time.reset()
    }
  })
  return null
}
