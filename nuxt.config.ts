// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image'],
  css: ['/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  typescript: {
    strict: true,
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Random Profiles',
    },
  },
  image: {
    domains: ['testingbot.com', 'i.pravatar.cc'],
  },
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
});
