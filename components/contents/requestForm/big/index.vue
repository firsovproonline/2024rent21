<script setup>
    const props = defineProps({
        row: {
            type: Object,
            required: true,
            default:null
        }
    });
    // console.log(props.row)
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
    <UCard :ui="{ label: { base: 'grid grid-cols-1 px-1'} ,divide: 'divide-y divide-gray-200 dark:divide-gray-800 borderRed bGrey'}" style="margin-bottom: 12px;"  >
        <h1 style="color: red;text-align: center;">По вопросам аренды и просмотра звоните по тел:</h1>
        <h1 v-if="props.row && props.row.EMAIL !=='roman@arenda-ofisov.ru'" style="color: black;text-align: center;">{{ props.row.PHONE }} {{ props.row.TITLE }}</h1>
        <h1 style="color: black;text-align: center;">+7 (495) 135-10-11 Роман</h1>
        <h1 style="color: red;text-align: center;">Звоните с 9.00 до 21.00 без выходных</h1>
        <hr>
        <div>Или оставьте заявку - вам обязательно перезвонят</div>
        <h1>в нерабочее время оставляйте заявку, с вами свяжутся утром следующего дня</h1>
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