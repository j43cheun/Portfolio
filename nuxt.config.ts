// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/portfolio/'
  },
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },

  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  devtools: { enabled: true },
  modules: ['@nuxt/content'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-10-20'
})