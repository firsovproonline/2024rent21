<script setup>
import rformBig from '/components/contents/requestForm/big'
import infomap from '/components/contents/info/map/yandex'
    const props = defineProps({
        row: {
            type: Object,
            required: true,
            default:{PHOTO:JSON.stringify([])}
        },      
    });

    const row = computed(()=>{
        return props.row
    })


    const rem = computed(()=>{
        if(props.row && props.row.REM)
            return props.row.REM.split('\n')
        else
            return '================='
    })
    const items = computed(()=>{
        const fotos = []
        JSON.parse(props.row.PHOTO).forEach(item=>{
            fotos.push('/api/photo?puid='+item.PUID+'&title='+item.NAME)
        })
        return fotos
    })
    const carouselRef = ref()
    onMounted(() => {
    setInterval(() => {
      if (!carouselRef.value) return

      if (carouselRef.value.page === carouselRef.value.pages) {
        return carouselRef.value.select(0)
      }

      carouselRef.value.next()
    }, 9000)
  })
  const metro = Object.values(JSON.parse(props.row.METRO))
</script>
<template>
      <UCard :ui="{ body: { base: 'grid grid-cols-1 ffSr' } }" style="width: 100%;background-color: #253a4f17">
          <h1>{{ row.TITLE }}</h1>
        
        </UCard>
  <div style="display: flex;">
    <div>

      <div class="row">

        <div class="col" style="text-align: -webkit-center;">
          <UCard :ui="{ body: { base: 'grid grid-cols-1 ffSr' } }" style="width: 100%;height: 280px;background-color: #f6f6f6">
<!--
<UCarousel style="min-width: 50%;max-width: 100%;" ref="carouselRef"  :items="items" :ui="{ item: 'basis-full', indicators: {
        wrapper: 'relative bottom-0 mt-4'} }" class="rounded-lg overflow-hidden" arrows >
        </UCarousel>

-->
        <UCarousel style="min-width: 100%;max-width: 100%;" ref="carouselRef"
    :items="items"
    :ui="{
      item: 'basis-full',
      container: 'rounded-lg',
      indicators: {
        wrapper: 'relative bottom-0 mt-4 fotoInd2'
      }
    }"
    indicators
    class="w-64 mx-auto"
  >
  
                  <template #default="{ item }">
                    <div :src="item" draggable="false" :style="'background-image: url(\''+item+'\');height:210px;width:100%;background-position: center;background-size: contain;background-repeat: no-repeat;'" ></div>
<!--
                    <img :src="item" class="w-full" draggable="false">
-->
</template>
    <template #indicator="{ onClick, page, active }">
      <UButton color="gray" :variant="active ? 'solid' : 'outline'" size="2xs" class="rounded-full min-w-6 justify-center" style="margin-right: 4px;" @click="onClick(page)" />
    </template>
            </UCarousel>
          </UCard>
        </div>
        <div class="col">
          <UCard :ui="{ body: { base: 'grid grid-cols-1 ffSr' } }" style="width: 100%;height: 100%;background-color: #253a4f17">
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
              <div class="value" style="color: rgb(8, 115, 154);">{{ row.TIP }}</div>
              <div v-if="row.Infrastructure!==''">
                <h1 style="background-color: rgba(225, 225, 225, 0.18);text-align: center;">Рядом</h1>
                <div style="display: flex;">
                  <div v-if="row && row.Infrastructure" class="value">{{ row.Infrastructure.replaceAll('|',' ') }}</div>
                </div>
                <hr>

              </div>
              <div style="display: flex;">
                <div class="label">Площадь:</div>
                <div class="value">{{ row.PL1 }}</div>
              </div>
              <div style="display: flex;">
                <div class="label">Класс:</div>
                <div class="value">{{ row.KLASS }}</div>
              </div>
            
            
            </UCard>

        </div>
      </div>
      <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="margin-bottom: 2px; padding: 0px !important;margin-top: 2px;background-color: #f6f6f6"  >
        <div style="display: flex;flex-wrap: wrap;margin-top: 8px;">
          <div v-for="metroItem in metro" :key="metroItem.METRO" :style="'margin-right: 6px;'+'color:'+metroItem.color">{{ metroItem.METRO }}</div>
        </div>
        <template #footer>
          <div v-for="item in rem" :key="item">{{ item }}</div>
        </template>


      </UCard>
      <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="margin-bottom: 2px; padding: 0px !important;margin-top: 2px;"  >
        <infomap :row="row" />
      
      </UCard>
        <div class="mobileOnly" >
          <rformBig/>
        </div>
<!--
      <UCard v-if="item.listUlita.length > 0" :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="margin-bottom: 12px; padding: 0px !important;margin-top: 12px;">
        <div style="display: flex;flex-wrap: wrap;justify-content: space-between;">
            <div  v-for="row in item.listUlita" :key="row.LATIN">
              <a :href="'/arenda-ofica/ulitca-'+row.LATIN">{{ row.RU}}</a> 
            </div>
        </div>
      </UCard>

-->
    </div>
    <div style="min-width: 300px;margin-left: 12px;" class="nomobile">
      <rformBig />
    </div>
  </div>
</template>
<style >
.ffSr444{
  padding: 0px !important;
}
h1{
  font-weight: bold;
}
.fotoInd{
  position: absolute;
  flex-flow: wrap;
    padding-left: 12px;
    padding-right: 12px;
    margin-bottom: 30px;
    display: flow;
}
.fotoInd2{
  position: absolute;
  flex-flow: wrap;
    padding-left: 12px;
    padding-right: 12px;
    margin-bottom: -30px;
    display: flow;
}
</style>