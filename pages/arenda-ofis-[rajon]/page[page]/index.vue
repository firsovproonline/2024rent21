<script setup>
import findLinc from '/components/contents/find/linc/tip'
import callPromo from '/components/contents/callPromo'
import largeItem from '/components/contents/dbItem/im_object/large/index.vue'

useHead({
    title: 'Аренда офиса в Москве От Собственника и Без Комиссии, Аренда офисов и помещений по всей Москве !.',
    meta: [
        { name: 'keywords', content: 'аренда офиса, аренда офисов, в москве, от собственника, без комиссии, снять офис, снять помещение, аренда помещения.' },
        { name: 'description', content: `Аренда офисов и помещений От Собственников по всей Москве БЕЗ КОМИССИИ! Помогаем снять офис и помещения БЕЗ КОМИССИЙ!.` }
    ]
})

    const route = useRoute()
    definePageMeta({
        layout: 'onecol',
    });
    let okrug = 'Центральный'
    useHead({
        title: 'Аренда офисов в Москве ЦАО, Снять офис в ЦАО .',
        meta: [
            { name: 'keywords', content: 'Аренда офисов в Москве ЦАО  Снять офис в ЦАО .' },
            { name: 'description', content: `Аренда офисов в Москве ЦАО  Снять офис в ЦАО .` }
        ]
    })    
    if(route.params.rajon == 'uvao'){
        okrug = 'Юго-Восточный'
        useHead({
            title: 'Аренда офисов в Москве ЮВАО  Снять офис в ЮВАО.',
            meta: [
                { name: 'keywords', content: 'Аренда офисов в Москве ЮВАО  Снять офис в ЮВАО.' },
                { name: 'description', content: `Аренда офисов в Москве ЮВАО  Снять офис в ЮВАО.` }
            ]
        })    
    } 
    if(route.params.rajon == 'vao') {
        okrug = 'Восточный'
        useHead({
            title: 'Аренда офисов в Москве ВАО  Снять офис в ВАО.',
            meta: [
                { name: 'keywords', content: 'Аренда офисов в Москве ВАО  Снять офис в ВАО.' },
                { name: 'description', content: `Аренда офисов в Москве ВАО  Снять офис в ВАО.` }
            ]
        })    
    }
    if(route.params.rajon == 'svao') {
        okrug = 'Северо-Восточный'
        useHead({
            title: 'Аренда офисов в Москве СВАО  Снять офис в СВАО.',
            meta: [
                { name: 'keywords', content: 'Аренда офисов в Москве СВАО  Снять офис в СВАО.' },
                { name: 'description', content: `Аренда офисов в Москве СВАО  Снять офис в СВАО.` }
            ]
        })    
    }
    if(route.params.rajon == 'sao') {
        okrug = 'Северный'
        useHead({
            title: 'Аренда офисов в Москве САО  Снять офис в САО.',
            meta: [
                { name: 'keywords', content: 'Аренда офисов в Москве САО  Снять офис в САО.' },
                { name: 'description', content: `Аренда офисов в Москве САО  Снять офис в САО.` }
            ]
        })    
    }
    if(route.params.rajon == 'szao') {
        okrug = 'Северо-Западный'
        useHead({
            title: 'Аренда офисов в Москве СЗАО  Снять офис в СЗАО.',
            meta: [
                { name: 'keywords', content: 'Аренда офисов в Москве СЗАО  Снять офис в СЗАО.' },
                { name: 'description', content: `Аренда офисов в Москве СЗАО  Снять офис в СЗАО.` }
            ]
        })    
    }
    if(route.params.rajon == 'zao') {
        okrug = 'Западный'
        const t = {
            title: 'Аренда офисов в Москве ЗАО Снять офис в ЗАО.',
            meta: [
                { name: 'keywords', content: 'Аренда офисов в Москве ЗАО  Снять офис в ЗАО.' },
                { name: 'description', content: `Аренда офисов в Москве ЗАО  Снять офис в ЗАО.` }
            ]
        }
        useHead(t)
    }
    if(route.params.rajon == 'uzao') {
        okrug = 'Юго-Западный'
        useHead({
            title: 'Аренда офисов в Москве ЮЗАО  Снять офис в ЮЗАО.',
            meta: [
                { name: 'keywords', content: 'Аренда офисов в Москве ЮЗАО  Снять офис в ЮЗАО.' },
                { name: 'description', content: `Аренда офисов в Москве ЮЗАО  Снять офис в ЮЗАО.` }
            ]
        })    
    }
    if(route.params.rajon == 'uao') {
        okrug = 'Южный'
        useHead({
            title: 'Аренда офисов в Москве ЮАО  Снять офис в ЮАО.',
            meta: [
                { name: 'keywords', content: 'Аренда офисов в Москве ЮАО  Снять офис в ЮАО.' },
                { name: 'description', content: `Аренда офисов в Москве ЮАО  Снять офис в ЮАО.` }
            ]
        })    
    }
    
    const page = ref(1)
    page.value = route.params.page*1
    const rowsGet = ref({})
    const nextUrl = '/arenda-ofis-'+route.params.rajon
    const findQuery = {
        page: page.value,
        perPage: 10,
        TIP: 'Офис',
        OPP: 'Аренда',
        OKRUG: okrug
    }
    rowsGet.value = await $fetch( `/api/im_object`, {
      method: 'GET',
      params: findQuery
    })
    const total = computed(()=>{
        return rowsGet.value.total
    })
    const rows = computed(()=>{
        return rowsGet.value.rows
    })

    watch( () => page.value, () => {
       findQuery.page = page.value
        $fetch( `/api/im_object`, {
            method: 'GET',
            params: findQuery
        }).then(item=>{
            rowsGet.value = item
        })
    })

</script>
<template>
    <div style="display: flex;">
        <div style="flex: 1 auto;padding-right: 8px;min-width: 700px;">
            <findLinc tip="Офис" />
        </div>
        <div style="width: 300px;text-align: -webkit-right;">
            <callPromo />
        </div>
    </div>
    <UPagination v-model="page" :page-count="10" :total="total" :to="(page) => (nextUrl+'/page'+page)" style="margin-top: 12px;justify-content: center;" />
    <div v-for="row in rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" style="margin-top: 12px;" >
        <largeItem :item="row" />
    </div>
    <UPagination v-model="page" :page-count="10" :total="total" :to="(page) => (nextUrl+'/page'+page)" style="margin-top: 12px;justify-content: center;" />
</template>