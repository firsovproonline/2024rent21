<script setup>
    import logo from '/components/contents/logo'
    import headerMenu from '/components/contents/headerMenu'
    import callPromo from '/components/contents/callPromo'
    import sfooter from '/components/contents/footer'
    import findLinc from '/components/contents/find/linc/tip'
    import largeItem from '/components/contents/dbItem/im_object/large/index.vue'
    const arrru = new Array('Я', 'я', 'Ю', 'ю', 'Ч', 'ч', 'Ш', 'ш', 'Щ', 'щ', 'Ж', 'ж', 'А', 'а', 'Б', 'б', 'В', 'в', 'Г', 'г', 'Д', 'д', 'Е', 'е', 'Ё', 'ё', 'З', 'з', 'И', 'и', 'Й', 'й', 'К', 'к', 'Л', 'л', 'М', 'м', 'Н', 'н', 'О', 'о', 'П', 'п', 'Р', 'р', 'С', 'с', 'Т', 'т', 'У', 'у', 'Ф', 'ф', 'Х', 'х', 'Ц', 'ц', 'Ы', 'ы', 'Ь', 'ь', 'Ъ', 'ъ', 'Э', 'э', ' ');
const arren = new Array('Ya', 'ya', 'Yu', 'yu', 'Ch', 'ch', 'Sh', 'sh', 'Sh', 'sh', 'Zh', 'zh', 'A', 'a', 'B', 'b', 'V', 'v', 'G', 'g', 'D', 'd', 'E', 'e', 'E', 'e', 'Z', 'z', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'F', 'f', 'H', 'h', 'C', 'c', 'Y', 'y', 'Yy', 'yY', 'Jj', 'Uu', 'Xx', 'Vv', '_');
function cyrill_to_latin(text) {
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

function latin_to_cyrill(text) {
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
    const route = useRoute()
    const region = latin_to_cyrill(route.params.rajon).toUpperCase().replace('У','Ю') 
    
    const t = {
        title: 'Аренда магазина и торговых помещений '+region+'  ( Снять магазин и торговое помещение  '+region+' ) Все варианты предложений по аренде магазинов и торговых помещений в Москве от Собственников в районе '+region+'.',
        meta: [
            { name: 'keywords', content: 'аренда магазина '+region+',аренда помещения '+region+', снять магазин  '+region+',снять помещение '+region+', аренда магазинов в районе '+region+', аренда помещений в районе СЗАО.' },
            { name: 'description', content: 'Где арендовать и снять магазин  или торговое помещение  '+region+' ? Все предложения по аренде магазина и торговых помещений  '+region+'   Все торговые центры, торговые помещения и магазины  '+region+'.' }
        ]
    }
    useHead(t)

    let okrug = 'Центральный'
    if(route.params.rajon == 'uvao'){
        okrug = 'Юго-Восточный'
    } 
    if(route.params.rajon == 'vao') {
        okrug = 'Восточный'
    }
    if(route.params.rajon == 'svao') {
        okrug = 'Северо-Восточный'
    }
    if(route.params.rajon == 'sao') {
        okrug = 'Северный'
    }
    if(route.params.rajon == 'szao') {
        okrug = 'Северо-Западный'
    }
    if(route.params.rajon == 'zao') {
        okrug = 'Западный'
    }
    if(route.params.rajon == 'uzao') {
        okrug = 'Юго-Западный'
    }
    if(route.params.rajon == 'uao') {
        okrug = 'Южный'
    }




    definePageMeta({
        layout: 'empty',
    });
    const page = ref(1)
    if(route.params.page) page.value = route.params.page*1
    const rowsGet = ref({})
    const nextUrl = '/arenda-magazina/'+route.params.rajon

    const findQuery = {
        page: page.value,
        perPage: 10,
        OPP: 'Аренда',
        TIP: 'Торговая площадь',
        OKRUG: okrug
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


</script>
<template>
    <div style="padding-left: 1px;padding-right: 1px;">
        <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="padding: 3px !important;margin-top: 6px;"  >
        <div style="display: flex;">
            <logo style="margin-top: 6px;" />
            <div style="width: 18px;"></div>
            <div>
                <h1>Аренда магазина и торговых помещений {{ region }} ( Снять магазин и торговое помещение {{ region }} ) Все варианты предложений по аренде магазинов и торговых помещений в Москве от Собственников в районе {{ region }}</h1>							
                <div class="module" style="max-width: 690px;"><p>Где арендовать и снять магазин или торговое помещение {{ region }} ? Все предложения по аренде магазина и торговых помещений {{ region }} . Все торговые центры, торговые помещения и магазины {{ region }}</p></div>
                <headerMenu style="flex: 1 auto;"/>
            </div>
        </div>
        </UCard>
        <div style="display: flex;">
            <div style="flex: 1 auto;padding-right: 8px;min-width: 700px;">
                <findLinc tip="Магазин" />
            </div>
            <div style="width: 300px;text-align: -webkit-right;">
                <callPromo />
            </div>
        </div>


        <div style="height: 22px;background-color: #e1e1e12e;margin-top: 8px;"></div>
        <UPagination v-model="page" :page-count="10" :total="total" :to="(page) => (nextUrl+'/page'+page)" style="margin-top: 12px;justify-content: center;" />
        <div v-for="row in rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" style="margin-top: 12px;" >
            <largeItem :item="row" />
        </div>
        <UPagination v-model="page" :page-count="10" :total="total" :to="(page) => (nextUrl+'/page'+page)" style="margin-top: 12px;justify-content: center;" />

        <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="padding: 0px !important;margin-top: 12px;"  >
            <sfooter />
        </UCard>
    </div>
</template>
<style>
html, body {
                height: 100vh;
             
}
html {
    display: table;
    margin: auto;
}
body {
    display: table-cell;
    vertical-align: middle;
    margin: 0 auto;
    
} 
#__nuxt{
    min-width: 960px;
    max-width: 960px;

    overflow: auto;
    min-height: 100vh;    
}

* {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    font-size: 14px;
    font-family: 'Times New Roman', Times, serif;
    line-height: 16px;
}
h1{
    font-weight: bolder;
    color: black;
}
</style>