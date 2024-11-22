<script setup>
    import smap from '/components/contents/find/map/yandex/all/index.vue'
    import callPromo from '/components/contents/callPromo'
    import mobileItem from '/components/contents/dbItem/im_object/mobile/index.vue'
    import rformSmall from '/components/contents/requestForm/small'
    import bigItem from '/components/contents/dbItem/im_object/big/index.vue'
    import bigFind from '/components/contents/find/big/index.vue'
    import lincMetro from '/components/contents/lincMetro/index.vue'
    const { $viewport } = useNuxtApp()
    const nextUrl = '/torgovaya-nedvizhimost'
    const page = ref(1)
    useHead({
        title: 'Аренда помещений под ПСН, Снять помещение свободного назначения .',
        meta: [
            { name: 'keywords', content: 'Rent21 - Доска обьявлений  Предложения по аренде ПСН без комиссии от собственников в Москве  Мы помогаем снять помещение свободного назначения Москвы.' },
            { name: 'description', content: `Rent21 - Доска обьявлений  Предложения по аренде ПСН без комиссии от собственников в Москве  Мы помогаем снять помещение свободного назначения Москвы.` }
        ]
    })
    definePageMeta({
        layout: 'universal',
        meta: {
            titleMobile:'Торговая недвижимость'
        }          
    });
    const findQuery = {
        page: page.value,
        perPage: 10,
        TIP:'Торговая площадь',
    }
    let rows = await $fetch( `/api/im_object`, {
      method: 'GET',
      params: findQuery
    })
    const total = computed(()=>{
        return rows.total
    })




/*
    definePageMeta({
        layout: 'universal',
        pageType: 1,
        type:'Офис',
        opp:'Продажа',
        titleMobile:'Торговая недвижимость Москвы, Аренда и Продажа.',
        title: 'Торговая недвижимость Москвы, Аренда и Продажа.',
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
        TIP:'Торговая площадь'
        //orderBy:'ID ASC'
      }
    })

    rows = await $fetch( `/api/im_object`, {
      method: 'GET',
      params: {
        page: 1,
        perPage: 5,
        TIP:'Торговая площадь',

        orderBy:'ID DESC'
      }
    })
    PopularRows = await $fetch( `/api/im_object`, {
      method: 'GET',
      params: {
        page: 1,
        perPage: 4,
        TIP:'Торговая площадь',
        orderBy:'ROUND(UID)'
      }
    })
    useHead({
      title: 'Торговая недвижимость Москвы, Аренда и Продажа.',
      meta: [
        { name: 'keywords', content: 'Торговая недвижимость Москвы, Аренда и Продажа.' },
        { name: 'description', content: `Торговая недвижимость Москвы, Аренда и Продажа.` }
      ],
      bodyAttrs: {
        class: 'test'
      },
      script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
    })
    */
</script>
<template>

  <div v-if="$viewport.isLessThan('tablet')">
        <div>
            <div v-for="row in rows.rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >

                <mobileItem :row="row" :template="1"/>


            </div>
            <UPagination v-model="page" :page-count="10" :total="total" :to="(page) => (nextUrl+'/page'+page)" style="margin-top: 12px;justify-content: center;" />        
        </div>

    </div> 
    <div v-else>
        <div style="display: flex;">
            <div>
                <UCard :ui="{ body: { base: 'grid grid-cols-3 px-0' } }" style="padding: 0px !important;margin-bottom: 8px;"   >
                  <div>
                    <h1>Торговая недвижимость</h1>
                    <div><a href="/arenda-kafe-restoran">Аренда помещений под Кафе, Ресторан</a></div>
                    <div><a href="/arenda-magazina">Аренда помещений под магазин</a></div>
                    <div><a href="/prodazha-kafe-restoran">Продажа помещений под Ресторан</a></div>
                    <div><a href="/arenda-psn">Аренда ПСН</a></div>
                    <div><a href="/prodazha-psn">Продажа ПСН</a></div>
                    <div><a href="/torgovye-centry">Торговые центры</a></div>
                    <div><a href="/arenda-medicinskij-centr">Аренда медицинский центер</a></div>

                  </div>
                </UCard>   
                <bigFind />         
                <smap style="margin-top: 8px;height: 200px;" />
                <div v-for="row1 in rows.rows" :key="row1.ID" :class=" row1.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
                    <bigItem :item="row1" />
                </div>

              </div>
            <div style="min-width: 265px;margin-left: 12px;max-width: 265px;">
                <callPromo />
                <rformSmall />
            </div>   
        </div>  
        <UCard :ui="{ body: { base: 'grid grid-cols-1' } }" style="margin-top: 8px; padding-left: 6px; padding-right: 6px;" class="nomobile">
          <lincMetro url="arenda-magazina" style="width: 100%;" />
        </UCard>

    </div>


<!--
  <div style="display: flex;">
    <div>
      <div  v-if="!$viewport.isLessThan('tablet')">
        <findLinc tip="Магазин"  />
      </div>

      <div class="head">Последние предложения по аренде и продаже торговых помещений</div>
      <div v-if="!$viewport.isLessThan('tablet')">
        <div v-for="row in LastRows.rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
          <bigItem infoUrl="/torgovaya-nedvizhimost/" :item="row"/>
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
        <smallItem infoUrl="/torgovaya-nedvizhimost/" :row="row"/>
      </div>
    </div>    
  </div>
  <div v-if="!$viewport.isLessThan('tablet')">
    <div class="head">Специальные предложения</div>
        <div v-for="row1 in rows.rows" :key="row1.ID" :class=" row1.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
          <largeItem infoUrl="/torgovaya-nedvizhimost/" :item="row1" />
        </div>
        <UCard :ui="{ body: { base: 'grid grid-cols-1' } }" style="padding-left: 6px; padding-right: 6px;" class="nomobile">
        <lincMetro url="arenda-magazina" style="margin-top: 8px;width: 100%;" />
      </UCard>

  </div>

-->

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