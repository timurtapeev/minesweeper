// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'vue-final-modal/style.css'],
  modules: ["@pinia/nuxt", '@vueform/nuxt'],
})