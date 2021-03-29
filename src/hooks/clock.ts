import { createEffect, onCleanup } from "solid-js"
import paused from "../models/paused"
import time from "../models/time"

export const Clock = () => {
  createEffect(() =>  {
    const interval = !paused.get() ? setInterval(time.inc, 10) : undefined
    onCleanup(() => interval && clearInterval(interval))
  })
  return null
}