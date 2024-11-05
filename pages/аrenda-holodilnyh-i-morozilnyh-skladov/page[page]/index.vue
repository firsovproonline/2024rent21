<script setup>
    import mobileItem from '/components/contents/dbItem/im_object/mobile/index.vue'
    import bigItem from '/components/contents/dbItem/im_object/big/index.vue'
    const { $viewport } = useNuxtApp()
    const route = useRoute()
    const page = ref(1)
    if(route.params.page) page.value = route.params.page*1
    const nextUrl = '/аrenda-holodilnyh-i-morozilnyh-skladov'
    useHead({
        title: 'Аренда склада и помещений с Холод  кам  и Мороз  камерами  ( Снять склад и помещение  с Холод  кам  и Мороз  камерами ) Все варианты предложений по аренде склада и помещений в Москве от Собственников.',
        meta: [
            { name: 'keywords', content: 'аренда склада с Холод  кам  и Мороз  камерами,аренда помещения с Холод  кам  и Мороз  камерами, снять склад  с Холод  кам  и Мороз  камерами,снять помещение с Холод  кам  и Мороз  камерами.' },
            { name: 'description', content: `Где арендовать и снять склад и помещенияс  с Холод  кам  и Мороз  камерами ? Все предложения по аренде склада и складских помещений  с Холод  кам  и Мороз  камерами   Все складские комплексы, склады и помещения  с Холод  кам  и Мороз  камерами.` }
        ],
    })
    definePageMeta({
        layout: 'universal',
        meta: {
            titleMobile:'помещений с Холод кам и Мороз камерами'
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