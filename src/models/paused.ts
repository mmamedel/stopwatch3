import { createSignal } from "solid-js"

const [paused, setPaused] = createSignal(true)

export default {
    get: paused,
    toggle: () => setPaused(!paused())
}