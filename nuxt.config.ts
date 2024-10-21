// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/portfolio/'
  },

  css: ['~/assets/css/main.css'],

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