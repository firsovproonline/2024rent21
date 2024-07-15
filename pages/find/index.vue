<script setup>
    definePageMeta({
        layout: 'mobile',
    });
    const TIP = [
        { label: 'Офис', value: 'Офис' },
        { label: 'Магазин', value: 'Магазин' },
        { label: 'Склад', value: 'Склад' },
        { label: 'Участок', value: 'Участок' }
    ]    

    const news = reactive({
    title: '',
    phone: '',
    email: '',
    tip: 'Офис',
    okrug: '',
    rajon: '',
    })

    const findQuery = {
        page: 1,
        perPage: 10,
    }
    const spr =  await $fetch( `/api/spr`, {
      method: 'GET',
      params: findQuery
    })
    const OKRUG = []
    spr.OKRUG.forEach(item => {
        OKRUG.push({label:item.NAME,value:item.NAME})
    });
    const RAJON = []
    spr.RAJON.forEach(item => {
        RAJON.push({label:item.NAME.replace('район ',''),value:item.NAME.replace('район ','')})
    });
</script>
<template>
    <UCard :ui="{ label: { base: 'grid grid-cols-1 px-1'} }" style="margin-bottom: 12px;"  >
        <UForm :state="news" class="space-y-1" >
            <UFormGroup class="fgroup" :ui="{label: {  wrapper: 'flex stw'} }" label="Тип" name="tip">
                <UInputMenu v-model="news.tip" :options="TIP" />
            </UFormGroup>
            <UFormGroup class="fgroup" :ui="{label: {  wrapper: 'flex stw'} }" label="Округ" name="tip">
                <UInputMenu v-model="news.okrug" :options="OKRUG" />
            </UFormGroup>
            <UFormGroup class="fgroup" :ui="{label: {  wrapper: 'flex stw'} }" label="Район" name="tip">
                <UInputMenu v-model="news.rajon" :options="RAJON" />
            </UFormGroup>
        </UForm>
        <UButton block style="margin-top: 16px;">Найти</UButton>
    </UCard>
</template>