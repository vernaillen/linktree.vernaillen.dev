import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        white: '#FFFFFF',
        light: '#f2f2f2',
        black: '#0c0c0d',
        dark: '#333333',
        vernaillen: {
          DEFAULT: '#9c8e1b',
          50: '#faf9f0',
          100: '#f5f3e1',
          200: '#e6e2b5',
          300: '#d6d090',
          400: '#baaf4e',
          500: '#9c8e1b',
          600: '#8c7815',
          700: '#755d0f',
          800: '#5e4509',
          900: '#452e06',
          950: '#2e1b02',
        },
        masala: {
          DEFAULT: '#3c3c3c',
          50: '#f5f5f5',
          100: '#ebebeb',
          200: '#cfcfcf',
          300: '#b3b3b3',
          400: '#666666',
          500: '#3c3c3c',
          600: '#383232',
          700: '#2e2222',
          800: '#241515',
          900: '#1c0d0d',
          950: '#120505'
        }
      }
    }
  }
}
