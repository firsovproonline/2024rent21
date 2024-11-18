<script setup>
import callPromo from '/components/contents/callPromo'
import rformSmall from '/components/contents/requestForm/small'
import bigFind from '/components/contents/find/big/index.vue'
const { $viewport } = useNuxtApp()


useHead({
    title: 'Аренда офиса в Москве От Собственника и Без Комиссии, Аренда офисов и помещений по всей Москве !.',
    meta: [
        { name: 'keywords', content: 'аренда офиса, аренда офисов, в москве, от собственника, без комиссии, снять офис, снять помещение, аренда помещения.' },
        { name: 'description', content: `Аренда офисов и помещений От Собственников по всей Москве БЕЗ КОМИССИИ! Помогаем снять офис и помещения БЕЗ КОМИССИЙ!.` }
    ]
})


    definePageMeta({
        layout: 'universal',
        meta: {
            keywords:'аренда офиса, аренда офисов, в москве, от собственника, без комиссии, снять офис, снять помещение, аренда помещения.',
            description: `Аренда офисов и помещений От Собственников по всей Москве БЕЗ КОМИССИИ! Помогаем снять офис и помещения БЕЗ КОМИССИЙ!.`,
            title:'Аренда офиса в Москве От Собственника и Без Комиссии, Аренда офисов и помещений по всей Москве !.',
            titleMobile:'Аренда офисов по метро'
        }          
    });
    const { $rent21 } = useNuxtApp()
    $rent21().titles.top='Аренда офисов по метро'
</script>
<template>


<div v-if="$viewport.isLessThan('tablet')">
        <div>
            <UCard :ui="{ body: { base: 'flex-fitcontent' } }" style="padding-left: 6px; padding-right: 6px;height: fit-content;">
                <div v-for="item in $rent21().underground.fromName()" :key="item" :style="'margin-bottom:4px; margin-left: 1px;display: flex;color:#'+item.color">
                    <a :href="'/arenda-ofisa/metro-'+item.latin.toLowerCase()">Ⓜ{{ item.name }}</a>
                </div>
            </UCard>
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
        <UCard :ui="{ body: { base: 'flex-fitcontent' } }" style="padding-left: 6px; padding-right: 6px;height: fit-content;">
                <div v-for="item in $rent21().underground.fromName()" :key="item" :style="'margin-bottom:4px; margin-left: 1px;display: flex;color:#'+item.color">
                    <a :href="'/arenda-ofisa/metro-'+item.latin.toLowerCase()">Ⓜ{{ item.name }}</a>
                </div>
            </UCard>

    </div>
</template>
<style>
.flex-fitcontent{
    display: flex;
    height: fit-content;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>