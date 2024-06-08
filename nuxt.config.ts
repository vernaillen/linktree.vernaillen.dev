import nuxtPkg from 'nuxt/package.json'

export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxthq/studio',
    '@nuxtjs/plausible',
    'nuxt-time'
  ],
  ui: {
    icons: ['heroicons', 'simple-icons', 'mdi', 'logos', 'game-icons', 'arcticons', 'uil']
  },
  colorMode: {
    preference: 'dark'
  },
  runtimeConfig: {
    public: {
      nuxtVersion: nuxtPkg.version
    }
  },
  devtools: {
    enabled: true
  },
  typescript: {
    strict: true
  },
  image: {
    provider: 'twicpics',
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/linktree/'
    }
  },
  plausible: {
    apiHost: 'https://links.vernaillen.dev/plio'
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
