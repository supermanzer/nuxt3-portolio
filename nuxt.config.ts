// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    pageTransition: {name: 'page', mode: 'out-in'}
  },

  build: {
    transpile: ['vuetify'],
  },

  devtools: { enabled: true },

  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-icon',
    '@nuxt/eslint'
  ],

  content: {
    // Nuxt content configuration options
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: 'material-theme-ocean',
      preload: ['js', 'css', 'python', 'bash', 'vue']
    },
    markdown: {
      anchorLinks: false
    }
  },

  image: {
    // NuxtImage configuration options
    // https://image.nuxt.com/get-started/configuration
  },

  icon: {
    // NuxtIcon configuration options: 
    // https://nuxt.com/modules/icon
    serverBundle: {
      collections: ['uil', 'mdi']
    }
  },
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true, 
      useIconCDN: true,

      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true,
      useVuetifyLabs: true, 
    }
  },

  compatibilityDate: '2024-08-18'
})