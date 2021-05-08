// ** Customize config server and structure

export default {
  ssr: true, // mode: 'universal',
  target: 'static', // nuxt generate
  srcDir: 'src/',
  rootDir: './',
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
