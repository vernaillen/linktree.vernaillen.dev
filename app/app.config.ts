export default defineAppConfig({
  ui: {
    primary: 'vernaillen',
    gray: 'masala',
    variables: {
      light: {
        background: '245 245 245'
      },
      dark: {
        background: '12 12 13'
      }
    },
    header: {
      center: 'flex items-start'
    },
    container: {
      constrained: 'max-w-xl'
    },
    button: {
      base: 'border-none',
      variant: {
        subtle: 'text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-transparent dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400'
      },
      color: {
        gray: {
          soft: 'shadow-sm text-gray-700 dark:text-gray-200 bg-white hover:bg-primary-300 hover:bg-opacity-40 disabled:bg-gray-50 dark:bg-gray-700 dark:hover:bg-primary-900 dark:disabled:bg-gray-600'
        }
      }
    },
    landing: {
      section: {
        wrapper: 'py-6 sm:py-8',
        container: 'gap-6 sm:gap-y-6',
        title: 'lg:text-4xl'
      }
    },
    accordion: {
      item: {
        padding: 'pt-0 -mt-2 pb-3'
      }
    }
  }
})
