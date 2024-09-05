<script setup>
import smap from '/components/contents/find/map/yandex/all/index.vue'
import callPromo from '/components/contents/callPromo'
import mobileItem from '/components/contents/dbItem/im_object/mobile/index.vue'
import rformSmall from '/components/contents/requestForm/small'
import bigItem from '/components/contents/dbItem/im_object/big/index.vue'
import bigFind from '/components/contents/find/big/index.vue'
const { $viewport } = useNuxtApp()
const nextUrl = '/arenda-osobnyak'
const page = ref(1)

    useHead({
        title: 'аренда особняков в москве, снять особняк в москве .',
        meta: [
            { name: 'keywords', content: 'аренда особняков в москве, снять особняк в москве.' },
            { name: 'description', content: `Аренда офисов и помещений От Собственников по всей Москве БЕЗ КОМИССИИ! Помогаем снять офис и помещения БЕЗ КОМИССИЙ!.` }
        ]
    })

definePageMeta({
        layout: 'universal',
        meta: {
            keywords:'аренда особняков в москве, снять особняк в москве.',
            description: `Аренда офисов и помещений От Собственников по всей Москве БЕЗ КОМИССИИ! Помогаем снять офис и помещения БЕЗ КОМИССИЙ!.`,
            title:'аренда особняков в москве, снять особняк в москве .',
            titleMobile:'аренда особняков в москве, снять особняк в москве .'
        }          
    });
    const findQuery = {
        page: page.value,
        perPage: 10,
        TIP: 'Офис',
        TIPZD: 'Особняк',
        OPP: 'Аренда',
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
                        <div><a href="/arenda-ofisa/metro">Аренда офисов по метро</a></div>
                    </div>
                    <div>
                        <h1>Аренда офисов по районам</h1>
                        <div><a href="/arenda-ofis-cao">Аренда офиса ЦАО</a></div>
                        <div><a href="/arenda-ofis-uvao">Аренда офиса ЮВАО</a></div>
                        <div><a href="/arenda-ofis-vao">Аренда офиса ВАО</a></div>
                        <div><a href="/arenda-ofis-svao">Аренда офиса СВАО</a></div>
                        <div><a href="/arenda-ofis-sao">Аренда офиса САО</a></div>
                        <div><a href="/arenda-ofis-szao">Аренда офиса СЗАО</a></div>
                        <div><a href="/arenda-ofis-zao">Аренда офиса ЗАО</a></div>
                        <div><a href="/arenda-ofis-uzao">Аренда офиса ЮЗАО</a></div>
                        <div><a href="/arenda-ofis-uao">Аренда офиса ЮАО</a></div>
                    </div>
                    <div>
                        <h1>Предложения по аренде офисов по цене</h1>
                        <div><a href="/ofis-do12000-rur">до 12000 руб./кв.м./год.</a></div>
                        <div><a href="/ofis-do15000-rur">до 15000 руб./кв.м./год.</a></div>
                        <div><a href="/ofis-do20000-rur">до 20000 руб./кв.м./год.</a></div>
                        <div><a href="/ofis-do25000-rur">до 25000 руб./кв.м./год.</a></div>
                        <div><a href="/ofis-do30000-rur">до 30000 руб./кв.м./год.</a></div>
                        <div><a href="/ofis-ot30000-rur">от 30000 руб./кв.м./год.</a></div>
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