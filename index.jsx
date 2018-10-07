import { h, app } from "hyperapp"
import picostyle from "picostyle"

const styled = picostyle(h)

const state = {
  timestamp: 0,
  name: "Burcak"
}

const actions = {
  update: ({ timestamp, delta }) => ({ timestamp, delta })
}

const view = ({ timestamp, delta }, actions) => {
  console.log('CALLING:::', timestamp, delta)

  return (
    <main>
      <h1>
        Hello!
      </h1>
      <div>
        timestamp: {timestamp}
      </div>
      <div>
        delta: {delta}
      </div>
    </main>
  )
}

const main = app(state, actions, view, document.body)

const FPS = 30
const INTERVAL_MS = 1000 / FPS
let current = performance.now()

const update = (timestamp) => {
  window.requestAnimationFrame(update)

  const delta = timestamp - current

  if (delta > INTERVAL_MS) {
    main.update({ timestamp, delta })
    current = timestamp
  }
}

window.requestAnimationFrame(update)