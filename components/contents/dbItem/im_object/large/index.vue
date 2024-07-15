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
            <div style="border-right:1px solid #bfbfbf;padding-right: 16px;margin-left: 6px;width: 140px;min-width: 140px;">
                <div>{{ item.OPP }} {{ item.TIP }}</div>
                <div v-if="item.PL1">Площадь {{ item.PL1 }} м<sup>2</sup></div>
                <div v-if="item.TIPD && item.TIPD !==''" ><span style="color:#08739a">{{ item.TIPD }}</span></div>
                <div v-if="item.OPP=='Аренда'"><span>{{ item.CENA_AR_MES * 12 }} м<sup>2</sup> в год</span></div>
                <div v-else><span>{{ item.CENA_AR_MES_ALL }} руб.</span></div>
            </div>
            <div style="border-right:1px solid #bfbfbf;padding-right: 16px;margin-left: 6px;min-width: 190px;max-width: 190px;">
                <div>Класс: {{ item.KLASS }}</div>
                <div>Тип здания: {{ item.TIPZD }}</div>
                <div>Этаж: {{ item.ETAG }}</div>
                <div>Состояние: {{ item.ConditionType }}</div>
                <div>Парковка: {{ item.PARKNAZ }}</div>
            </div>
            <div style="padding-right: 16px;margin-left: 6px;min-width: 190px;max-width: 190px;">
                <div>{{ item.GOROD }}</div>
                <div>{{ item.UNDERGROUND }}</div>
                <div>{{ item.RAJON }}</div>
                <div>{{ item.ULITCA }}</div>
            </div>      
            <div style="padding-right: 16px;margin-left: 6px;flex: 1 auto;display: flex;flex-wrap: wrap;align-items: stretch; align-content: space-between;">
                <h1>Инфраструктура</h1>
                <div style="flex: 1 auto;height: 80%;">
                        {{ item.Infrastructure.replaceAll('|',' ') }}
                </div>

                <div style="text-align: end;width: 100%;">
                    <UButton square label="Подробнее" color="gray" variant="solid" :to="'/ofisnaya-nedvizhimost/'+item.ID"  />
                </div>
            
            </div>      
        </div>
        <div style="height: 6px;"></div>

    
    </UCard>


</template>
<style scoped>
*{
    line-height: 16px;  
}
    h1{
        font-weight: bold;
        color: black;
        width: 100%;
    }
    .px-1{
        padding-left: 0;
    padding-right: 0;
    }

    .sm\:p-6 {
    padding: 0px;
}
</style>