<script setup>
import findLinc from '/components/contents/find/linc/tip'
import callPromo from '/components/contents/callPromo'
import largeItem from '/components/contents/dbItem/im_object/large/index.vue'
import { useNuxtApp } from '#app'
const { $viewport } = useNuxtApp()
    useHead({
        title: 'Продажа офисов в Москве, купить офисное помещение в Москве .',
        meta: [
            { name: 'keywords', content: 'Продажа офисов в Москве, купить офисное помещение в Москве.' },
            { name: 'description', content: `Аренда офисов и помещений От Собственников по всей Москве БЕЗ КОМИССИИ! Помогаем снять офис и помещения БЕЗ КОМИССИЙ!.` }
        ]
    })



    const page = ref(1)
    const rowsGet = ref({})
    const nextUrl = '/prodazha-ofisy'
    const findQuery = {
        page: page.value,
        perPage: 10,
        TIP: 'Офис',
        OPP: 'Продажа'
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

    definePageMeta({
        layout: 'universal',
        pageType: 1,
        type:'Офис',
        opp:'Продажа',
        title: 'Продажа офисов в Москве, купить офисное помещение в Москве .',
        keywords: 'Продажа офисов в Москве, купить офисное помещение в Москве.' ,
        description: `Аренда офисов и помещений От Собственников по всей Москве БЕЗ КОМИССИИ! Помогаем снять офис и помещения БЕЗ КОМИССИЙ!.`,
    });

</script>
<template>
    <div style="display: flex;"  v-if="!$viewport.isLessThan('tablet')">
        <div style="flex: 1 auto;padding-right: 8px;min-width: 700px;">
            <findLinc tip="Офис" />
        </div>
        <div style="width: 300px;text-align: -webkit-right;">
            <callPromo />
        </div>
    </div>
    <UPagination  v-model="page" :page-count="10" :total="total" :to="(page) => (nextUrl+'/page'+page)" style="justify-content: center;margin-top: 12px;" />
    <div v-for="row in rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" style="margin-top: 12px;" >
        <largeItem v-if="!$viewport.isLessThan('tablet')" :item="row" />
    </div>
    <UPagination v-model="page" :page-count="10" :total="total" :to="(page) => (nextUrl+'/page'+page)" style="margin-top: 12px;justify-content: center;" />
</template>