<script setup>
    definePageMeta({
        layout: 'universal',
        pageType: 1,
        type:'Офис',
        opp:'Продажа',
        titleMobile:'Складская недвижимость, Аренда и Продажа.',
        title: 'Складская недвижимость, Аренда и Продажа.',
        keywords: 'аренда офиса, аренда офиса от собственника в москве, аренда офисов от собственника в москве,  снять офис, снять офис в москве, аренда офисов, аренда офисов в москве, аренда офиса в москве, аренда офиса без комиссии, аренда офисов без комиссии,  аренда офиса от собственника, аренда офисов от собственника, доска объявлений, аренда офисов без посредников, аренда особняка, аренда особняков, аренда офиса в бизнес центре, аренда офисов в бизнес центрах, аренда офиса без комиссии в москве, аренда офиса в москве собственник.' ,
        description: `Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы`
    });
    import smallItem from '/components/contents/dbItem/im_object/small/index.vue'
    import bigItem from '/components/contents/dbItem/im_object/big/index.vue'
    import largeItem from '/components/contents/dbItem/im_object/large/index.vue'
    import mobileItem from '/components/contents/dbItem/im_object/mobile/index.vue'
    import lincMetro from '/components/contents/lincMetro/index.vue'
    import findLinc from '/components/contents/find/linc/tip'

    import callPromo from '/components/contents/callPromo'
    import rformSmall from '/components/contents/requestForm/small'

    const { $viewport } = useNuxtApp()
    let rows =null
    let PopularRows = null
    let LastRows = null
    LastRows = await $fetch( `/api/im_object`, {
      method: 'GET',
      params: {
        page: 1,
        perPage: 7,
        TIP:'Склад'
        //orderBy:'ID ASC'
      }
    })

    rows = await $fetch( `/api/im_object`, {
      method: 'GET',
      params: {
        page: 1,
        perPage: 5,
        TIP:'Склад',

        orderBy:'ID DESC'
      }
    })
    PopularRows = await $fetch( `/api/im_object`, {
      method: 'GET',
      params: {
        page: 1,
        perPage: 4,
        TIP:'Склад',
        orderBy:'ROUND(UID)'
      }
    })
    useHead({
      title: 'Складская недвижимость, Аренда и Продажа .',
      meta: [
        { name: 'keywords', content: 'Складская недвижимость  Аренда и Продажа.' },
        { name: 'description', content: `Складская недвижимость  Аренда и Продажа.` }
      ],
      bodyAttrs: {
        class: 'test'
      },
      script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
    })
</script>
<template>
  <div style="display: flex;">
    <div>
      <div  v-if="!$viewport.isLessThan('tablet')">
        <findLinc tip="Склад"  />
      </div>

      <div class="head">Последние предложения по аренде и продаже складов</div>
      <div v-if="!$viewport.isLessThan('tablet')">
        <div v-for="row in LastRows.rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
          <bigItem infoUrl="/skladskaya-nedvizhimost/" :item="row"/>
        </div>



      </div>

      <div v-if="$viewport.isLessThan('tablet')" >
        <div v-for="row in rows.rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
          <mobileItem :row="row" />
        </div>

      </div>

    </div>

    <div v-if="!$viewport.isLessThan('tablet')" style="min-width: 265px;margin-left: 12px;max-width: 265px;" >
      <callPromo />
      <rformSmall />
      <div class="head">Популярные</div>
      <div v-for="row in PopularRows.rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
        <smallItem infoUrl="/skladskaya-nedvizhimost/" :row="row"/>
      </div>
    </div>    
  </div>
  <div v-if="!$viewport.isLessThan('tablet')">
    <div class="head">Специальные предложения</div>
        <div v-for="row1 in rows.rows" :key="row1.ID" :class=" row1.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
          <largeItem infoUrl="/skladskaya-nedvizhimost/" :item="row1" />
        </div>
        <UCard :ui="{ body: { base: 'grid grid-cols-1' } }" style="padding-left: 6px; padding-right: 6px;" class="nomobile">
        <lincMetro url="arenda-sklada" style="margin-top: 8px;width: 100%;" />
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