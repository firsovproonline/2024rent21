<script setup>
    const TipList = ['Офис', 'Магазин', 'Склад', 'Участок']
    const OppList = ['Аренда', 'Продажа', 'ППА']
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
            </UFormGroup>    
            <UFormGroup :ui="{label: {  wrapper: 'flexLeft'} }" label="Цена"  style="margin-left: 12px;">
                <div style="display: flex;width: 220px;max-width: 220px;">
                    <UInput v-model="item.cenain" />
                    <div style="width: 8px;"></div>
                    <UInput v-model="item.cenaout" />
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
</style>