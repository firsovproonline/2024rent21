<script setup>
    const props = defineProps({
        item: {
            type: Object,
            required: true,
        },
    });
</script>
<template>
    <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1'}  }" style="margin-bottom: 12px; padding: 0px !important;"  >
        <h1>{{ item.TITLE }}</h1>
        <div style="display: flex;">
            <img v-if="Object.values(JSON.parse(item.PHOTO)).find(item => item.STEP == 0)" :src="'/api/photo?puid='+Object.values(JSON.parse(item.PHOTO)).find(item => item.STEP == 0).PUID+'&title='+Object.values(JSON.parse(item.PHOTO)).find(item => item.STEP == 0).NAME+'&size=small'" style="height: 110px;width: 160px;min-width: 160px;">
            <img v-else :src="'/api/photo?puid='+Object.values(JSON.parse(item.PHOTO))[0].PUID+'&title='+Object.values(JSON.parse(item.PHOTO))[0].NAME+'&size=small'" style="height: 110px;width: 160px;min-width: 160px;">
            <div style="border-right:1px solid #bfbfbf;padding-right: 16px;margin-left: 6px;width: 140px;min-width: 140px;">
                <div>{{ item.OPP }} {{ item.TIP }}</div>
                <div v-if="item.PL1">Площадь {{ item.PL1.split('-')[0] }} м<sup>2</sup></div>
                <div>Тип договора: {{ item.TIPD }}</div>
            </div>
            <div style="border-right:1px solid #bfbfbf;padding-right: 16px;margin-left: 6px;min-width: 190px;max-width: 190px;">
                <div>Класс: {{ item.KLASS }}</div>
                <div>Тип здания: {{ item.TIPZD }}</div>
                <div>Этаж: {{ item.ETAG }}</div>
                <div>Состояние: {{ item.SOST }}</div>
                <div>Парковка: {{ item.PARK }}</div>
            </div>
            <div style="padding-right: 16px;margin-left: 6px;flex: 1 auto">
                <div>{{ item.GOROD }}</div>
                <div>{{ Object.values(JSON.parse(item.METRO))[0].METRO }}</div>
                <div>{{ item.RAJON }}</div>
                <div>{{ item.ULITCA }}</div>
                <div style="text-align: end;margin-top: 12px;">
                    <UButton square label="Подробнее" color="gray" variant="solid" :to="'/ofisnaya-nedvizhimost/'+item.ID"  />
                </div>
            </div>            
        </div>
        <div style="height: 6px;"></div>

    
    </UCard>


</template>
<style scoped>
    h1{
        font-weight: bold;
        color: black;
        width: 100%;
    }
    .px-1{
        padding-left: 0;
    padding-right: 0;
    }

</style>