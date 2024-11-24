<script setup>
import callPromo from '/components/contents/callPromo'
import rformSmall from '/components/contents/requestForm/small'
import bigFind from '/components/contents/find/big/index.vue'
const { $viewport } = useNuxtApp()


useHead({
        title: 'Аренда помещений под магазин, Снять помещение под магазин.',
        meta: [
            { name: 'keywords', content: 'аренда помещений под магазин, аренда помещений под магазин в москве, от собственника, без комиссии, снять помещений под магазин, аренда помещения под магазин.' },
            { name: 'description', content: `Аренда офисов и помещений От Собственников по всей Москве БЕЗ КОМИССИИ! Помогаем снять офис и помещения БЕЗ КОМИССИЙ!.` }
        ]
    })
    definePageMeta({
        layout: 'universal',
        meta: {}          
    });
    useRouter().currentRoute.value.meta.meta.titleMobile = 'Аренда помещений под магазин по метро  помещений под магазин в Москве по метро .'
    useRouter().currentRoute.value.meta.meta.title = 'аренда помещений под магазин, аренда помещений под магазин в москве от собственника, без комиссии, снять помещений под магазин, снять помещение, аренда помещения.'
    useRouter().currentRoute.value.meta.meta.description = `Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы`

    const { $rent21 } = useNuxtApp()

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
                        <h1>Торговая недвижимость</h1>
                        
                        <div><a href="/arenda-kafe-restoran">Аренда помещений под Кафе, Ресторан</a></div>
                        <div><a href="/arenda-magazina">Аренда помещений под магазин</a></div>
                        <div><a href="/arenda-magazina/metro">Аренда помещений по метро</a></div>
                        <div><a href="/prodazha-kafe-restoran">Продажа помещений под Ресторан</a></div>
                        <div><a href="/arenda-psn">Аренда ПСН</a></div>
                        <div><a href="/prodazha-psn">Продажа ПСН</a></div>
                        <div><a href="/torgovye-centry">Торговые центры</a></div>
                        <div><a href="/arenda-medicinskij-centr">Аренда медицинский центер</a></div>

                        
                    </div>
                    <div>
                        <h1>Аренда магазинов по районам</h1>
                        
                        <div><a href="/arenda-magazina/cao">Аренда магазина ЦАО</a></div>
                        <div><a href="/arenda-magazina/uvao">Аренда магазина ЮВАО</a></div>
                        <div><a href="/arenda-magazina/vao">Аренда магазина ВАО</a></div>
                        <div><a href="/arenda-magazina/svao">Аренда магазина СВАО</a></div>
                        <div><a href="/arenda-magazina/sao">Аренда магазина САО</a></div>
                        <div><a href="/arenda-magazina/szao">Аренда магазина СЗАО</a></div>
                        <div><a href="/arenda-magazina/zao">Аренда магазина ЗАО</a></div>
                        <div><a href="/arenda-magazina/uzao">Аренда магазина ЮЗАО</a></div>
                        <div><a href="/arenda-magazina/uao">Аренда магазина ЮАО</a></div>

                        
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
                    <a :href="'/arenda-magazina/metro-'+item.latin.toLowerCase()">Ⓜ{{ item.name }}</a>
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