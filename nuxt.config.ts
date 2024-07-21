// https://nuxt.com/docs/api/configuration/nuxt-config
// sudo adduser sl vboxsf
// @ts-ignore
//pm2 start ecosystem.config.cjs --only nuxt-prod
//pm2 save
//pm2 startup
export default defineNuxtConfig({
  colorMode: {
    preference: 'light'
  },
  //builder: 'webpack',
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
          
      ],
      link: [
      ],
      // please note that this is an area that is likely to change
      style: [
      ],
      noscript: [
      ]
    }
  },
  runtimeConfig: {
    public: {
      // @ts-ignore
      HOSTNAME: process.env.HOSTNAME, // this is public 
    }
},


  devtools: { enabled: true },
  // @ts-ignore
  ssr : true,
  // @ts-ignore
  target: 'server',
  publicRuntimeConfig: {
    axios: {
      // @ts-ignore
      baseURL: process.env.BASE_URL,
    },
  },
  auth: {
    //origin: process.env.ORIGIN,
    enableGlobalAppMiddleware: false,
    //origin: 'https://залив-лимон.рф',
    baseURL:'https://залив-лимон.рф/api/auth/',
    globalAppMiddleware: {
      isEnabled: true
    },    
    addDefaultCallbackUrl: true,
    provider: {
      type: 'authjs'
    }
  },
  features: {
    inlineStyles: true,
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
    server: {
      // Nuxt launches Vite in middleware mode (port 3000), as well as the HMR server (port 24678).
      // The browser will reject requests from localhost:3000 to the HMR server, due to CORS.
      // Because of this, Vite by default adds "Access-Control-Allow-Origin": "*" header.
      // This is problematic, because fetch calls with credentials: 'include' will get rejected when
      // the origin is not explicitly allowed. Because of this, we need to manually define the origin.
      cors: {
        origin: '*',
      },
    },

  },
// @ts-ignore
  devServer: {
    host: '0.0.0.0',
    port: 3010
  },
  experimental: {
    asyncContext: false,
    emitRouteChunkError:'automatic'

  },  
  nitro: {
    experimental: {
      asyncContext: false,
      websocket: true,
      tasks: true,

    },
  },
  pages: true,
  components: {
    global: true,
    dirs: ['~/components','~/node_modules/v-calendar/dist/types/src']
  },
// @ts-ignore
  plugins: [
    
   // {src: '~/plugins/chart.client.ts', mode: 'client'},
    
  ],
  css: [
    '@/assets/scss/main.scss',
  ],
  modules: [
    '@nuxt/ui',
    'nuxt-viewport'
    //'@sidebase/nuxt-auth',
  ],
  build: {
    cssCodeSplit: false,
    extractCSS: false 
 },
 webpack: {
  extractCSS: true,
   optimization: {
     splitChunks: {
       cacheGroups: {
         styles: {
           name: 'styles',
           test: /\.(css|vue)$/,
           chunks: 'all',
           enforce: true
         }
       }
     }
   }
 } 

})
