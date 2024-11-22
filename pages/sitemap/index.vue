<script setup>
import url from '/components/ui/url'
    definePageMeta({
        layout: 'empty',
    });

    const route = useRoute()
    const nuxtApp = useNuxtApp()
    let outt=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">`
    nuxtApp.$router.options.routes.forEach(item=>{
        if(item.path.indexOf(':')==-1)
        outt +='<url><loc>https://rent21.ru'+item.path+'</loc></url>'
        //console.log(item)
    })
    const { $rent21 } = useNuxtApp()
    $rent21().underground.fromName().forEach(item=>{
        outt +='<url><loc>https://rent21.ru/arenda-ofisa/metro-'+item.latin.toLowerCase()+'</loc></url>'
        outt +='<url><loc>https://rent21.ru/arenda-sklada/metro-'+item.latin.toLowerCase()+'</loc></url>'
        outt +='<url><loc>https://rent21.ru/arenda-magazina/metro-'+item.latin.toLowerCase()+'</loc></url>'
        

    })
    outt +=`</urlset>`
    
</script>
<template>

        {{outt }}

    
</template>