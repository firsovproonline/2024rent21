<script setup>
    const rows = await $fetch( `/api/im_object`, {
      method: 'GET',
      params: {
        page: 1,
        perPage: 3,
      }
    })
</script>
<template>
    <div v-for="row in rows.rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
        <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1'}  }" style="margin-bottom: 12px; padding: 0px !important;"  >
            <h1>{{ row.TITLE }}</h1>
            <img :src="'/api/photo?puid='+Object.values(JSON.parse(row.PHOTO)).find(item => item.STEP == 1).PUID+'&title='+Object.values(JSON.parse(row.PHOTO)).find(item => item.STEP == 1).NAME" style="height: 150px;width: 220px;min-width: 220px;">
            <div  style="display: flex;align-items: center;">Площадь: <div class="value">{{ row.PL1 }} м<sup>2</sup></div></div>
            <div  style="display: flex;align-items: center;">
                <div class="value">класс: {{ row.KLASS }}</div>
                <div style="margin-left: 4px;">Цена: </div>
                <div class="value">{{ row.CENA }}</div>
                <div class="value" style="margin-left: 4px;">{{ row.TIPC }}</div>


            </div>
            <div style="padding-top:4px;padding-bottom:4px;"><span style="border: 1px solid #08739A;
						font-size: 15px;
						color: #08739A;
						padding: 1px 3px 3px 3px;">Без комиссии от собственника</span>
            </div>
            <div  style="display: flex;align-items: center;">Метро: <div class="value">{{ Object.values(JSON.parse(row.METRO))[0].METRO }} </div></div>
        </UCard>
    </div>
</template>
<style scoped>
    h1{
        text-align: left;
        font-weight: bold;
    }
    div{
        text-align: left;
    }
     .value {
        font-size: 16px;
        color: #08739a;
    }
</style>