<script setup>
    import bigItem from '/components/contents/dbItem/im_object/big/index.vue'
    import lincMetro from '/components/contents/lincMetro/index.vue'
    import findLinc from '/components/contents/find/linc/tip'
    import callPromo from '/components/contents/callPromo'
    import rformSmall from '/components/contents/requestForm/small'
    import popular from '/components/contents/popular'    
    import mobileItem from '/components/contents/dbItem/im_object/mobile/index.vue'
    definePageMeta({
        layout: 'mobile',
    });
    const rows = await $fetch( `/api/im_object`, {
      method: 'GET',
      params: {
        page: 1,
        perPage: 5,
      }
    })
    useHead({
      title: 'Офисная недвижимость Москвы, Аренда и Продажа .',
      meta: [
        { name: 'keywords', content: 'Аренда офисных помещений в Москве  Снять офисное помещение в Москве .' },
        { name: 'description', content: `Аренда офисных помещений в Москве  Снять офисное помещение в Москве .` }
      ],
      bodyAttrs: {
        class: 'test'
      },
      script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
    })
</script>
<template>
  <div class="nomobile">
    <div style="padding-left: 1px;padding-right: 1px;display: flex;" >
      <div>
        <findLinc tip="Офис" />
        <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="margin-bottom: 12px; padding: 0px !important;"  >
          <div class="findmap">
            <div class="header" style="min-width:690px;max-width: 690px;">
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
        <div v-for="row in rows.rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
            <bigItem :item="row" />
        </div>
      </div>
      <div style="width: 300px;text-align: -webkit-right;margin-left: 8px;">
          <callPromo />
          <rformSmall />
          <popular />
      </div>

    </div>

  </div>
  <div class="mobileOnly" >
        <div v-for="row in rows.rows" :key="row.ID"  >
          <mobileItem :row="row" />
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