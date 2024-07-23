<script setup>
    definePageMeta({
        layout: 'universal',
        pageType: 1,
        type:'Офис',
        opp:'Продажа',
        titleMobile:'Аренда офиса в Москве от собственника без комиссии',
        title: 'Аренда офиса в Москве от собственника без комиссии, Предложения по аренде офисов в Москве без посредников, Помогаем Снять офис в Москве в Бизнес Центрах и Особняках .',
        keywords: 'аренда офиса, аренда офиса от собственника в москве, аренда офисов от собственника в москве,  снять офис, снять офис в москве, аренда офисов, аренда офисов в москве, аренда офиса в москве, аренда офиса без комиссии, аренда офисов без комиссии,  аренда офиса от собственника, аренда офисов от собственника, доска объявлений, аренда офисов без посредников, аренда особняка, аренда особняков, аренда офиса в бизнес центре, аренда офисов в бизнес центрах, аренда офиса без комиссии в москве, аренда офиса в москве собственник.' ,
        description: `Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы`
    });
    import smallItem from '/components/contents/dbItem/im_object/small/index.vue'
    import bigItem from '/components/contents/dbItem/im_object/big/index.vue'
    import mobileItem from '/components/contents/dbItem/im_object/mobile/index.vue'
    import lincMetro from '/components/contents/lincMetro/index.vue'
    import findLinc from '/components/contents/find/linc/tip'

    import callPromo from '/components/contents/callPromo'
    import rformSmall from '/components/contents/requestForm/small'

    const { $viewport } = useNuxtApp()
    let rows =null
    let PopularRows = null
    rows = await $fetch( `/api/im_object`, {
      method: 'GET',
      params: {
        page: 1,
        perPage: 5,
        orderBy:'ID DESC'
      }
    })
    PopularRows = await $fetch( `/api/im_object`, {
      method: 'GET',
      params: {
        page: 1,
        perPage: 5,
        orderBy:'ROUND(UID)'
      }
    })
    useHead({
      title: 'Аренда офиса в Москве от собственника без комиссии, Предложения по аренде офисов в Москве без посредников, Помогаем Снять офис в Москве в Бизнес Центрах и Особняках .',
      meta: [
        { name: 'keywords', content: 'аренда офиса, аренда офиса от собственника в москве, аренда офисов от собственника в москве,  снять офис, снять офис в москве, аренда офисов, аренда офисов в москве, аренда офиса в москве, аренда офиса без комиссии, аренда офисов без комиссии,  аренда офиса от собственника, аренда офисов от собственника, доска объявлений, аренда офисов без посредников, аренда особняка, аренда особняков, аренда офиса в бизнес центре, аренда офисов в бизнес центрах, аренда офиса без комиссии в москве, аренда офиса в москве собственник.' },
        { name: 'description', content: `АРЕНДА ОФИСА ОТ СОБСТВЕННИКА БЕЗ КОМИССИИ В МОСКВЕ, АРЕНДА ОФИСОВ БЕЗ ПОСРЕДНИКОВ, БИЗНЕС ЦЕНТРЫ МОСКВЫ, СНЯТЬ ОФИС В МОСКВЕ    Бизнес Центры, Административные здания, Бизнес Парки, Офисные особняки  
 
 БОЛЬШОЙ ВЫБОР АКТУАЛЬНЫХ ПРЕДЛОЖЕНИЙ ПО АРЕНДЕ ОФИСОВ И ОСОБНЯКОВ 
 На нашем сайте представлена только Аренда офиса без комиссии от собственника 
  
 СРОЧНЫЙ ПОИСК И ПОДБОР ОФИСНЫХ ПОМЕЩЕНИЙ В МОСКВЕ! 
 Консалтинг, Брокеридж и Реклама Коммерческой недвижимости Москвы 
  
 Если вам или вашей фирме требуется быстро найти и снять офис в Москве, ЗВОНИТЕ   Тел : 8 (495) 500-75-11  Наши специалисты помогут вам  снять офис или другую коммерческую недвижимость в Москве!.` }
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
      <div class="nomobile">
        <findLinc tip="ALL"  />
      </div>
      <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="margin-bottom: 12px; padding: 0px !important;"  >
      <div class="findmap">
                      <div class="header nomobile" >
    <p><strong><span style="font-family: 'times new roman', times; font-size: small;">БОЛЬШОЙ ВЫБОР АКТУАЛЬНЫХ ПРЕДЛОЖЕНИЙ ПО АРЕНДЕ ОФИСОВ И ОСОБНЯКОВ, СКЛАДОВ И ОБЪЕКТОВ ТОРГОВОЙ НЕДВИЖИМОСТИ В МОСКВЕ.</span></strong></p>
    <p><span style="font-family: 'times new roman', times; font-size: small;">Также представлены в большом колличестве предложения: Аренда офиса без комиссии от собственника</span></p>
    <p><strong><span style="font-family: 'times new roman', times; font-size: small;">СРОЧНЫЙ ПОИСК И ПОДБОР ОФИСНЫХ, СКЛАДСКИХ И ТОРГОВЫХ ПОМЕЩЕНИЙ В МОСКВЕ!</span></strong></p>
    <p><span style="font-family: 'times new roman', times; font-size: small;">Если вам или вашей фирме требуется быстро найти и снять офис в Москве, </span><span style="color: #ff0000;"><strong>ЗВОНИТЕ Тел.: 8 (495) 135-10-11</strong></span></p>
    <p><span style="font-family: 'times new roman', times; font-size: small;">Наши специалисты помогут оперативно вам снять офис и другую коммерческую недвижимость в Москве!</span></p>
    <p><span style="font-family: 'times new roman', times; font-size: small;">&nbsp;</span></p>
                      </div>
                      <table width="100%">
                        <tbody><tr>
                          <td><ul class="nav menu ">
    <li class="item-179"><a href="/deshevye-nedorogie-ofisy">Дешевые Недорогие офисы</a></li><li class="item-181"><a href="/arenda-ofisa-klass-a">офисы класса а</a></li></ul>
    </td>
                          <td><ul class="nav menu ">
    <li class="item-180"><a href="/аrenda-moskva-sity">Аренда Москва Сити</a></li><li class="item-182"><a href="/prodazha-moskva-sity">Продажа Москва Сити</a></li></ul>
    </td>
                        </tr>
                      </tbody></table>
      </div>
      </UCard>
      <div class="head">Последние предложения по аренде и продаже помещений</div>
      <div class="nomobile">
        <div v-for="row in rows.rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
          <bigItem :item="row" />
        </div>
      </div>

      <div class="mobileOnly" >
        <div v-for="row in rows.rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
          <mobileItem :row="row" />
        </div>

      </div>
      <UCard :ui="{ body: { base: 'grid grid-cols-1' } }" style="padding-left: 6px; padding-right: 6px;" class="nomobile">
        <lincMetro url="arenda-ofisa" style="margin-top: 8px;width: 100%;" />
      </UCard>
    </div>

    <div style="min-width: 265px;margin-left: 12px;" class="nomobile">
      <callPromo />
      <rformSmall />
      <div class="head">Популярные</div>
      <div v-for="row in PopularRows.rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
        <smallItem :row="row"/>
      </div>
    </div>    
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