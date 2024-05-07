<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <ULandingSection
    v-if="page"
    :description="page.linktree.description"
    class="slide-enter-content"
  >
    <template #title>
      wouter <span class="text-primary-500 font-semibold">on the</span> net
    </template>
    <template #description>
      <UButton
        v-for="logo, index in page.linktree.logos"
        :key="index"
        :icon="logo.icon"
        :to="logo.url"
        :aria-label="logo.label"
        size="xs"
        variant="subtle"
        target="_blank"
        class="m-1"
      />
    </template>
    <UAccordion :items="page.linktree.links">
      <template #default="{ item, open, index }">
        <div
          class="bg-white rounded-lg mt-2 slide-enter "
          :style="'--enter-stage: ' + index"
          role="button"
        >
          <UButton
            color="gray"
            :block="true"
            :label="item.label"
            variant="soft"
            truncate
            class="relative"
            :ui="{
              color: { gray: { solid: 'ring-0' } },
              padding: { sm: 'py-3 pl-3 pr-7' }
            }"
          >
            <template #leading>
              <UIcon
                v-if="item.icon"
                :name="item.icon"
                class="mr-1 block dark:hidden"
                :class="item.iconClass"
              />
              <UIcon
                v-if="item.icon"
                :name="item.iconDark ? item.iconDark : item.icon"
                class="mr-1 hidden dark:block"
                :class="item.iconClass"
              />
              <NuxtImg
                v-if="item.image"
                :src="item.image"
                :alt="item.imageAlt ? item.imageAlt : item.label"
                :width="21"
                :height="20"
                format="webp"
                class="mr-1"
                :class="item.imageClass"
              />
            </template>
            <template #trailing>
              <UIcon
                name="i-heroicons-chevron-right-20-solid"
                class="w-5 h-5 absolute right-3 transform transition-transform duration-200"
                :class="[open && 'rotate-90']"
              />
            </template>
          </UButton>
        </div>
      </template>
      <template #item="{ item }">
        <div
          class="overflow-hidden z-40
          shadow-sm rounded-md
          bg-white bg-opacity-70 dark:bg-gray-800
          prose dark:prose-invert
          text-center"
        >
          <div class="overflow-hidden px-2 pt-5 pb-3 text-sm text-dark dark:text-gray-200">
            <component
              :is="item.svgComponent"
              v-if="item.svgComponent"
            />
            <div v-html="item.subTitle" />
            <div v-html="item.content" />
            <UButton
              :to="item.url"
              :label="item.urlDisplay ? item.urlDisplay : item.url"
              class="mt-2"
              variant="subtle"
              trailing-icon="i-uil-external-link-alt"
              target="_blank"
            >
              <template #trailing>
                <UIcon
                  name="i-uil-external-link-alt"
                  size="1em"
                />
              </template>
            </UButton>
          </div>
        </div>
      </template>
    </UAccordion>
  </ULandingSection>
</template>
