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
    // ['@nuxtjs/svg'],
    [
      'nuxt-stylus-resources-loader',
      [
        resolve(__dirname, '../src/assets/stylus/1-settings/*.styl'),
        resolve(__dirname, '../src/assets/stylus/4-elements/*.styl'),
        resolve(__dirname, '../src/assets/stylus/5-objects/*.styl'),
        resolve(__dirname, '../src/assets/stylus/7-utilities/*.styl')
      ]
    ]
  ]
}
