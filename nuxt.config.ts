// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
  ],
  app: {
    htmlAttrs: {
      lang: 'en'
    },
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },
})
