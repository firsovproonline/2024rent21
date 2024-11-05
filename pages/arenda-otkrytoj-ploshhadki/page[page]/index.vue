<script setup>
    import mobileItem from '/components/contents/dbItem/im_object/mobile/index.vue'
    import bigItem from '/components/contents/dbItem/im_object/big/index.vue'
    const { $viewport } = useNuxtApp()
    const route = useRoute()
    const page = ref(1)
    if(route.params.page) page.value = route.params.page*1
    const nextUrl = '/arenda-otkrytoj-ploshhadki'
    useHead({
        title: 'Аренда склада и помещений c Откр площадкой  ( Снять склад и помещение  c Откр площадкой ) Все варианты предложений по аренде склада и помещений в Москве от Собственников.',
        meta: [
            { name: 'keywords', content: 'аренда склада c Откр площадкой,аренда помещения c Откр площадкой, снять склад  c Откр площадкой,снять помещение c Откр площадкой.' },
            { name: 'description', content: `Где арендовать и снять склад и помещенияс  c Откр площадкой ? Все предложения по аренде склада и складских помещений  c Откр площадкой   Все складские комплексы, склады и помещения  c Откр площадкой.` }
        ],
    })
    definePageMeta({
        layout: 'universal',
        meta: {
            titleMobile:'Аренда склада и помещений c Откр площадкой'
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