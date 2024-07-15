<script setup>
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
  <UCard :ui="{ body: { base: 'grid grid-cols-2 px-1' } }" style="max-width: 690px;min-width: 690px;margin-bottom: 12px; padding: 0px !important;margin-top: 12px;"  >
    <template #header>
      <h1>{{ row.TITLE }}</h1>
    </template>
    <div>
      <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" arrows>
    <img :src="item" style="height: 200px;" draggable="false">
  </UCarousel>

    </div>


      <div class="fdddS">
        <UCard style="margin-left: 12px;padding-left: 6px;" :ui="{ body: { base: 'grid grid-cols-1 ffSr' } }">
          <div style="display: flex;">
            <div class="label">Операция:</div>
            <div class="value">{{ row.OPP }}</div>
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
    <template #footer>
      <h1>{{ row.REM }}</h1>
    </template>


  </UCard>
  <UCard v-if="item.listUlita.length > 0" :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="max-width: 690px;min-width: 690px;margin-bottom: 12px; padding: 0px !important;margin-top: 12px;">
    <div style="display: flex;flex-wrap: wrap;justify-content: space-between;">
        <div  v-for="row in item.listUlita" :key="row.LATIN">
          <a :href="'/arenda-ofica/ulitca-'+row.LATIN">{{ row.RU}}</a> 
        </div>
    </div>
  </UCard>

</template>
<style>
.ffSr444{
  padding: 0px !important;
}
h1{
  font-weight: bold;
}
</style>