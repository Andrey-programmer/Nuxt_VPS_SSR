const pkg = require('./package')


module.exports = {
  mode: 'universal',

  head: {
    // title: pkg.name,
    // Заменяем на ...
    title: 'SSR Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'keywords', name: 'keywords', content: 'js, javascritp, ssr, blog'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  loading: { color: '#409EFF' },


  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/theme/index.scss'
  ],

 
  plugins: [
    '@/plugins/globals',
    '@/plugins/axios'
  ],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  axios: {
    baseURL: 'http://spa-blog.ru:80'
  },

  env: {
    appName: 'SSR Blog'
  },

  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {
    }
  },

  workbox: {
    // Workbox options
  },

  meta: {
    // ...
  }
}
