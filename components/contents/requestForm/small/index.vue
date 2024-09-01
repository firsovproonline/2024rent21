<script setup>
    const TipList = ['Офис', 'Магазин', 'Склад', 'Участок']
    const news = reactive({
    title: '',
    phone: '',
    email: '',
    tip: 'Офис',
    img3: '',
    img4: '',
    })
</script>
<template>
    <UCard :ui="{ label: { base: 'grid grid-cols-1 px-1'} }" style="margin-bottom: 12px;"  >
        <UForm :state="news" class="space-y-1" >
            <UFormGroup class="fgroup" :ui="{label: {  wrapper: 'flex stw'} }" label="Имя" name="title">
                <UInput class="finput" v-model="news.title" />
            </UFormGroup>
            <UFormGroup class="fgroup" :ui="{label: {  wrapper: 'flex stw'} }" label="Телефон" name="phone">
                <UInput v-model="news.phone" />
            </UFormGroup>
            <UFormGroup class="fgroup" :ui="{label: {  wrapper: 'flex stw'} }" label="Почта" name="email">
                <UInput v-model="news.email" />
            </UFormGroup>
            <UFormGroup class="fgroup" :ui="{label: {  wrapper: 'flex stw'} }" label="Тип" name="tip">
                <USelect v-model="news.tip" :options="TipList" />
            </UFormGroup>
            <div style="display: flex;justify-content: center;margin-top: 8px;">
                <UButton color="gray">Отправить заявку</UButton>
            </div>
        </UForm>

    </UCard>    
</template>
<style lang="scss" >
    .fgroup{
        display: flex;
        align-items: center;
        .stw{
            width: 60px;
        }
        .relative {
            position: relative;
            flex: 1 auto;
        }

    }

</style>