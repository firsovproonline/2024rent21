<script setup>
    const props = defineProps({
        row: {
            type: Object,
            required: true,
            default:{PHOTO:JSON.stringify([])}
        },
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

 
</script>
<template>
  <div :class=" row.ID % 2 === 0 ? 'ring-gray-200 shadow  row rborderN':'ring-gray-200 shadow  row rborderN'" style="padding-top: 4px;">
    <div class="col" style="text-align: -webkit-center;">
      <div :ui="{ body: { base: 'grid grid-cols-1 ffSr' } }" style="width: 100%;">
        <UCarousel style="min-width: 50%;max-width: 390px;" ref="carouselRef" v-slot="{ item, index }" :items="items" :ui="{ item: 'basis-full',  
        arrows: {wrapper: 'flex items-center justify-between'  } }" class="rounded-lg overflow-hidden" arrows>
          <div class="text-center mx-auto" style="flex: auto;">
          <div :src="item" draggable="false" :style="'background-image: url('+item+');height:210px;width:100%;background-position: center;background-size: contain;background-repeat: no-repeat;'" ></div>
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
                  <UButton block :to="'/ofisnaya-nedvizhimost/'+row.ID">Подробнее</UButton>
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


</style>