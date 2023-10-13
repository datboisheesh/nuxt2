// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwind.css","@vite-pwa/nuxt"],

  pwa:{
    manifest:{
      name : "smkcoding",
      short_name :"smkcoding",
      theme_color :"#fff",
      background_color:"#fff",
      display:"standalone",
      orientation:"portrait",
      scope:"/",
      strart_url:"/",
      icons: [
        {
          src:"images/icons/icon-96x96.png",
          sizes:"96x96",
          
        }
      ]
    }
  }
})
