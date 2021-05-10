# Nuxt Config

> My legendary Nuxt.js project

## Build Setup

```js
// nuxt.config.json
build: {
  babel:{
    plugins: [
      ['@babel/plugin-proposal-private-methods', { loose: true }]
    ]
  }
}

// Install modules
yarn add --dev @nuxtjs/router
yarn add -D pug pug-plain-loader

// dependenci 
"stylus-loader": "^3.0.2"
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
