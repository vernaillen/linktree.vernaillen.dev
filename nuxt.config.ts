// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/ui', '@nuxt/fonts', '@nuxt/image'],
  ui: {
    icons: ['heroicons', 'simple-icons', 'mdi', 'logos', 'game-icons', 'arcticons', 'uil']
  },
  devtools: {
    enabled: true
  },
  typescript: {
    strict: true
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    },
    checker: {
      lintOnStart: true,
      fix: true
    }
  }
})
