<script setup>
    import smap from '/components/contents/find/map/yandex/all/index.vue'
    import callPromo from '/components/contents/callPromo'
    import mobileItem from '/components/contents/dbItem/im_object/mobile/index.vue'
    import rformSmall from '/components/contents/requestForm/small'
    import bigItem from '/components/contents/dbItem/im_object/big/index.vue'
    import bigFind from '/components/contents/find/big/index.vue'
    const { $viewport } = useNuxtApp()
    const nextUrl = '/prodazha-psn'
    const page = ref(1)
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
    const findQuery = {
        page: page.value,
        perPage: 10,
        OPP: 'Продажа',
        TIP: 'Помещение свободного назначения',
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
        <div style="display: flex;">
            <div>
                <UCard :ui="{ body: { base: 'grid grid-cols-3 px-0' } }" style="padding: 0px !important;margin-bottom: 8px;"   >
                    <div>
                        <h1>Офисная недвижимость</h1>
                        <div><a href="/arenda-ofisa">Аренда офисных помещений</a></div>
                        <div><a href="/prodazha-ofisy">Продажа офисов</a></div>
                        <div><a href="/arenda-osobnyak">Aренда особняков</a></div>
                        <div><a href="/prodazha-osobnyak">Продажа особняков</a></div>
                        <div><a href="/arenda-gostinitsa">Аренда помещений под Гостиницу</a></div>
                        <div><a href="/arenda-bank">Аренда помещений под банк</a></div>
                        <div><a href="/prodazha-bank">Продажа помещений под банк</a></div>
                        <div><a href="/biznes-centry-moskva">Бизнес Центры Москвы</a></div>
                    </div>
                    <div>
                        <h1>Торговая недвижимость</h1>
                        <div><a href="/arenda-kafe-restoran">Аренда помещений под Кафе, Ресторан</a></div>
                        <div><a href="/arenda-magazina">Аренда помещений под магазин</a></div>
                        <div><a href="/prodazha-kafe-restoran">Продажа помещений под Ресторан</a></div>
                        <div><a href="/arenda-psn">Аренда ПСН</a></div>
                        <div><a href="/prodazha-psn">Продажа ПСН</a></div>
                        <div><a href="/torgovye-centry">Торговые центры</a></div>
                        <div><a href="/arenda-medicinskij-centr">Аренда медицинский центер</a></div>
                    </div>
                    <div>
                        <h1>Складская недвижимость</h1>
                        <div><a href="/arenda-sklada-moskva">Аренда склада в Москве</a></div>
                        <div><a href="/arenda-sklad-moskovskaya-oblast">Аренда склада в Московской области</a></div>
                        <div><a href="/skladskie-kompleksy">Cкладские комплексы</a></div>
                        <div><a href="/otvetstvennoe-hranenie">Ответственное хранение</a></div>
                        <div><a href="/arenda-pomeshhenij-pod-proizvodstvo">Аренда помещений под производство</a></div>
                        <div><a href="/аrenda-holodilnyh-i-morozilnyh-skladov">Аренда холодильных и морозильных складов</a></div>
                        <div><a href="/arenda-otkrytoj-ploshhadki">Аренда открытой площадки</a></div>
                        <div><a href="/prodazha-sklada">Продажа складов</a></div>
                    </div>
                </UCard>   
                <bigFind></bigFind>         
            </div>
            <div style="min-width: 265px;margin-left: 12px;max-width: 265px;">
                <callPromo />
                <rformSmall />
            </div>   
        </div>  
        <smap style="margin-bottom: 8px;"></smap>
        <div v-for="row1 in rows.rows" :key="row1.ID" :class=" row1.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
            <bigItem :item="row1" />
        </div>
        <UPagination v-model="page" :page-count="10" :total="total" :to="(page) => (nextUrl+'/page'+page)" style="margin-top: 12px;justify-content: center;" />

    </div>
</template>