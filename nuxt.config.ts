// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
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
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
});
