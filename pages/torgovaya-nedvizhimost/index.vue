<script setup>
    import bigItem from '/components/contents/dbItem/im_object/big/index.vue'
    import lincMetro from '/components/contents/lincMetro/index.vue'
    import findLinc from '/components/contents/find/linc/tip'
    const rows = await $fetch( `/api/im_object`, {
      method: 'GET',
      params: {
        page: 1,
        perPage: 5,
      }
    })
    useHead({
      title: 'Торговая недвижимость Москвы, Аренда и Продажа .',
      meta: [
        { name: 'keywords', content: 'Торговая недвижимость Москвы  Аренда и Продажа .' },
        { name: 'description', content: `Торговая недвижимость Москвы  Аренда и Продажа .` }
      ],
      bodyAttrs: {
        class: 'test'
      },

    })
</script>
<template>
    <div>
      <findLinc tip="Кафе" />


                <div class="head">Специальные предложения</div>

    <div v-for="row in rows.rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
        <bigItem :item="row" />
    </div>
    <UCard :ui="{ body: { base: 'grid grid-cols-3' } }" style="max-width: 790px;padding-left: 6px; padding-right: 6px;">
      <lincMetro url="arenda-magazina" tip="Торговая площадь" opp="Аренда" style="margin-top: 8px;" />
    </UCard>
</div>


</template>
<style scoped>
li {
    display: inline-table;
}
.head {
    margin-top: 8px;
    margin-bottom: 8px;
    background-color:#e1e1e159;
    font-size: 16px;
    font-family: 'Segoe UI Semibold';
    color: #000000;
    line-height: 16px;
    padding: 4px;
    padding-left: 8px;
}

.futtermenu div {
									display:table-cell !important;
									
								}
h3 {
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.7pt;
}

li {
    display: inline-table;
}


.grid{
  padding: 4px;
}
</style>