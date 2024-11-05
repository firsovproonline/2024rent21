<script setup>
    import mobileItem from '/components/contents/dbItem/im_object/mobile/index.vue'
    import bigItem from '/components/contents/dbItem/im_object/big/index.vue'
    const { $viewport } = useNuxtApp()
    const route = useRoute()
    const page = ref(1)
    if(route.params.page) page.value = route.params.page*1
    const nextUrl = '/arenda-pomeshhenij-pod-proizvodstvo'
    useHead({
        title: 'Аренда склада и помещений под Производство  ( Снять склад и помещение  под Производство ) Все варианты предложений по аренде склада и помещений в Москве от Собственников.',
        meta: [
            { name: 'keywords', content: 'Аренда склада и помещений под Производство  ( Снять склад и помещение  под Производство ) Все варианты предложений по аренде склада и помещений в Москве от Собственников.' },
            { name: 'description', content: `Где арендовать и снять склад и помещенияс  под Производство ? Все предложения по аренде склада и складских помещений  под Производство   Все складские комплексы, склады и помещения  под Производство.` }
        ],
    })
    definePageMeta({
        layout: 'universal',
        meta: {
            titleMobile:'помещений под Производство'
        }          
    });
    const findQuery = {
        page: page.value,
        perPage: 10,
        OPP:'Аренда',
        TIP: 'Производство'
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