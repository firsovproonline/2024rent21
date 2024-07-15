<script setup>
import findLinc from '/components/contents/find/linc/tip'
import callPromo from '/components/contents/callPromo'
import largeItem from '/components/contents/dbItem/im_object/large/index.vue'
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
    definePageMeta({
        layout: 'onecol',
    });
    const metroRU = capitalizeFirstLetter(latin_to_cyrill(route.params.metro))
    const t = {
        title: 'Аренда офисов в Москве метро '+metroRU+' Снять офис в Москве метро '+metroRU+'.',
        meta: [
            { name: 'keywords', content: 'Аренда офисов в Москве метро '+metroRU+' Снять офис в Москве метро '+metroRU+'.'},
            { name: 'description', content: 'Аренда офисов в Москве метро '+metroRU+' Снять офис в Москве метро '+metroRU+'.' }
        ]
    }
    useHead(t)


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
    <div style="display: flex;">
        <div style="flex: 1 auto;padding-right: 8px;min-width: 700px;">
            <findLinc tip="Офис" />
        </div>
        <div style="width: 300px;text-align: -webkit-right;">
            <callPromo />
        </div>
    </div>
    <UPagination v-model="page" :page-count="10" :total="total" :to="(page) => (nextUrl+'/page'+page)" style="margin-top: 12px;justify-content: center;" />
    <div v-for="row in rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" style="margin-top: 12px;" >
        <largeItem :item="row" />
    </div>
    <UPagination v-model="page" :page-count="10" :total="total" :to="(page) => (nextUrl+'/page'+page)" style="margin-top: 12px;justify-content: center;" />

</template>