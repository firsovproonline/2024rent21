<script setup>
    const map =ref(null) 
    const route = useRoute()
    useHead({
        title: 'Настройка справочника метро Москвы',
        meta: [
            { name: 'keywords', content: 'Настройка справочника метро Москвы' },
            { name: 'description', content: `Настройка справочника метро Москвы` }
        ],
        script: [
            { src: 'https://api-maps.yandex.ru/v3/?apikey=80f1ab75-f93f-476a-ab4c-4f8de2496f76&lang=ru_RU' }
        ],        
    })
    definePageMeta({
        layout: 'onecol',
    });
    const clickHandler = (object) => {
  if (object?.type === 'hotspot') {
    console.log('Clicked on hotspot!');
  }
};

    const page = ref(1)
    if(route.params.page) page.value = route.params.page*1

    const rowsGet = ref({})
    const nextUrl = '/setings/underground'
    const findQuery = {
        page: page.value,
        perPage: 10,
    }

    rowsGet.value = await $fetch( `/api/metro`, {
      method: 'GET',
      params: findQuery
    })
    
    const total = computed(()=>{
        return rowsGet.value.total
    })
    const rows = computed(()=>{
        return rowsGet.value.rows
    })

    onMounted((w) => {
        setTimeout(()=>{
            const {YMap, YMapDefaultSchemeLayer,YMapListener} = ymaps3       
            const mapY = new YMap(
                map.value,
                {
                    location: {
                        // Координаты центра карты
                        center: [37.588144, 55.733842],

                        // Уровень масштабирования
                        zoom: 10
                    }
                }
            );
            mapY.addChild(new YMapDefaultSchemeLayer());
            const mapListener = new YMapListener({
                layer: 'any',
                onClick: clickHandler
            })
        },300)
    })
    
</script>
<template>
    <div ref="map" id="map" style="width: 100%; height: 400px"></div>

    <UPagination v-model="page" :page-count="10" :total="total" :to="(page) => (nextUrl+'/page'+page)" style="margin-top: 12px;justify-content: center;" />
    <div v-for="row in rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" style="margin-top: 12px;" >
        
    </div>
    <UPagination v-model="page" :page-count="10" :total="total" :to="(page) => (nextUrl+'/page'+page)" style="margin-top: 12px;justify-content: center;" />


</template>