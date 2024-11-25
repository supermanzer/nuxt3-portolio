// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  build: {
    transpile: ['vuetify'],
  },

  devtools: { enabled: true },

  runtimeConfig: {
    graphqlHost: process.env.GQL_HOST,
    tokenName: process.env.GQL_GITHUB_TOKEN_NAME,
    tokenValue: process.env.GQL_GITHUB_TOKEN
  },

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-icon',
    '@nuxt/eslint',
    // 'nuxt-graphql-client',
    // '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error some sort of something or other
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],


  content: {
    // Nuxt content configuration options
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: {
        // Default theme (same as single string)
        // default: 'material-ocean-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        default: 'monokai'
      },
      preload: ['js', 'css', 'python', 'bash', 'vue', 'rust']
    },
    markdown: {
      anchorLinks: false
    }
  },



  icon: {
    // NuxtIcon configuration options: 
    // https://nuxt.com/modules/icon
    serverBundle: {
      collections: ['uil', 'mdi']
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  compatibilityDate: '2024-08-18'
})