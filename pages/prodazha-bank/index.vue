<script setup>
import findLinc from '/components/contents/find/linc/tip'
import callPromo from '/components/contents/callPromo'
import largeItem from '/components/contents/dbItem/im_object/large/index.vue'


useHead({
    title: 'Продажа банковских помещений, Купить помещение под банк .',
    meta: [
        { name: 'keywords', content: 'Продажа банковских помещений, Купить помещение под банк.' },
        { name: 'description', content: `Аренда офисов и помещений От Собственников по всей Москве БЕЗ КОМИССИИ! Помогаем снять офис и помещения БЕЗ КОМИССИЙ!.` }
    ]
})


const route = useRoute()
    definePageMeta({
        layout: 'onecol',
    });

    const page = ref(1)
    if(route.params.page) page.value = route.params.page*1
    const rowsGet = ref({})
    const nextUrl = '/prodazha-bank'
    const findQuery = {
        page: page.value,
        perPage: 10,
        OPP: 'Продажа',
        TIPP: 'Банк'
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