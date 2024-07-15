<script setup>
    import logo from '/components/contents/logo'
    import headerMenu from '/components/contents/headerMenu'
    import callPromo from '/components/contents/callPromo'
    import sfooter from '/components/contents/footer'
    import findLinc from '/components/contents/find/linc/tip'
    import largeItem from '/components/contents/dbItem/im_object/large/index.vue'
    useHead({
        title: 'Аренда помещений под кафе, Ресторан  Снять помещение под кафе и Ресторан .',
        meta: [
            { name: 'keywords', content: 'Аренда помещений под кафе, Ресторан, Снять помещение под кафе и Ресторан .' },
            { name: 'description', content: `Аренда офисов и помещений От Собственников по всей Москве БЕЗ КОМИССИИ! Помогаем снять офис и помещения БЕЗ КОМИССИЙ!.` }
        ]
    })
    const route = useRoute()
    definePageMeta({
        layout: 'empty',
    });
    const page = ref(1)
    if(route.params.page) page.value = route.params.page*1
    const rowsGet = ref({})
    const nextUrl = '/arenda-magazina'

    const findQuery = {
        page: page.value,
        perPage: 10,
        OPP: 'Аренда',
        TIP: 'Торговая площадь',
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
    <div style="padding-left: 1px;padding-right: 1px;">
        <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="padding: 3px !important;margin-top: 6px;"  >
        <div style="display: flex;">
            <logo style="margin-top: 6px;" />
            <div style="width: 18px;"></div>
            <div>
                <h1>Аренда помещений под кафе, Ресторан, Снять помещение под кафе и Ресторан.</h1>							
                <div class="module" style="max-width: 690px;"><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
                <headerMenu style="flex: 1 auto;"/>
            </div>
        </div>
        </UCard>
        <div style="display: flex;">
            <div style="flex: 1 auto;padding-right: 8px;min-width: 700px;">
                <findLinc tip="Магазин" />
            </div>
            <div style="width: 300px;text-align: -webkit-right;">
                <callPromo />
            </div>
        </div>


        <div style="height: 22px;background-color: #e1e1e12e;margin-top: 8px;"></div>
        <UPagination v-model="page" :page-count="10" :total="total" :to="(page) => (nextUrl+'/page'+page)" style="margin-top: 12px;justify-content: center;" />
        <div v-for="row in rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" style="margin-top: 12px;" >
            <largeItem :item="row" />
        </div>
        <UPagination v-model="page" :page-count="10" :total="total" :to="(page) => (nextUrl+'/page'+page)" style="margin-top: 12px;justify-content: center;" />

        <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="padding: 0px !important;margin-top: 12px;"  >
            <sfooter />
        </UCard>
    </div>
</template>
<style>
html, body {
                height: 100vh;
             
}
html {
    display: table;
    margin: auto;
}
body {
    display: table-cell;
    vertical-align: middle;
    margin: 0 auto;
    
} 
#__nuxt{
    min-width: 960px;
    max-width: 960px;

    overflow: auto;
    min-height: 100vh;    
}

* {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    font-size: 14px;
    font-family: 'Times New Roman', Times, serif;
    line-height: 16px;
}
h1{
    font-weight: bolder;
    color: black;
}
</style>