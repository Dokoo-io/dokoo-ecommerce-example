export default {
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dokoo-blog-example',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/snipcart'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@dokoo/nuxt'
  ],
  snipcart: {
    // Options available
    // version: /* not required default value is v3.0.23 */,
    key: 'YThjYWM4MGQtYTk5My00MTg5LWFhYzEtNGYxZTkxZDBlZTIwNjM3NTI4MDczMzE5MDcxMzQw', // /* required https://app.snipcart.com/dashboard/account/credentials */,
    attributes: [
      ['data-config-modal-style', 'side'],
      ['data-currency', 'eur']
    ]
    // locales: {} /* not required */
  },
  dokoo: {
    clients: {
      myCookingBlog: {
        spaceId: '19c56dd2-f395-48d1-8f18-f41e38e2a31c',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ5ZWxsYXctY21zIiwianRpIjoiMzI4YWM0MGUtMjlmMy00YTViLWIxMTQtOTIzYWNjMTYxYzQzIiwic3ViIjoidTI4UFZTQ0ZwME45dkt2SjQzMnlLSHd4WUVFMiIsImlhdCI6MTYzNDAyOTUwNn0.1ZFsgRMiufUA7V8J3Vn4kSYwPaHGrwnVT8oqlEUbVhg'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
