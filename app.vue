<script setup lang="ts">
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
  ogImage: 'https://linktree.vernaillen.dev/social-card.png',
  twitterImage: 'https://linktree.vernaillen.dev/social-card.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <AppHeader />
  <NuxtPage />
  <AppFooter />
  <UNotifications />
</template>
