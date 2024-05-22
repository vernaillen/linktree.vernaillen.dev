<script setup lang="ts">
useHead({
  title: 'wouter on the net: the links',
  meta: [
    { name: 'description', content: 'Wouter Vernaillen: Ecstatic Dance DJ, Trance Dance facilitator, Freelance Java/JS Developer, Forever learning...' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    },
    {
      charset: 'utf-8'
    }
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

if (import.meta.client) {
  const hostname = window.location.hostname
  if (
    hostname !== 'linktree.vernaillen.dev'
    && hostname !== 'localhost'
    && hostname !== '127.0.0.1'
    && !hostname.startsWith('10.0.2.')
    && !hostname.includes('netlify.app')
  ) { window.location.href = 'linktree.vernaillen.dev' }
}
</script>

<template>
  <AppHeader />
  <NuxtPage />
  <AppFooter />
  <UNotifications />
</template>

<style>
@keyframes slide-enter {
  0% {
    @apply opacity-5 blur-sm;
  }
  to {
    @apply opacity-100;
  }
}
@media (prefers-reduced-motion:no-preference) {
  :not(.no-sliding) .slide-enter-content :not(.no-sliding) [slide-enter],
  :not(.no-sliding) .slide-enter-content :not(.no-sliding) .slide-enter {
    --enter-stage: 0;
    --enter-step: 60ms;
    --enter-initial: 0ms;
    animation: slide-enter 0.2s both 0.2s;
    animation-delay: calc(var(--enter-initial) + var(--enter-stage) * var(--enter-step));
  }
}
</style>
