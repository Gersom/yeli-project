export default {
  babel: {
    plugins: [
      ['@babel/plugin-proposal-private-methods', { loose: true }]
    ]
  },

  extractCSS: process.env.NODE_ENV === 'production',
  publicPath: process.env.NODE_ENV === 'development' ? '/_nuxt/' : '/',
  filenames: {
    // [path][contenthash][name].[ext]
    app: ({ isDev }) => isDev ? '[name].js' : 'js/[name].js',
    chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[name].js',
    css: ({ isDev }) => isDev ? '[name].css' : 'css/[name].css',
    img: ({ isDev }) => isDev ? '[name].[ext]' : 'img/[name].[ext]'
  },

  /*
  ** You can extend webpack config here
  */
  extend (config, ctx) {
  }
}
