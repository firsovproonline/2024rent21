<script setup>
    import smap from '/components/contents/find/map/yandex/all/index.vue'
    import callPromo from '/components/contents/callPromo'
    import mobileItem from '/components/contents/dbItem/im_object/mobile/index.vue'
    import rformSmall from '/components/contents/requestForm/small'
    import bigItem from '/components/contents/dbItem/im_object/big/index.vue'
    import bigFind from '/components/contents/find/big/index.vue'
    const { $viewport } = useNuxtApp()
    const page = ref(1)
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
        <div style="display: flex;">
            <div>
                <UCard :ui="{ body: { base: 'grid grid-cols-3 px-0' } }" style="padding: 0px !important;margin-bottom: 8px;"   >
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
                    <div>
                        <h1>Склады по шоссе</h1>
                        <div><a href="/arenda-sklada-altufevskoe-shosse">Алтуфьевское шоссе</a></div>
                        <div><a href="/arenda-sklada-varshavskoe-shosse">Варшавское шоссе</a></div>
                        <div><a href="/arenda-sklada-gorkovskoe-shosse">Горьковское шоссе</a></div>
                        <div><a href="/arenda-sklada-volokolamskoe-shosse">Волоколамское шоссе</a></div>
                        <div><a href="/arenda-sklada-dmitrovskoe-shosse">Дмитровское шоссе</a></div>
                        <div><a href="/arenda-sklada-kievskoe-shosse">Киевское шоссе</a></div>
                        <div><a href="/arenda-sklada-kaluzhskoe-shosse">Калужское шоссе</a></div>
                        <div><a href="/arenda-sklada-kashirskoe-shosse">Каширское шоссе</a></div>
                        <div><a href="/arenda-sklada-leningradskoe-shosse">Ленинградское шоссе</a></div>
                        <div><a href="/arenda-sklada-novoryazanskoe-shosse">Новорязанское шоссе</a></div>
                        <div><a href="/arenda-sklada-novorizhskoe-shosse">Новорижское шоссе</a></div>
                        <div><a href="/arenda-sklada-pyatnitskoe-shosse">Пятницкое шоссе</a></div>
                        <div><a href="/arenda-sklada-shhelkovskoe-shosse">Щелковское шоссе</a></div>
                        <div><a href="/arenda-sklada-yaroslavskoe-shosse">Ярославское шоссе</a></div>
                        <div><a href="/arenda-sklada-ehntuziastov-shosse">Энтузиастов Шоссе</a></div>
                    </div>
                    <div>
                        <h1>Склады по типу</h1>
                        <div><a href="/arenda-teplogo-sklada">Аренда теплого склада</a></div>
                        <div><a href="/arenda-holodnogo-sklada">Аренда холодного склада</a></div>
                        <div><a href="/arenda-sklada-zhd-vetka">Склады с ЖД веткой</a></div>
                        <div><a href="/arenda-sklada-s-kran-balkoj">Склады с Кран Балкой</a></div>
                        <div><a href="/arenda-sklada-klassa-a">Аренда склада класса А</a></div>
                        <div><a href="/arenda-aptechnogo-i-farmatsevticheskogo-sklada">Аптечные и Фармацевтические склады.</a></div>
                        <div><a href="/prodazha-avtomojka">Продажа Автомойки</a></div>
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