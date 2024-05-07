<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.',
  ogImage: 'https://linktree.vernaillen.dev/social-card.png',
  twitterImage: 'https://linktree.vernaillen.dev/social-card.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <AppHeader />

  <UMain>
    <UContainer>
      <UPage>
        <UPageError :error="error" />
      </UPage>
    </UContainer>
  </UMain>

  <AppFooter />

  <UNotifications />
</template>
