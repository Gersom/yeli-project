import Build from './config/build'
import Server from './config/server'
import Extends from './config/extends'
import Head from './src/heads/default'
import Generate from './config/generate'

export default {
  ...Server,
  ...Extends,

  head: { ...Head },
  build: { ...Build },
  generate: { ...Generate },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // toastr
    // 'toastr/build/toastr.min.css'
    '~/assets/stylus/main.styl'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true

}
