<script setup>
import smap from '/components/contents/find/map/yandex/all/index.vue'
import callPromo from '/components/contents/callPromo'
import mobileItem from '/components/contents/dbItem/im_object/mobile/index.vue'
import rformSmall from '/components/contents/requestForm/small'
import bigItem from '/components/contents/dbItem/im_object/big/index.vue'
import bigFind from '/components/contents/find/big/index.vue'
const { $viewport } = useNuxtApp()
    const arrru = new Array('Я', 'я', 'Ю', 'ю', 'Ч', 'ч', 'Ш', 'ш', 'Щ', 'щ', 'Ж', 'ж', 'А', 'а', 'Б', 'б', 'В', 'в', 'Г', 'г', 'Д', 'д', 'Е', 'е', 'Ё', 'ё', 'З', 'з', 'И', 'и', 'Й', 'й', 'К', 'к', 'Л', 'л', 'М', 'м', 'Н', 'н', 'О', 'о', 'П', 'п', 'Р', 'р', 'С', 'с', 'Т', 'т', 'У', 'у', 'Ф', 'ф', 'Х', 'х', 'Ц', 'ц', 'Ы', 'ы', 'Ь', 'ь', 'Ъ', 'ъ', 'Э', 'э', ' ');
    const arren = new Array('Ya', 'ya', 'Yu', 'yu', 'Ch', 'ch', 'Sh', 'sh', 'Sh', 'sh', 'Zh', 'zh', 'A', 'a', 'B', 'b', 'V', 'v', 'G', 'g', 'D', 'd', 'E', 'e', 'E', 'e', 'Z', 'z', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'F', 'f', 'H', 'h', 'C', 'c', 'Y', 'y', 'Yy', 'yY', 'Jj', 'Uu', 'Xx', 'Vv', '_');
    function cyrill_to_latin (text) {
        for (var i = 0; i < arrru.length; i++) {
            var reg = new RegExp(arrru[i], "g");
            try {
                text = text.replace(reg, arren[i]);
            }
            catch (err) {
                text = "error";
    
            }
        }
        return text;
    }
    function latin_to_cyrill (text) {
        for (var i = 0; i < arren.length; i++) {
            if (arren[i].length > 1) {
                var reg = new RegExp(arren[i], "g");
                try {
                    text = text.replace(reg, arrru[i]);
                }
                catch (err) {
                    text = "error"
                }
    
            }
        }
        for (var i = 0; i < arren.length; i++) {
            if (arren[i].length == 1) {
                var reg = new RegExp(arren[i], "g");
                try {
                    text = text.replace(reg, arrru[i]);
                }
                catch (err) {
                    text = "error"
                }
    
            }
        }
        return text;
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }    
    const route = await useRoute()
    const metroRU = await capitalizeFirstLetter(latin_to_cyrill(route.params.metro))
    definePageMeta({
        layout: 'universal',
        meta: {
            keywords:'аренда офиса, аренда офисов, в москве, от собственника, без комиссии, снять офис, снять помещение, аренда помещения.',
            description: `Аренда офисов и помещений От Собственников по всей Москве БЕЗ КОМИССИИ! Помогаем снять офис и помещения БЕЗ КОМИССИЙ!.`,
            title:'Аренда офиса в Москве От Собственника и Без Комиссии, Аренда офисов и помещений по всей Москве !.',
            //titleMobile:'Аренда офисов в Москве метро '+metroRU+' Снять офис в Москве метро '+metroRU+'.',
        }          
    });
    useRouter().currentRoute.value.meta.meta.titleMobile = 'Аренда офисов в Москве метро '+metroRU+' Снять офис в Москве метро '+metroRU+'.'
/*
    const t = {
        title: 'Аренда офисов в Москве метро '+metroRU+' Снять офис в Москве метро '+metroRU+'.',
        meta: [
            { name: 'keywords', content: 'Аренда офисов в Москве метро '+metroRU+' Снять офис в Москве метро '+metroRU+'.'},
            { name: 'description', content: 'Аренда офисов в Москве метро '+metroRU+' Снять офис в Москве метро '+metroRU+'.' }
        ]
    }
    useHead(t)
*/

    const page = ref(1)
    if(route.params.page) page.value = route.params.page*1
    const rowsGet = ref({})
    const nextUrl = '/arenda-ofisa/metro-'+route.params.metro

    const findQuery = {
        page: page.value,
        perPage: 10,
        TIP: 'Офис',
        OPP: 'Аренда',
        UNDERGROUND:metroRU

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
        <div v-for="row1 in rows.rows" :key="row1.ID" :class=" row1.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
            <bigItem :item="row1" />
        </div>
        <UPagination v-model="page" :page-count="10" :total="total" :to="(page) => (nextUrl+'/page'+page)" style="margin-top: 12px;justify-content: center;" />

    </div>


</template>