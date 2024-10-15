<script setup>
    definePageMeta({
        layout: 'empty',
        pageType: 1,
        type:'Офис',
        opp:'Продажа',
        meta: {
            titleMobile:'Аренда офисов От Собственников'
        }, 
        title: 'Аренда офиса в Москве от собственника без комиссии, Предложения по аренде офисов в Москве без посредников, Помогаем Снять офис в Москве в Бизнес Центрах и Особняках .',
        keywords: 'аренда офиса, аренда офиса от собственника в москве, аренда офисов от собственника в москве,  снять офис, снять офис в москве, аренда офисов, аренда офисов в москве, аренда офиса в москве, аренда офиса без комиссии, аренда офисов без комиссии,  аренда офиса от собственника, аренда офисов от собственника, доска объявлений, аренда офисов без посредников, аренда особняка, аренда особняков, аренда офиса в бизнес центре, аренда офисов в бизнес центрах, аренда офиса без комиссии в москве, аренда офиса в москве собственник.' ,
        description: `Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы`
    });

    useHead({
      bodyAttrs: {
        class: 'testFrame'
      },
      style:[],
      script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
    })




</script>
<template>
    <div style="display: flex;flex-wrap: nowrap; justify-content: center;">
        <iframe class="frame" src="https://rent21.ru" style="width: 1100px;max-width: 1100px; min-width: 1100px; height: 98vh;border: 1px solid;"></iframe>
        <iframe class="frame" src="http://192.168.1.232:3010/" style="width: 1100px;max-width: 1100px;min-width: 1100px;height: 98vh;border: 1px solid;margin-left: 10px;"></iframe>
        <div style="flex: 1 auto;"></div>
    </div>
</template>
<style scoped>
    .frame {
        -ms-zoom: 0.85;
        -moz-transform: scale(0.85);
        -moz-transform-origin: 0 0;
        -o-transform: scale(0.85);
        -o-transform-origin: 0 0;
        -webkit-transform: scale(0.85);
        -webkit-transform-origin: 0 0;
    }

    
</style>