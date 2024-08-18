<script setup>
import infoOb from '/components/contents/dbItem/im_object/info'
const route = useRoute()
const item = await $fetch( `/api/im_object`, {
  method: 'GET',
  params: {
    page: 1,
    perPage: 15,
    id:route.params.id,
    dopinfo:1,
    TIP:'Офис'
  }
})
const row = item.rows[0]
//console.log(row)
const rem = computed(()=>{
  return row.REM.split('\n')
})
const ob={
  layout: 'universal',
    pageType: 1,
    titleMobile:rem
}
console.log(definePageMeta(
  {
    layout: 'universal',
    pageType: 1,
    titleMobile: 'ddddd'
    }

    
)
)

</script>
<template>
  <infoOb :row="row"/>
</template>
<style>
.w1{
  padding: 0px;
}
</style>