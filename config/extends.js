import Server from './server'
const resolve = require('path').resolve

export default {
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    ['@nuxtjs/svg'],
    [
      '@nuxtjs/router',
      {
        path: `${Server.srcDir}config/`,
        fileName: 'routes.js'
      }
    ]
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios',
  ]
}
