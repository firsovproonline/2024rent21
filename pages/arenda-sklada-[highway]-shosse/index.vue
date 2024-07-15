<script setup>
    import bigItem from '/components/contents/dbItem/im_object/big/index.vue'
    import largeItem from '/components/contents/dbItem/im_object/large/index.vue'
    import lincMetro from '/components/contents/lincMetro/index.vue'
    import findLinc from '/components/contents/find/linc/tip'
    import logo from '/components/contents/logo'
    import headerMenu from '/components/contents/headerMenu'
    import callPromo from '/components/contents/callPromo'
    import sfooter from '/components/contents/footer'
    import yMap from '/components/contents/find/map/yandex'
    definePageMeta({
        layout: 'empty',
    });
    const route = useRoute()
    const page = ref(1)
    if(route.params.page) page.value = route.params.page*1
    const rowsGet = ref({})
    const nextUrl = '/arenda-sklada-moskva'

    const findQuery = {
        page: page.value,
        perPage: 10,
        TIP: 'Склад',
        OPP: 'Аренда',
        GOROD:'Москва'
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

    useHead({
      title: 'Аренда склада и помещений в Москве  ( Снять склад и помещение  в Москве ) Все варианты предложений по аренде склада и помещений в Москве от Собственников.',
      meta: [
        { name: 'keywords', content: 'аренда склада в Москве,аренда помещения в Москве, снять склад  в Москве,снять помещение в Москве.' },
        { name: 'description', content: `Где арендовать и снять склад и помещенияс  в Москве ? Все предложения по аренде склада и складских помещений  в Москве   Все складские комплексы, склады и помещения  в Москве.` }
      ],
      bodyAttrs: {
        class: 'test'
      },

    })
</script>
<template>

<div style="padding-left: 1px;padding-right: 1px;">
        <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="padding: 3px !important;margin-top: 6px;"  >
        <div style="display: flex;">
            <logo style="margin-top: 6px;" />
            <div style="width: 18px;"></div>
            <div>
                <h1>Складская недвижимость, Аренда и Продажа.</h1>							
                <div class="module" style="max-width: 690px;"><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
                <headerMenu style="flex: 1 auto;"/>
            </div>
        </div>
        </UCard>
        <div style="display: flex;">
            <div style="flex: 1 auto;padding-right: 8px;min-width: 700px;">
                <findLinc tip="Склад" />
            </div>
            <div style="width: 300px;text-align: -webkit-right;">
                <callPromo />
            </div>
        </div>
        <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="padding: 0px !important;margin-top: 12px;"  >
            <yMap :filter="{OPP:'Аренда',TIP:'Склад',GOROD:'Москва'}"/>
        </UCard>
        <h1 style="margin-top: 12px;text-align: center;">в базе {{ total }} обьявлений</h1>
        <div v-for="row in rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" style="margin-top: 12px;" >
          <largeItem :item="row" />
        </div>
        <UPagination v-model="page" :page-count="10" :total="total" :to="(page) => (nextUrl+'/page'+page)" style="margin-top: 12px;justify-content: center;" />

        <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="padding: 0px !important;margin-top: 12px;"  >
            <sfooter />
        </UCard>
    </div>



</template>
<style scoped>
li {
    display: inline-table;
}
.head {
    margin-top: 8px;
    margin-bottom: 8px;
    background-color:#e1e1e159;
    font-size: 16px;
    font-family: 'Segoe UI Semibold';
    color: #000000;
    line-height: 16px;
    padding: 4px;
    padding-left: 8px;
}

.futtermenu div {
									display:table-cell !important;
									
								}
h3 {
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.7pt;
}

li {
    display: inline-table;
}


.grid{
  padding: 4px;
}
</style>