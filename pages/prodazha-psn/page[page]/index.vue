<script setup>
    import mobileItem from '/components/contents/dbItem/im_object/mobile/index.vue'
    import bigItem from '/components/contents/dbItem/im_object/big/index.vue'
    const { $viewport } = useNuxtApp()
    const route = useRoute()
    useHead({
        title: 'Продажа помещений под ПСН, Продать помещение свободного назначения .',
        meta: [
            { name: 'keywords', content: 'Rent21 - Доска обьявлений  Предложения по продаже ПСН без комиссии от собственников в Москве  Мы помогаем продать помещение свободного назначения Москвы.' },
            { name: 'description', content: `Rent21 - Доска обьявлений  Предложения по продаже ПСН без комиссии от собственников в Москве  Мы помогаем продать помещение свободного назначения Москвы.` }
        ]
    })
    definePageMeta({
        layout: 'universal',
        meta: {
            titleMobile:'Продажа помещений под ПСН'
        }          
    });
    const page = ref(1)
    if(route.params.page) page.value = route.params.page*1
    const nextUrl = '/prodazha-psn'
    const findQuery = {
        page: page.value,
        perPage: 10,
        OPP: 'Продажа',
        TIP: 'Помещение свободного назначения'
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