import { createEffect } from "solid-js"
import paused from "../models/paused"
import time from "../models/time"

export const Shortcuts = () => {
  createEffect(() => {
    document.onkeydown = (e) => {
      if (e.code === 'Space') paused.toggle()
      if (e.code === 'Backspace' && paused.get()) time.reset()
    }
  })
  return null
}