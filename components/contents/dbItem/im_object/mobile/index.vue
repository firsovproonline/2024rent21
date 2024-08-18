<script setup>
    const props = defineProps({
        row: {
            type: Object,
            required: true,
            default:{PHOTO:JSON.stringify([])}
        },
        infoUrl:{
            type: String,
            default:'/ofisnaya-nedvizhimost/'
        },
        template:{
          type:Number,
          default: 0
        }         
    });
    //https://static-maps.yandex.ru/v1?ll=37.620070,55.753630&lang=ru_RU&size=450,450&z=13&pt=37.620070,55.753630,pmwtm1~37.64,55.76363,pmwtm99&apikey=YOUR_API_KEY
//  "https://static-maps.yandex.ru/1.x/?ll=" + row.LAT + "," + row.LNG + "&z=16&l=map&size=360,200&pt=" + row.LAT + "," + row.LNG

    const items = []
    JSON.parse(props.row.PHOTO).forEach(item=>{
        if(items.length==1){
          items.push("https://static-maps.yandex.ru/1.x/?ll=" + props.row.LAT + "," + props.row.LNG + "&z=17&l=map&size=360,200&pt=" + props.row.LAT + "," + props.row.LNG)  
        }
        items.push('/api/photo?puid='+item.PUID+'&title='+item.NAME)
    })
    const route = useRoute()
    const consoleHitOn =()=>{
      const route = useRoute()
      console.log('fffff',route)
      navigateTo(props.infoUrl+props.row.ID)
    }
    const metro = Object.values(JSON.parse(props.row.METRO))
    //console.log(metro )
</script>
<template>
  <div :class=" row.ID % 2 === 0 ? 'ring-gray-200 shadow  row rborderN ':'ring-gray-200 shadow  row rborderN '" style="padding-top: 4px;margin-top: 7px;margin-right: 8px;margin-left: 8px;width: 95vw;"  v-on:click="consoleHitOn" >
    <div class="col" style="text-align: -webkit-center;">
      <div v-if="template==0" :ui="{ body: { base: 'grid grid-cols-1 ffSr' } }" style="width: 100%;">
        <div class="adrInfo" v-on:dblclick="consoleHitOn">
              <div>Город {{ row.GOROD }} </div>
              <div>{{ row.ULITCA }} {{ row.DOM }} </div>
              <div>{{ row.NALOGNAME }}</div>
              <div>{{ row.TIPZD }}</div>
              <div>Класс {{ row.KLASS }}</div>
        </div>

        <UCarousel style="min-width: 100%;max-width: 100%;" ref="carouselRef"
          :items="items"
          :ui="{
            item: 'basis-full',
            container: 'rounded-lg',
            indicators: {
              wrapper: 'relative bottom-0 mt-4 fotoInd'
            }
          }"
          indicators
          class="w-64 mx-auto"
        >
          <template #default="{ item }">
            <div :src="item" draggable="false" :style="'background-color:#8080804a;background-image: url(\''+item+'\');height:210px;width:100%;background-position: center;background-size: contain;background-repeat: no-repeat;'" ></div>
          </template>

          <template #indicator="{ onClick, page, active }">
            <UButton color="gray" :variant="active ? 'solid' : 'outline'" size="2xs" class="rounded-full min-w-6 justify-center" style="margin-right: 4px;" @click="onClick(page)" />
          </template>
        </UCarousel>

      <div>
  <NuxtLink style="display: flex;justify-content: space-between;align-items: flex-end;margin-top: 6px;" :to="infoUrl+row.ID" >
                <div>
                  <div style="display: flex;align-items: center;">
                    <div class="value" style="color: #bb6509;">{{ row.OPP }} {{ row.TIP }} площадь {{ row.PL1 }} м<sup>2</sup></div>
                  </div>
                  <div style="display: flex;align-items: center;">
                    <div class="value">Цена аренды в месяц {{ row.CENA_AR_MES_ALL }} руб.</div>
                  </div>

                  <div style="display: flex;align-items: center;">
                    <div class="value">Этаж {{ row.ETAG }}</div>
                  </div>
                </div>
                <div>
                  <div color="white" >презнтация / заявка</div>
                </div>
              </NuxtLink>
</div>

<!--
        <UCarousel style="min-width: 50%;max-width: 390px;" ref="carouselRef" v-slot="{ item, index }" :items="items" :ui="{ item: 'basis-full',  
        arrows: {wrapper: 'flex items-center justify-between'  } }" class="rounded-lg overflow-hidden" arrows>
          <div class="text-center mx-auto" style="flex: auto;">
          <div :src="item" draggable="false" :style="'background-image: url(\''+item+'\');height:210px;width:100%;background-position: center;background-size: contain;background-repeat: no-repeat;'" ></div>
          <div style="padding-left: 12px;padding-right: 12px;margin-top: 8px;">
            <div v-if="index==0" clas="infoPIm">
              <div style="display: flex;justify-content: space-between;align-items: flex-end;">
                <div>
                  <div style="display: flex;">
                    <div class="label">Город:</div>
                    <div class="value">{{ row.GOROD }}</div>
                  </div>
                  <div style="display: flex;">
                    <div class="label">Район:</div>
                    <div class="value">{{ row.OKRUG }}</div>
                  </div>
                  <div style="display: flex;">
                    <div class="label">Округ:</div>
                    <div class="value">{{ row.RAJON }}</div>
                  </div>
                  <div style="display: flex;">
                    <div class="label">Налоговая:</div>
                    <div class="value">{{ row.NALOGNAME }}</div>
                  </div>
                </div>
                <div>
                  <UButton block :to="infoUrl+row.ID">Подробнее</UButton>
                </div>
              </div>

          </div>

          <div v-if="index==1" clas="infoPIm">
            <div style="display: flex;">
              <div class="label">Площадь:</div>
              <div class="value">{{ row.PL1 }}</div>
            </div>
            <div style="display: flex;">
              <div class="label">Класс:</div>
              <div class="value">{{ row.KLASS }}</div>
            </div>
          </div>

          <div v-if="index==2" clas="infoPIm">
            <div v-if="row.Infrastructure!==''">
              <h1 style="background-color: rgba(225, 225, 225, 0.18);text-align: center;">Рядом</h1>
              <div style="display: flex;">
                <div class="value">{{ row.Infrastructure.replaceAll('|',' ') }}</div>
              </div>
            </div>
            <div v-else>
              <UButton block>Позвонить</UButton>
            </div>
          </div>


          <div v-if="index<items.length && index> 2" clas="infoPIm">
            <div >
              <UButton block>Позвонить</UButton>
            </div>
          </div>


          </div>



        </div>
        </UCarousel>

-->
      </div>
      <div v-if="template==1"  >
        <div>
          <div style="display: flex;align-items: center;font-weight: bolder;">
            <div class="value" style="color: #bb6509;">{{ row.OPP }} {{ row.TIP }} площадь {{ row.PL1 }} м<sup style="color: #bb6509;">2</sup></div>
          </div>
          <div style="display: flex;align-items: center;">
            <div class="value">Цена аренды в месяц {{ row.CENA_AR_MES_ALL }} руб.</div>
          </div>

          <div style="display: flex;align-items: center;">
            <div class="value">Этаж {{ row.ETAG }}</div>
          </div>
        </div>


        <UCarousel style="min-width: 100%;max-width: 100%;margin-top: 6px;" ref="carouselRef"
          :items="items"
          :ui="{
            item: 'basis-full',
            container: 'rounded-lg',
            indicators: {
              wrapper: 'relative bottom-0 mt-4 fotoInd'
            }
          }"
          indicators
          class="w-64 mx-auto"
        >
          <template #default="{ item }">
            <div :src="item" draggable="false" :style="'background-color:#8080804a;background-image: url(\''+item+'\');height:210px;width:100%;background-position: center;background-size: contain;background-repeat: no-repeat;'" ></div>
          </template>

          <template #indicator="{ onClick, page, active }">
            <UButton color="gray" :variant="active ? 'solid' : 'outline'" size="2xs" class="rounded-full min-w-6 justify-center" style="margin-right: 4px;" @click="onClick(page)" />
          </template>
        </UCarousel>
        <div class="adrInfo1 divPclick" style="display: flex;justify-content: space-between;align-items: flex-start;">
          <div style="margin-top: 6px;">
            <div>Город {{ row.GOROD }} </div>
            <div>{{ row.ULITCA }} {{ row.DOM }} </div>
            <div>{{ row.NALOGNAME }}</div>
            <div>{{ row.TIPZD }}</div>
            <div>Класс {{ row.KLASS }}</div>
          </div>
        </div>
        <hr style="margin-top: 6px;"/>
        <div class="adrInfo1 divPclick" style="display: flex;flex-wrap: wrap;margin-top: 8px;">
          <div v-for="metroItem in metro" :key="metroItem.METRO" :style="'margin-right: 6px;'+'color:'+metroItem.color">{{ metroItem.METRO }}</div>

        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
    .row{
        display: block;
        margin-bottom: 4px;
    }
    .col{
      padding: 6px;
    }

    .rborderN{
  background-image: url("/img/item_news_bg1.png") !important;
  border-radius: 15px; /* Уголки */
  padding: 4px;
  background-color: #f7f7f7;
}
.infoPIm * {
  color: #000000;
}
.rborderN1{
  background-image: url("/img/item_news_bg2.png") !important;
  border-radius: 15px; /* Уголки */
  padding: 4px;

}
.rborderN1 * {
  color: #fffaf0;
}
.adrInfo1{
  text-align: left;
}

.blClick .divPclick11{
  pointer-events: none;
}
</style>