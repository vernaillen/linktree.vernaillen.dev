import { defineConfig } from 'unlighthouse'

export default defineConfig({
  site: 'linktree.vernaillen.dev',
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
