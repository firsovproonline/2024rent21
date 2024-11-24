<script setup>
    prerenderRoutes(["/sitemap"]);
    definePageMeta({
        layout: 'universal',
        meta: {}          
    });
    useRouter().currentRoute.value.meta.meta.titleMobile = 'Аренда офисов От Собственников'
    useRouter().currentRoute.value.meta.meta.title = 'Аренда офиса в Москве от собственника без комиссии, Предложения по аренде офисов в Москве без посредников, Помогаем Снять офис в Москве в Бизнес Центрах и Особняках.'
    useRouter().currentRoute.value.meta.meta.description = `Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы`

    import smallItem from '/components/contents/dbItem/im_object/small/index.vue'
    import bigItem from '/components/contents/dbItem/im_object/big/index.vue'
    import largeItem from '/components/contents/dbItem/im_object/large/index.vue'
    import mobileItem from '/components/contents/dbItem/im_object/mobile/index.vue'
    import lincMetro from '/components/contents/lincMetro/index.vue'
    import findLinc from '/components/contents/find/linc/tip'
    import findMobile from '/components/contents/find/mobile'

    import callPromo from '/components/contents/callPromo'
    import rformSmall from '/components/contents/requestForm/small'
    import bigFind from '/components/contents/find/big/index.vue'
    const { $viewport } = useNuxtApp()
//    console.log(useNuxtApp())
    let rows =null
    const page = ref(1)
    let PopularRows = null
    let LastRows = null
    LastRows = await $fetch( `/api/im_object`, {
      method: 'GET',
      params: {
        page: 1,
        perPage: 7,
        //orderBy:'ID ASC'
      }
    })

    rows = await $fetch( `/api/im_object`, {
      method: 'GET',
      params: {
        page: 1,
        perPage: 15,
        orderBy:'ID DESC',
        TIP:'Офис',
        OPP:'Аренда'
      }
    })

    const total = computed(()=>{
        return rows.total
    })
    PopularRows = await $fetch( `/api/im_object`, {
      method: 'GET',
      params: {
        page: 1,
        perPage: 4,
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
  
 Если вам или вашей фирме требуется быстро найти и снять офис в Москве, <span style="color:red">ЗВОНИТЕ   Тел : 8 (495) 500-75-11</span>  Наши специалисты помогут вам  снять офис или другую коммерческую недвижимость в Москве!.` }
      ],
      bodyAttrs: {
        class: 'test'
      },
      script: [ ]
    })
</script>
<template>
  <div style="display: flex;">
    <div>
      <div  v-if="!$viewport.isLessThan('tablet')">
        <bigFind />
        <div style="height: 12px;"></div>
        <findLinc tip="ALL"  />
        <div style="height: 12px;"></div>
        <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="margin-bottom: 12px; padding: 0px !important;"  >
        <div class="findmap">
          <div v-if="!$viewport.isLessThan('tablet')" class="header" >
            <p><strong><span style="font-family: 'times new roman', times; font-size: small;">БОЛЬШОЙ ВЫБОР АКТУАЛЬНЫХ ПРЕДЛОЖЕНИЙ ПО АРЕНДЕ ОФИСОВ И ОСОБНЯКОВ, СКЛАДОВ И ОБЪЕКТОВ ТОРГОВОЙ НЕДВИЖИМОСТИ В МОСКВЕ.</span></strong></p>
            <p><span style="font-family: 'times new roman', times; font-size: small;">Также представлены в большом колличестве предложения: Аренда офиса без комиссии от собственника</span></p>
            <p><strong><span style="font-family: 'times new roman', times; font-size: small;">СРОЧНЫЙ ПОИСК И ПОДБОР ОФИСНЫХ, СКЛАДСКИХ И ТОРГОВЫХ ПОМЕЩЕНИЙ В МОСКВЕ!</span></strong></p>
            <p><span style="font-family: 'times new roman', times; font-size: small;">Если вам или вашей фирме требуется быстро найти и снять офис в Москве, </span><span style="color: #ff0000;"><strong style="color:#ff0000">ЗВОНИТЕ Тел.: 8 (495) 135-10-11</strong></span></p>
            <p><span style="font-family: 'times new roman', times; font-size: small;">Наши специалисты помогут оперативно вам снять офис и другую коммерческую недвижимость в Москве!</span></p>
            <p><span style="font-family: 'times new roman', times; font-size: small;">&nbsp;</span></p>
          </div>
        </div>
      </UCard>

      </div>
      <div v-if="!$viewport.isLessThan('tablet')">
        <div v-for="row in LastRows.rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
          <bigItem :item="row"/>
        </div>



      </div>

      <div v-if="$viewport.isLessThan('tablet')" >
       
          <findMobile />
          <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="margin: 8px; padding: 0px !important;background-color: #253a4f17;background-image: url('/img/ofis2BG.png');background-size: cover;background-position: center;"  >
          <div>
            <div style="min-height: 220px;" class="divM">
                <h1 style="color: #bb6509;">Офисная недвижимость</h1>
                <div style="padding-left: 8px;padding-top: 8px;">
                  <div><a href="/arenda-ofisa" class="divM">Аренда офисных помещений</a></div>
                  <div><a href="/prodazha-ofisy">Продажа офисов</a></div>
                  <div><a href="/arenda-osobnyak">Aренда особняков</a></div>
                  <div><a href="/prodazha-osobnyak">Продажа особняков</a></div>
                  <div><a href="/arenda-gostinitsa">Аренда помещений под Гостиницу</a></div>
                  <div><a href="/arenda-bank">Аренда помещений под банк</a></div>
                  <div><a href="/prodazha-bank">Продажа помещений под банк</a></div>
                  <div><a href="/biznes-centry-moskva">Бизнес Центры Москвы</a></div>
                  <!--
                  <div><a href="/arenda-ofisa/metro">Аренда офисов по метро</a></div>

                  -->

                </div>
            </div>
          
          </div>
        </UCard>
        <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="margin: 8px; padding: 0px !important;background-color: #253a4f17;background-image: url('/img/magazin1BG.png');background-size: cover;"  >
          <div>
            <div style="min-height: 220px;" class="divM">
              <h1 style="color: #bb6509;">Торговая недвижимость</h1>
              <div style="padding-left: 8px;padding-top: 8px;">
                <div><a href="/arenda-kafe-restoran">Аренда помещений под Кафе, Ресторан</a></div>
                <div><a href="/arenda-magazina">Аренда помещений под магазин</a></div>
                <div><a href="/prodazha-kafe-restoran">Продажа помещений под Ресторан</a></div>
                <div><a href="/arenda-psn">Аренда ПСН</a></div>
                <div><a href="/prodazha-psn">Продажа ПСН</a></div>
                <div><a href="/torgovye-centry">Торговые центры</a></div>
                <div><a href="/arenda-medicinskij-centr">Аренда медицинский центер</a></div>
              </div>  
            </div>
          
          </div>
        </UCard>
        <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="margin: 8px; padding: 0px !important;background-color: #253a4f17;background-image: url('/img/skladBG.png');background-size: cover;"  >
          <div>
            <div style="min-height: 220px;" class="divM">
              <h1 style="color: #bb6509;">Складская недвижимость</h1>
              <div style="padding-left: 8px;padding-top: 8px;">
                <div><a href="/arenda-sklada-moskva">Аренда склада в Москве</a></div>
                <div><a href="/arenda-sklad-moskovskaya-oblast">Аренда склада в Московской области</a></div>
                <div><a href="/skladskie-kompleksy">Cкладские комплексы</a></div>
                <div><a href="/otvetstvennoe-hranenie">Ответственное хранение</a></div>
                <div><a href="/arenda-pomeshhenij-pod-proizvodstvo">Аренда помещений под производство</a></div>
                <div><a href="/аrenda-holodilnyh-i-morozilnyh-skladov">Аренда холодильных и морозильных складов</a></div>
                <div><a href="/arenda-otkrytoj-ploshhadki">Аренда открытой площадки</a></div>
                <div><a href="/prodazha-sklada">Продажа складов</a></div>
              </div>
            </div>
          
          </div>
        </UCard>



        <div v-for="row in rows.rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >

          <mobileItem :row="row" :template="1"/>


        </div>
        <UPagination v-model="page" :page-count="10" :total="total" :to="(page) => ('/arenda-ofisa/page'+page)" style="margin-top: 12px;justify-content: center;" />
      </div>

    </div>

    <div v-if="!$viewport.isLessThan('tablet')" style="min-width: 265px;margin-left: 12px;max-width: 265px;" >
      <callPromo />
      <rformSmall />
      <div class="head">Популярные</div>
      <div v-for="row in PopularRows.rows" :key="row.ID" :class=" row.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
        <smallItem :row="row"/>
      </div>
    </div>    
  </div>
  <div v-if="!$viewport.isLessThan('tablet')">
    <div class="head">Специальные предложения</div>
        <div v-for="row1 in rows.rows" :key="row1.ID" :class=" row1.ID % 2 === 0 ? 'rowItem rborder':'rowItem rborder1'" >
          <largeItem :item="row1" />
        </div>
        <UCard :ui="{ body: { base: 'grid grid-cols-1' } }" style="padding-left: 6px; padding-right: 6px;" class="nomobile">

        <lincMetro url="arenda-ofisa" style="margin-top: 8px;width: 100%;" />
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


.divM a{
  color: #004e69;
  font-weight: bolder;
}
</style>