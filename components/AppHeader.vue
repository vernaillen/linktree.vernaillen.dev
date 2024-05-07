<template>
  <UHeader>
    <template #logo>
      &nbsp;
    </template>
    <template #center>
      <div class="absolute top-0 left-0 right-0 mx-auto w-[100px]">
        <div
          aria-label="Homepage"
          class="cursor-pointer"
          @click="reloadNuxtApp({ path: '/', ttl: 1000 });"
        >
          <svg
            viewBox="0 0 754 276"
            width="100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              opacity="transparent"
            >
              <path
                class="fill-black dark:fill-primary-500"
                d="M0 0 H92 V184 H172 V0 H264 V184 H344 V0 H436 V276 H0 Z"
              />
              <path
                class="fill-primary-500 dark:fill-white"
                d="M490 0 H582 V184 H662 V0 H754 V276 H490 Z"
              />
            </g>
          </svg>
        </div>
      </div>
    </template>

    <template #right>
      <UColorModeButton
        size="xs"
        color="primary"
        variant="soft"
        class="hidden lg:flex"
      />
      <UButton
        size="xs"
        to="https://wa.me/32473344656"
        icon="i-mdi-whatsapp"
        variant="soft"
        target="_blank"
        aria-label="contact me on WhatsApp"
        class="ml-1 sm:ml-2"
      />
      <UButton
        size="xs"
        variant="soft"
        icon="i-mdi-github"
        to="https://github.com/vernaillen/vernaillen.dev/"
        aria-label="Wouter Vernaillen's GitHub"
        target="_blank"
        class="ml-1 sm:ml-2"
      />
    </template>
  </UHeader>
</template>
