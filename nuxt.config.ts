// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/portfolio/'
  },

  devtools: { enabled: true },
  modules: ['@nuxt/content'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-10-20'
})