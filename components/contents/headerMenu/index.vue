<script setup>
    const route = useRoute()

</script>
<template>
<div class="maindiv">
    <div v-if="route.fullPath =='/torgovaya-nedvizhimost' ">
        <h1>Торговая недвижимость Москвы, Аренда и Продажа.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников Москвы. Мы помогаем снять офис в Москве</p></div>
    </div>
    <div v-if="route.fullPath =='/arenda-ofisa' || route.fullPath == '/ofisy'">
        <h1>Аренда офиса в Москве От Собственника и Без Комиссии, Аренда офисов и помещений по всей Москве !</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников Москвы. Мы помогаем снять офис в Москве</p></div>
    </div>
    <div v-if="route.fullPath == '/'">
        <h1>Аренда офиса в Москве от собственника без комиссии, Предложения по аренде офисов в Москве без посредников, Помогаем Снять офис в Москве в Бизнес Центрах и Особняках.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/arenda-ofis-cao') != -1">
        <h1>Аренда офисов в Москве ЦАО, Снять офис в ЦАО.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/arenda-ofis-uvao') != -1">
        <h1>Аренда офисов в Москве ЮВАО, Снять офис в ЮВАО.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/arenda-ofis-vao') != -1">
        <h1>Аренда офисов в Москве ВАО, Снять офис в ВАО.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/arenda-ofis-svao') != -1">
        <h1>Аренда офисов в Москве СВАО, Снять офис в СВАО.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/arenda-ofis-sao') != -1">
        <h1>Аренда офисов в Москве САО, Снять офис в САО.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/arenda-ofis-szao') != -1">
        <h1>Аренда офисов в Москве СЗАО, Снять офис в СЗАО.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/arenda-ofis-zao') != -1">
        <h1>Аренда офисов в Москве ЗАО, Снять офис в ЗАО.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/arenda-ofis-uzao') != -1">
        <h1>Аренда офисов в Москве ЮЗАО, Снять офис в ЮЗАО.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/arenda-ofis-uao') != -1">
        <h1>Аренда офисов в Москве ЮАО, Снять офис в ЮАО.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/prodazha-ofisy') != -1">
        <h1>Продажа офисов в Москве, купить офисное помещение в Москве.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/arenda-osobnyak') != -1">
        <h1>аренда особняков в москве, снять особняк в москве.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/prodazha-osobnyak') != -1">
        <h1>продажа особняков в москве, купить особняк в москве.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/arenda-gostinitsa') != -1">
        <h1>аренда помещений под гостиницу, хостел, общежитие в Москве</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/arenda-bank') != -1">
        <h1>аренда банковских помещений в Москве, Снять помещение под банк в Москве.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/prodazha-bank') != -1">
        <h1>Продажа банковских помещений, Купить помещение под банк.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/biznes-centry-moskva') != -1">
        <h1>Бизнес Центры Москвы.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/ofis-do12000-rur') != -1">
        <h1>до 12000 руб./м<sup>2</sup>/год.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/ofis-do15000-rur') != -1">
        <h1>до 15000 руб./м<sup>2</sup>/год.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/ofis-do20000-rur') != -1">
        <h1>до 20000 руб./м<sup>2</sup>/год.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/ofis-do25000-rur') != -1">
        <h1>до 25000 руб./м<sup>2</sup>/год.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/ofis-do30000-rur') != -1">
        <h1>до 30000 руб./м<sup>2</sup>/год.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/ofis-ot30000-rur') != -1">
        <h1>от 30000 руб./м<sup>2</sup>/год.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    <div v-if="route.fullPath.indexOf('/ofisnaya-nedvizhimost') != -1">
        <h1>Офисная недвижимость Москвы, Аренда и Продажа.</h1>							
        <div class="module" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
    </div>
    


    




    <div style="display: flex;justify-content: flex-start;margin-top: 8px;" class="menurentH">
        <div class="item item3">
            <a href="/ofisnaya-nedvizhimost">Офисная недвижимость</a>
        </div>
        <div class="item item3">
            <a href="/torgovaya-nedvizhimost">Торговая недвижимость</a>
        </div>
        <div class="item item3">
            <a href="/skladskaya-nedvizhimost">Складская недвижимость</a>
        </div>
        <div class="item item3">
            <a class="alert" href="/sobstvennikam">Собственникам</a>
        </div>

    </div>

		
        <div style="display: flex; justify-content: flex-start;margin-top: 8px;">
<div class="itemA"><a class="biznesheader" href="/biznes-centry-moskva">Бизнес Центры Москвы</a></div>
<div class="itemA"><a class="biznesheader" href="/torgovye-centry">Торговые центры</a></div>
<div class="itemA"><a class="biznesheader" href="/skladskie-kompleksy">Cкладские комплексы</a></div>

        </div>
											
    </div>
</template>
<style scoped >
.item3{
    margin-left: 3px !important;
}
.itemA{
    margin-left: 8px;
}
.menurentH .item{

    background-color: #e6e6e6;
    display: table-cell;
    margin: 0 0 0 0;
    border-bottom: 1px solid #dad6d7;
    /* background-image: url(/templates/rent21/images/tab_bg.png); */
    background-position: right;
    background-repeat: no-repeat;
    padding-top: 4px;
    padding-bottom: 4px;
    text-align: center;
}

.maindiv h1 {
    font-size: 16px;
    color: #353535;
    text-align: justify;
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
    line-height: 15px;
}
.module {
    line-height: 16px;
    font-size: 14px;
    font-family: 'Times New Roman', Times, serif;    
}

.maindiv .module p {
    color: #707070;
    letter-spacing: -0.7px;
    word-spacing: -1px;
    padding-top: 2px;
    font-weight: light;
}

.hmenu1 {
    min-width: 700px !important;
    display: table;
}

.hmenu1 li {
    display: table-cell;
    margin-left: 5px;
}
.moduletab li {
    background-color: #e6e6e6;
    display: table-cell;
    margin: 0 0 0 0;
    border-bottom: 1px solid #dad6d7;
    /* background-image: url(/templates/rent21/images/tab_bg.png); */
    background-position: right;
    background-repeat: no-repeat;
    padding-right: 16px;
    padding-top: 4px;
    padding-bottom: 4px;
    text-align: center;
    min-width: 23%;
}

.moduletab li a {
    font-size: 14px;
    text-decoration: none;
    color: #000000;
    padding-top: 4px;
    padding-bottom: 4px;
    /* background: url(/templates/rent21/images/tab_bgall.png); */
}

</style>