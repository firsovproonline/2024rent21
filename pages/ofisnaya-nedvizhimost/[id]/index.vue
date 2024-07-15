<script setup>
import rformBig from '/components/contents/requestForm/big'
import infomap from '/components/contents/info/map/yandex'
    definePageMeta({
        layout: 'mobile',
    });
    const route = useRoute()
    const item = await $fetch( `/api/im_object`, {
      method: 'GET',
      params: {
        page: 1,
        perPage: 5,
        id:route.params.id,
        dopinfo:1
      }
    })
    const row = item.rows[0]
    //console.log(row)
    const rem = computed(()=>{
      return row.REM.split('\n')
    })
    const items = []
    let c = 0
    JSON.parse(row.PHOTO).forEach(item=>{
      if(c<78){
        items.push('/api/photo?puid='+item.PUID+'&title='+item.NAME)
        c++
      }
    })



    const photos = JSON.parse(row.PHOTO)
    const carouselRef = ref()

    onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})

    //console.log(item)



</script>
<template>
  <div style="display: flex;">
    <div>
      <div class="row">
        <div class="col" style="text-align: -webkit-center;">
          <UCard :ui="{ body: { base: 'grid grid-cols-1 ffSr' } }" style="width: 100%;">
            <UCarousel style="min-width: 50%;max-width: 100%;" ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" arrows>
              <img :src="item" draggable="false">
            </UCarousel>
          </UCard>
        </div>
        <div class="col">
          <UCard :ui="{ body: { base: 'grid grid-cols-1 ffSr' } }" style="width: 100%;height: 100%;">
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
                  <div class="value">{{ row.Infrastructure.replaceAll('|',' ') }}</div>
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
      <UCard :ui="{ body: { base: 'grid grid-cols-2 px-1' } }" style="margin-bottom: 12px; padding: 0px !important;margin-top: 12px;"  >
        <template #header>
          <h1>{{ row.TITLE }}</h1>
        </template>

        <template #footer>
          <div v-for="item in rem" :key="item">{{ item }}</div>
        </template>


      </UCard>
      <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="margin-bottom: 12px; padding: 0px !important;margin-top: 12px;"  >
        <infomap :row="row" />
      
      </UCard>
        <div class="mobileOnly">
          <rformBig/>
        </div>

      <UCard v-if="item.listUlita.length > 0" :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="margin-bottom: 12px; padding: 0px !important;margin-top: 12px;">
        <div style="display: flex;flex-wrap: wrap;justify-content: space-between;">
            <div  v-for="row in item.listUlita" :key="row.LATIN">
              <a :href="'/arenda-ofica/ulitca-'+row.LATIN">{{ row.RU}}</a> 
            </div>
        </div>
      </UCard>
    </div>
    <div style="min-width: 300px;margin-left: 12px;" class="nomobile">
      <rformBig />
    </div>
  </div>

</template>
<style>
.ffSr444{
  padding: 0px !important;
}
h1{
  font-weight: bold;
}
</style>