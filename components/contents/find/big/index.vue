<script setup>
    import mapRajon from '/components/contents/find/map/rajon'
    import mapMetro from '/components/contents//find/map/underground'
    const TipList = ['Офис', 'Магазин', 'Склад', 'Участок']
    const OppList = ['Аренда', 'Продажа', 'ППА']
    const rajonMapOpen = ref(false)
    const metroMapOpen = ref(false)
    const item = reactive({
        plin: '',
        plout: '',
        opp: 'Аренда',
        tip: 'Офис',
        cenain: '',
        cenaut: '',
    })
</script>
<template>
    <UModal v-model="rajonMapOpen">
            <mapRajon></mapRajon>
    </UModal>    
    <UModal v-model="metroMapOpen" :ui="{width:'w8000px',rounded:'wfitcontent'}">
            <div style="height:680px;width:600px;display: table;">
            <mapMetro></mapMetro>
            </div>
    </UModal>  
    <UCard :ui="{ body: { base: 'grid grid-cols-1 px-0' }, divide: 'divide-y divide-gray-200 dark:divide-gray-800 borderRed bGrey'}" style="padding: 0px !important;"   >
        <div style="display: flex;justify-content: space-between;">
            <UFormGroup :ui="{label: {  wrapper: 'flexLeft'} }" label="Тип помещения" name="tip" >
                <div style="width: 110px;max-width: 110px;">
                    <USelect v-model="item.tip" :options="TipList" />
                    <USelect v-model="item.opp" :options="OppList" />
                </div>
            </UFormGroup>
            <UFormGroup :ui="{label: {  wrapper: 'flexLeft'} }" label="Площадь"  style="margin-left: 12px;">
                <div style="display: flex;width: 110px;max-width: 110px;">
                    <UInput v-model="item.plin" />
                    <div style="width: 8px;"></div>
                    <UInput v-model="item.plout" />
                </div>
                <div style="display: flex;align-items: center;">
                    <div style="flex: 1 auto;">Метро</div>
                    <div style="width: 50px;">
                        <UButton block color="gray" @click="metroMapOpen = true">Карта</UButton>
                    </div>
                </div>
            </UFormGroup>    
            <UFormGroup :ui="{label: {  wrapper: 'flexLeft'} }" label="Цена"  style="margin-left: 12px;">
                <div style="display: flex;width: 220px;max-width: 220px;">
                    <UInput v-model="item.cenain" />
                    <div style="width: 8px;"></div>
                    <UInput v-model="item.cenaout" />
                </div>
                <div style="display: flex;align-items: center;">
                    <div style="flex: 1 auto;">Район</div>
                    <div style="width: 50px;">
                        <UButton block color="gray" @click="rajonMapOpen = true">Карта</UButton>
                    </div>
                </div>
            </UFormGroup>        
            <UFormGroup :ui="{label: {  wrapper: 'flexLeft'} }" label="&nbsp"  style="margin-left: 12px;">
                <div style="display: flex;">Сброс параметров</div>
                <div style="height: 6px;"></div>
                <UButton block color="red" >Найти</UButton>
            </UFormGroup>               

        </div>
    </UCard>
</template>
<style>
.flexLeft{
    justify-content: start !important;
}
.w800px{
    width:800px;
}
.wfitcontent {
    width: max-content;
    max-width:max-content;
}
</style>