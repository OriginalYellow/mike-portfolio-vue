const title = 'Michael Joseph, Developer'
const description = 'Michael Joseph\'s personal development portfolio and blog'
const siteName = 'Michael Joseph, Developer'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      {
        name: 'og:title',
        hid: 'og:title',
        content: title
      },
      {
        name: 'og:site_name',
        hid: 'og:site_name',
        content: siteName
      },
      {
        name: 'og:description',
        hid: 'og:description',
        content: description
      },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://michaeljoseph.dev' },
      { name: 'og:image', content: '/icon.png' },
      {
        name: 'apple-mobile-web-app-title',
        hid: 'apple-mobile-web-app-title',
        content: title
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/custom.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/fullpage', mode: 'client' },
    '~/plugins/anime.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-svg-loader',
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'default',
        breakpoints: {
          sm: 576,
          md: 768,
          lg: 1450,
          xl: Infinity
        }
      }
    ]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  // https://github.com/nuxt/now-builder/issues/44
  env: {
    FULLPAGE_KEY: process.env.FULLPAGE_KEY
  }
}
