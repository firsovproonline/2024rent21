<script setup>
    import bigItem from '/components/contents/dbItem/im_object/big/index.vue'
    import lincMetro from '/components/contents/lincMetro/index.vue'
    import findLinc from '/components/contents/find/linc/tip'
    import logo from '/components/contents/logo'
    import headerMenu from '/components/contents/headerMenu'
    import callPromo from '/components/contents/callPromo'
    import sfooter from '/components/contents/footer'
    definePageMeta({
        layout: 'empty',
    });


    const rows = await $fetch( `/api/im_object`, {
      method: 'GET',
      params: {
        page: 1,
        perPage: 5,
      }
    })
    useHead({
      title: 'Складская недвижимость, Аренда и Продажа .',
      meta: [
        { name: 'keywords', content: 'Складская недвижимость, Аренда и Продажа.' },
        { name: 'description', content: `Складская недвижимость, Аренда и Продажа.` }
      ],
      bodyAttrs: {
        class: 'test'
      },

    })
</script>
<template>

<div style="padding-left: 1px;padding-right: 1px;">
        <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="padding: 3px !important;margin-top: 6px;"  >
        <div style="display: flex;">
            <logo style="margin-top: 6px;" />
            <div style="width: 18px;"></div>
            <div>
                <h1>Складская недвижимость, Аренда и Продажа.</h1>							
                <div class="module" style="max-width: 690px;"><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
                <headerMenu style="flex: 1 auto;"/>
            </div>
        </div>
        </UCard>
        <div style="display: flex;">
            <div style="flex: 1 auto;padding-right: 8px;min-width: 700px;">
                <findLinc tip="Склад" />
                <div class="head">Специальные предложения</div>

    <div v-for="row in rows.rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
        <bigItem :item="row" />
    </div>
    <UCard :ui="{ body: { base: 'grid grid-cols-3' } }" style="max-width: 790px;padding-left: 6px; padding-right: 6px;">
      <lincMetro url="arenda-magazina" tip="Торговая площадь" opp="Аренда" style="margin-top: 8px;" />
    </UCard>

            </div>
            <div style="width: 300px;text-align: -webkit-right;">
                <callPromo />
            </div>
        </div>
        <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="padding: 0px !important;margin-top: 12px;"  >
            <sfooter />
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