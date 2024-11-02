<script setup>
    import mobileItem from '/components/contents/dbItem/im_object/mobile/index.vue'
    import bigItem from '/components/contents/dbItem/im_object/big/index.vue'
    const { $viewport } = useNuxtApp()

    const route = useRoute()
    useHead({
        title: 'Продажа офисов в Москве, купить офисное помещение в Москве .',
        meta: [
            { name: 'keywords', content: 'Продажа офисов в Москве, купить офисное помещение в Москве.' },
            { name: 'description', content: `Аренда офисов и помещений От Собственников по всей Москве БЕЗ КОМИССИИ! Помогаем снять офис и помещения БЕЗ КОМИССИЙ!.` }
        ]
    })


    definePageMeta({
        layout: 'universal',
        meta: {
            keywords:'Продажа офисов в Москве, купить офисное помещение в Москве.',
            description: `Аренда офисов и помещений От Собственников по всей Москве БЕЗ КОМИССИИ! Помогаем снять офис и помещения БЕЗ КОМИССИЙ!.`,
            title:'Продажа офисов в Москве, купить офисное помещение в Москве .',
            titleMobile:'Продажа офисов в Москве, купить офисное помещение в Москве .'
        }          
    });
    const page = ref(1)
    if(route.params.page) page.value = route.params.page*1
    const nextUrl = '/prodazha-ofisy'
    const findQuery = {
        page: page.value,
        perPage: 10,
        TIP: 'Офис',
        OPP: 'Продажа'
    }

    let rows = await $fetch( `/api/im_object`, {
      method: 'GET',
      params: findQuery
    })
    const total = computed(()=>{
        return rows.total
    })

</script>
<template>
    <div v-if="$viewport.isLessThan('tablet')">
        <div>
            <div v-for="row in rows.rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >

                <mobileItem :row="row" :template="1"/>


            </div>
            <UPagination v-model="page" :page-count="10" :total="total" :to="(page) => (nextUrl+'/page'+page)" style="margin-top: 12px;justify-content: center;" />        
        </div>

    </div> 
    <div v-else>       
        <div v-for="row1 in rows.rows" :key="row1.ID" :class=" row1.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
            <bigItem :item="row1" />
        </div>
        <UPagination v-model="page" :page-count="10" :total="total" :to="(page) => (nextUrl+'/page'+page)" style="margin-top: 12px;justify-content: center;" />

    </div>
  
</template>