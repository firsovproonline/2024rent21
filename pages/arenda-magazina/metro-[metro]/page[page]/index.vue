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
    const route = useRoute()
    const metroRU = capitalizeFirstLetter(latin_to_cyrill(route.params.metro))
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
    useRouter().currentRoute.value.meta.meta.titleMobile = 'Аренда помещений под магазин метро '+metroRU+' Снять помещений под магазин в Москве метро '+metroRU+'.'
    useRouter().currentRoute.value.meta.meta.title = 'Аренда помещений под магазин метро '+metroRU+' Снять помещений под магазин в Москве метро '+metroRU+'.'
    useRouter().currentRoute.value.meta.meta.description = `Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы`


    const page = ref(1)
    if(route.params.page) page.value = route.params.page*1
    const rowsGet = ref({})
    const nextUrl = '/arenda-magazina/metro-'+route.params.metro
    const findQuery = {
        page: page.value,
        perPage: 10,
        TIP: 'Торговая площадь',
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
        <div v-for="row1 in rows.rows" :key="row1.ID" :class=" row1.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
            <bigItem :item="row1" />
        </div>
        <UPagination v-model="page" :page-count="10" :total="total" :to="(page) => (nextUrl+'/page'+page)" style="margin-top: 12px;justify-content: center;" />

    </div>


</template>
