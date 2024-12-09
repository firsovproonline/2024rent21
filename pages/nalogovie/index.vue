<script setup>
definePageMeta(
  {
    layout: 'universal',
    pageType: 1,
    meta: {
            titleMobile:'Информация о помещении'
        }, 
    }
)
    const rowsGet = await $fetch( `/api/spr`, {
      method: 'GET',
      params: {

      }
    })
    console.log(rowsGet)
</script>
<template>
    <div v-for="row in rowsGet.NALOGNAME" :key="row">
        <div>{{ row.NAME }}</div>

    </div>
</template>