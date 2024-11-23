// https://nuxt.com/docs/api/configuration/nuxt-config
// sudo adduser sl vboxsf
// @ts-ignore
//pm2 start ecosystem.config.cjs --only nuxt-prod
//pm2 save
//pm2 startup
export default defineNuxtConfig({
  routeRules: {
    "/sitemap": { prerender: true },
  },
  colorMode: {
    preference: 'light'
  },
  //builder: 'webpack',
//  extends: ['nuxt-modal'],
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        { innerHTML:`   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(1071644, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true,
        ecommerce:"dataLayer"
   });
` },
        { src: 'https://api-maps.yandex.ru/v3/?apikey=80f1ab75-f93f-476a-ab4c-4f8de2496f76&lang=ru_RU' },
        { src: '/js/dhtmlx/codebase/dhtmlx.js' }
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
      NITRO_PORT: 3010,
      port: 3010,
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
    NITRO_PORT: 3010,
    port:3010,
    experimental: {
      asyncContext: false,
      websocket: true,
      tasks: true,
      //inlineRouteRules: true
    },
    prerender: {
      //crawlLinks: true,
      //routes: ["/sitemap"],
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
    '@/assets/css/terrace/dhtmlx.css',    
    '@/assets/scss/main.scss',
  ],
  modules: ['nuxt-viewport', //'@sidebase/nuxt-auth',
  '@nuxt/ui'],
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