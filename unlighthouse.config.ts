import { defineConfig } from 'unlighthouse'

export default defineConfig({
  site: 'links.vernaillen.dev',
  scanner: {
    samples: 3,
    device: 'mobile'
    // throttle: true,
  },
  chrome: {
    useSystem: false
  },
  debug: true
})
