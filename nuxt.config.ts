// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      bodyAttrs: {
        class: 'demo'
      },
      charset: 'utf-8',
      titleTemplate: '%s | RELAXLIKES - Just Relax Official',
      meta: [
        {
          name: 'author',
          content: 'RELAXLIKES Developed by PhyschicWinter9'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=5'
        },
        {
          name: 'description',
          content: 'RELAXLIKES - Just Relax Official'
        }
      ]
    }
  },
  modules: [
    'nuxt-icon'
  ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
})
