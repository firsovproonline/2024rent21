<script setup>
    const props = defineProps({
        tip: {
            type: String,
            required: true,
        },
    });
</script>
<template>

<UCard v-if="tip=='Склад'" :ui="{ body: { base: 'grid grid-cols-3 px-0' } }" style="padding: 0px !important;"   >
        <div>
            <h1>Складская недвижимость</h1>
            <div><a href="/arenda-sklada-moskva">Аренда склада в Москве</a></div>
            <div><a href="/arenda-sklad-moskovskaya-oblast">Аренда склада в Московской области</a></div>
            <div><a href="/skladskie-kompleksy">Cкладские комплексы</a></div>
            <div><a href="/otvetstvennoe-hranenie">Ответственное хранение</a></div>
            <div><a href="/arenda-pomeshhenij-pod-proizvodstvo">Аренда помещений под производство</a></div>
            <div><a href="/аrenda-holodilnyh-i-morozilnyh-skladov">Аренда холодильных и морозильных складов</a></div>
            <div><a href="/arenda-otkrytoj-ploshhadki">Аренда открытой площадки</a></div>
            <div><a href="/prodazha-sklada">Продажа складов</a></div>
        </div>
        <div>
            <h1>Склады по шоссе</h1>
            <div><a href="/arenda-sklada-altufevskoe-shosse">Алтуфьевское шоссе</a></div>
            <div><a href="/arenda-sklada-varshavskoe-shosse">Варшавское шоссе</a></div>
            <div><a href="/arenda-sklada-gorkovskoe-shosse">Горьковское шоссе</a></div>
            <div><a href="/arenda-sklada-volokolamskoe-shosse">Волоколамское шоссе</a></div>
            <div><a href="/arenda-sklada-dmitrovskoe-shosse">Дмитровское шоссе</a></div>
            <div><a href="/arenda-sklada-kievskoe-shosse">Киевское шоссе</a></div>
            <div><a href="/arenda-sklada-kaluzhskoe-shosse">Калужское шоссе</a></div>
            <div><a href="/arenda-sklada-kashirskoe-shosse">Каширское шоссе</a></div>
            <div><a href="/arenda-sklada-leningradskoe-shosse">Ленинградское шоссе</a></div>
            <div><a href="/arenda-sklada-novoryazanskoe-shosse">Новорязанское шоссе</a></div>
            <div><a href="/arenda-sklada-novorizhskoe-shosse">Новорижское шоссе</a></div>
            <div><a href="/arenda-sklada-pyatnitskoe-shosse">Пятницкое шоссе</a></div>
            <div><a href="/arenda-sklada-shhelkovskoe-shosse">Щелковское шоссе</a></div>
            <div><a href="/arenda-sklada-yaroslavskoe-shosse">Ярославское шоссе</a></div>
            <div><a href="/arenda-sklada-ehntuziastov-shosse">Энтузиастов Шоссе</a></div>
        </div>
        <div>
            <h1>Склады по типу</h1>
            <div><a href="/arenda-teplogo-sklada">Аренда теплого склада</a></div>
            <div><a href="/arenda-holodnogo-sklada">Аренда холодного склада</a></div>
            <div><a href="/arenda-sklada-zhd-vetka">Склады с ЖД веткой</a></div>
            <div><a href="/arenda-sklada-s-kran-balkoj">Склады с Кран Балкой</a></div>
            <div><a href="/arenda-sklada-klassa-a">Аренда склада класса А</a></div>
            <div><a href="/arenda-aptechnogo-i-farmatsevticheskogo-sklada">Аптечные и Фармацевтические склады.</a></div>
            <div><a href="/prodazha-avtomojka">Продажа Автомойки</a></div>
        </div>
    </UCard>

    <UCard v-if="tip=='Офис'" :ui="{ body: { base: 'grid grid-cols-3 px-0' } }" style="padding: 0px !important;"   >
        <div>
            <h1>Офисная недвижимость</h1>
            <div><a href="/arenda-ofisa">Аренда офисных помещений</a></div>
            <div><a href="/prodazha-ofisy">Продажа офисов</a></div>
            <div><a href="/arenda-osobnyak">Aренда особняков</a></div>
            <div><a href="/prodazha-osobnyak">Продажа особняков</a></div>
            <div><a href="/arenda-gostinitsa">Аренда помещений под Гостиницу</a></div>
            <div><a href="/arenda-bank">Аренда помещений под банк</a></div>
            <div><a href="/prodazha-bank">Продажа помещений под банк</a></div>
            <div><a href="/biznes-centry-moskva">Бизнес Центры Москвы</a></div>
            <div><a href="/arenda-ofisa/metro">Аренда офисов по метро</a></div>
        </div>
        <div>
            <h1>Аренда офисов по районам</h1>
            <div><a href="/arenda-ofis-cao">Аренда офиса ЦАО</a></div>
            <div><a href="/arenda-ofis-uvao">Аренда офиса ЮВАО</a></div>
            <div><a href="/arenda-ofis-vao">Аренда офиса ВАО</a></div>
            <div><a href="/arenda-ofis-svao">Аренда офиса СВАО</a></div>
            <div><a href="/arenda-ofis-sao">Аренда офиса САО</a></div>
            <div><a href="/arenda-ofis-szao">Аренда офиса СЗАО</a></div>
            <div><a href="/arenda-ofis-zao">Аренда офиса ЗАО</a></div>
            <div><a href="/arenda-ofis-uzao">Аренда офиса ЮЗАО</a></div>
            <div><a href="/arenda-ofis-uao">Аренда офиса ЮАО</a></div>
        </div>
        <div>
            <h1>Предложения по аренде офисов по цене</h1>
            <div><a href="/ofis-do12000-rur">до 12000 руб./кв.м./год.</a></div>
            <div><a href="/ofis-do15000-rur">до 15000 руб./кв.м./год.</a></div>
            <div><a href="/ofis-do20000-rur">до 20000 руб./кв.м./год.</a></div>
            <div><a href="/ofis-do25000-rur">до 25000 руб./кв.м./год.</a></div>
            <div><a href="/ofis-do30000-rur">до 30000 руб./кв.м./год.</a></div>
            <div><a href="/ofis-ot30000-rur">от 30000 руб./кв.м./год.</a></div>
        </div>
    </UCard>
    <UCard v-if="tip=='ALL'" :ui="{ body: { base: 'grid grid-cols-3 px-0' } }" style="padding: 0px !important;"   >
        <div>
            <h1>Офисная недвижимость</h1>
            <div><a href="/arenda-ofisa">Аренда офисных помещений</a></div>
            <div><a href="/prodazha-ofisy">Продажа офисов</a></div>
            <div><a href="/arenda-osobnyak">Aренда особняков</a></div>
            <div><a href="/prodazha-osobnyak">Продажа особняков</a></div>
            <div><a href="/arenda-gostinitsa">Аренда помещений под Гостиницу</a></div>
            <div><a href="/arenda-bank">Аренда помещений под банк</a></div>
            <div><a href="/prodazha-bank">Продажа помещений под банк</a></div>
            <div><a href="/biznes-centry-moskva">Бизнес Центры Москвы</a></div>
            <div><a href="/arenda-ofisa/metro">Аренда офисов по метро</a></div>
        </div>
        <div>
            <h1>Торговая недвижимость</h1>
            <div><a href="/arenda-kafe-restoran">Аренда помещений под Кафе, Ресторан</a></div>
            <div><a href="/arenda-magazina">Аренда помещений под магазин</a></div>
            <div><a href="/prodazha-kafe-restoran">Продажа помещений под Ресторан</a></div>
            <div><a href="/arenda-psn">Аренда ПСН</a></div>
            <div><a href="/prodazha-psn">Продажа ПСН</a></div>
            <div><a href="/torgovye-centry">Торговые центры</a></div>
            <div><a href="/arenda-medicinskij-centr">Аренда медицинский центер</a></div>
        </div>
        <div>
            <h1>Складская недвижимость</h1>
            <div><a href="/arenda-sklada-moskva">Аренда склада в Москве</a></div>
            <div><a href="/arenda-sklad-moskovskaya-oblast">Аренда склада в Московской области</a></div>
            <div><a href="/skladskie-kompleksy">Cкладские комплексы</a></div>
            <div><a href="/otvetstvennoe-hranenie">Ответственное хранение</a></div>
            <div><a href="/arenda-pomeshhenij-pod-proizvodstvo">Аренда помещений под производство</a></div>
            <div><a href="/аrenda-holodilnyh-i-morozilnyh-skladov">Аренда холодильных и морозильных складов</a></div>
            <div><a href="/arenda-otkrytoj-ploshhadki">Аренда открытой площадки</a></div>
            <div><a href="/prodazha-sklada">Продажа складов</a></div>
        </div>
    </UCard>
    <UCard v-if="tip=='Кафе'" :ui="{ body: { base: 'grid grid-cols-3 px-0' } }" style="padding: 0px !important;"   >
        <div>
            <h1>Торговая недвижимость</h1>
            <div><a href="/arenda-kafe-restoran">Аренда помещений под Кафе, Ресторан</a></div>
            <div><a href="/arenda-magazina">Аренда помещений под магазин</a></div>
            <div><a href="/prodazha-kafe-restoran">Продажа помещений под Ресторан</a></div>
            <div><a href="/arenda-psn">Аренда ПСН</a></div>
            <div><a href="/prodazha-psn">Продажа ПСН</a></div>
            <div><a href="/torgovye-centry">Торговые центры</a></div>
            <div><a href="/arenda-medicinskij-centr">Аренда медицинский центер</a></div>
        </div>
    </UCard>
    <UCard v-if="tip=='Магазин'" :ui="{ body: { base: 'grid grid-cols-3 px-0' } }" style="padding: 0px !important;"   >
        <div>
            <h1>Торговая недвижимость</h1>
            <div><a href="/arenda-kafe-restoran">Аренда помещений под Кафе, Ресторан</a></div>
            <div><a href="/arenda-magazina">Аренда помещений под магазин</a></div>
            <div><a href="/prodazha-kafe-restoran">Продажа помещений под Ресторан</a></div>
            <div><a href="/arenda-psn">Аренда ПСН</a></div>
            <div><a href="/prodazha-psn">Продажа ПСН</a></div>
            <div><a href="/torgovye-centry">Торговые центры</a></div>
            <div><a href="/arenda-medicinskij-centr">Аренда медицинский центер</a></div>
        </div>
        <div>
            <h1>Аренда магазинов по районам</h1>
            <div><a href="/arenda-magazina/cao">Аренда магазина ЦАО</a></div>
            <div><a href="/arenda-magazina/uvao">Аренда магазина ЮВАО</a></div>
            <div><a href="/arenda-magazina/vao">Аренда магазина ВАО</a></div>
            <div><a href="/arenda-magazina/svao">Аренда магазина СВАО</a></div>
            <div><a href="/arenda-magazina/sao">Аренда магазина САО</a></div>
            <div><a href="/arenda-magazina/szao">Аренда магазина СЗАО</a></div>
            <div><a href="/arenda-magazina/zao">Аренда магазина ЗАО</a></div>
            <div><a href="/arenda-magazina/uzao">Аренда магазина ЮЗАО</a></div>
            <div><a href="/arenda-magazina/uao">Аренда магазина ЮАО</a></div>
        </div>
    </UCard>

</template>
<style scoped>
*{
    line-height: 16px;
}
a {
    font-size: 14px;
    color: #000000;
    text-decoration: none;
}

h1{
    font-weight: bold;
}
.customP {
    padding: 0px !important;
}
</style>