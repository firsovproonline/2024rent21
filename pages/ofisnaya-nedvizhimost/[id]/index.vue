<script setup>
import infoOb from '/components/contents/dbItem/im_object/info'
const route = useRoute()
const item = await $fetch( `/api/im_object`, {
  method: 'GET',
  params: {
    page: 1,
    perPage: 15,
    id:route.params.id,
    dopinfo:1
  }
})
const row = item.rows[0]
//console.log(item)
const rem = computed(()=>{
  return row.REM.split('\n')
})



definePageMeta(
  {
    layout: 'universal',
    pageType: 1,
    meta: {
            titleMobile:'Информация о помещении'
        }, 
    }
)


</script>
<template>

<infoOb v-if="row" :row="row" :important="item.important"/>


</template>
<style>
.w1{
  padding: 0px;
}
</style>