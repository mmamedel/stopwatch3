import { createSignal } from "solid-js"
import { timeToTimecode } from "../helpers/time"

const [time, setTime] = createSignal(0)

export default {
  inc: () => setTime(time() + 1),
  reset: () => setTime(0),
  label: () => timeToTimecode(time())
}