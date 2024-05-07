<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
  <UFooter>
    <template #center>
      <div class="prose dark:prose-invert items-center text-center mx-auto">
        <div class="text-xs pt-3">
          <p class="text-sm">
            built with <UIcon
              name="i-mdi-heart"
              class="bg-red-500 -mb-[2px] mx-1"
            />
            using <NuxtLink
              href="https://nuxt.com"
              target="_blank"
            >
              <UIcon
                class="-mb-[2px] mx-1 w-4 h-4"
                name="i-logos-nuxt-icon"
              /> Nuxt {{ config.public.nuxtVersion }}
            </NuxtLink>
          </p>
        </div>
        <div class="text-sm">
          Copyright © {{ new Date().getFullYear() }}.
          <NuxtLink
            href="https://vernaillen.dev"
            target="_blank"
          >
            Wouter Vernaillen
          </NuxtLink>
          /
          <NuxtLink
            href="https://harmonics.be"
            target="_blank"
          >
            Harmonics BV
          </NuxtLink>
        </div>
      </div>
    </template>
  </UFooter>
</template>
