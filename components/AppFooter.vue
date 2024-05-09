<script setup lang="ts">
import type { CommitResponse } from '~/types/github'

const config = useRuntimeConfig()

const apiUrl = computed(() => 'https://api.github.com/repos/vernaillen/linktree.vernaillen.dev/commits')
const { data: commits } = useLazyAsyncData<CommitResponse[]>('commits', () =>
  $fetch(apiUrl.value)
)
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
                class="-mb-[2px] mx-1 w-4 h-3"
                name="i-logos-nuxt-icon"
              /> Nuxt {{ config.public.nuxtVersion }}
            </NuxtLink>
          </p>
          <p v-if="commits && commits[0]">
            last updated:
            <NuxtLink
              :href="commits[0].html_url"
              target="_blank"
            >
              <NuxtTime
                :datetime="commits[0].commit.committer.date"
                month="long"
                day="numeric"
                year="numeric"
              />
              <UIcon
                name="i-mdi-github"
                class="-mb-[1px] ml-1"
              />
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
