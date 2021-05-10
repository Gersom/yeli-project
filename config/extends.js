import Server from './server'
const resolve = require('path').resolve

export default {
  // Nuxt.js modules
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios',
  ],
  // Plugins to load before mounting the App
  plugins: [],

  // Nuxt.js dev-modules
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    ['@nuxtjs/svg'],
    ['@nuxtjs/router',
      {
        path: `${Server.srcDir}config/`,
        fileName: 'routes.js'
      }
    ]
  ],

  // variables, mixins, functions (et cetera)
  styleResources: {
    sass: [],
    scss: [],
    less: [],
    stylus: '~/assets/stylus/1_variables/*.styl'
  },

  /* Global CSS: https://go.nuxtjs.dev/config-css */
  css: [
    // 'toastr/build/toastr.min.css'
    '~/assets/stylus/3_dom/a.styl',
    '~/assets/stylus/3_dom/button.styl',
    '~/assets/stylus/3_dom/document.styl',
    '~/assets/stylus/3_dom/titles.styl',

    '~/assets/stylus/5_utilities/border-radius.styl',
    '~/assets/stylus/5_utilities/flex.styl',
    '~/assets/stylus/5_utilities/margin.styl',
    '~/assets/stylus/5_utilities/padding.styl',
    '~/assets/stylus/5_utilities/scroll-light.styl'
  ]
}
