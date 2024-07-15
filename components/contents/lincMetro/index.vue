<script setup>
    const props = defineProps({
        url: {
            type: String,
            required: true,
        },
        tip: {
            type: String,
            required: false,
            default:null
        },  
        opp: {
            type: String,
            required: false,
            default:null
        },  
    
    
    });

const arrru = new Array('Я', 'я', 'Ю', 'ю', 'Ч', 'ч', 'Ш', 'ш', 'Щ', 'щ', 'Ж', 'ж', 'А', 'а', 'Б', 'б', 'В', 'в', 'Г', 'г', 'Д', 'д', 'Е', 'е', 'Ё', 'ё', 'З', 'з', 'И', 'и', 'Й', 'й', 'К', 'к', 'Л', 'л', 'М', 'м', 'Н', 'н', 'О', 'о', 'П', 'п', 'Р', 'р', 'С', 'с', 'Т', 'т', 'У', 'у', 'Ф', 'ф', 'Х', 'х', 'Ц', 'ц', 'Ы', 'ы', 'Ь', 'ь', 'Ъ', 'ъ', 'Э', 'э', ' ');
const arren = new Array('Ya', 'ya', 'Yu', 'yu', 'Ch', 'ch', 'Sh', 'sh', 'Sh', 'sh', 'Zh', 'zh', 'A', 'a', 'B', 'b', 'V', 'v', 'G', 'g', 'D', 'd', 'E', 'e', 'E', 'e', 'Z', 'z', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'F', 'f', 'H', 'h', 'C', 'c', 'Y', 'y', 'Yy', 'yY', 'Jj', 'Uu', 'Xx', 'Vv', '_');
function cyrill_to_latin(text) {
    for (var i = 0; i < arrru.length; i++) {
        var reg = new RegExp(arrru[i], "g");
        try {
            text = text.replace(reg, arren[i]);
        }
        catch (err) {
            text = "error";

        }
    }
    return text;
}

function latin_to_cyrill(text) {
    for (var i = 0; i < arren.length; i++) {
        if (arren[i].length > 1) {
            var reg = new RegExp(arren[i], "g");
            try {
                text = text.replace(reg, arrru[i]);
            }
            catch (err) {
                text = "error"
            }

        }
    }
    for (var i = 0; i < arren.length; i++) {
        if (arren[i].length == 1) {
            var reg = new RegExp(arren[i], "g");
            try {
                text = text.replace(reg, arrru[i]);
            }
            catch (err) {
                text = "error"
            }

        }
    }
    return text;
}

    const rowsGet = await $fetch( `/api/spr`, {
      method: 'GET',
      params: {
        TIP:props.tip,
        OPP:props.opp
      }
    })
    const okrugList ={}
    rowsGet.UNDERGROUND.forEach(item => {
        if(!okrugList[item.OKRUG])okrugList[item.OKRUG]=[]
        okrugList[item.OKRUG].push(item.NAME)
    });
//    const m = await $fetch( `/api/metro`, {
//      method: 'GET',
//    })
//     console.log(m)
</script>
<template>
        <div style="margin-bottom: 12px; padding: 0px !important;display: flex;flex-wrap: wrap;justify-content: space-around;"  >
            <div v-for="row in Object.keys(okrugList)" :key="row" class="flexB" :style="okrugList[row].length > 30 ?'flex: 1 auto;':'max-width: 33%;'"  >
                <div v-if="row!==''">
                    <h1>{{row}}</h1>
                    <div style="display: flex;flex-wrap: wrap;justify-content: space-between;padding: 6px;">
                        <div v-for="item in okrugList[row]" :key="item" style="margin-left: 1px;"><a :href="'/'+ url +'/metro-'+cyrill_to_latin(item).toLowerCase()">{{ item }}</a></div>
                    </div>

                </div>
            </div>
            
        </div>


<!--
    <div class="listmetro mdiv" style="width:690px;'">
        <div class="header"></div>

            <ul>
                <li stile="float:left;'">
                    <div class="head"><a style="color:#000000;text-decoration:underline" :href="'/'+ url +'-vao'">ВАО</a></div>
                    <ul style="width:190px;">
                        <li><a :href="'/'+ url +'/metro-izmajlovskaya'">Измайловская</a></li>
                        <li><a :href="'/'+ url +'/metro-novogireevo'">Новогиреево</a></li>
                        <li><a :href="'/'+ url +'/metro-novokosino'">Новокосино</a></li>
                        <li><a :href="'/'+ url +'/metro-partizanskaya'">Партизанская</a></li>
                        <li><a :href="'/'+ url +'/metro-pervomajskaya'">Первомайская</a></li>
                        <li><a :href="'/'+ url +'/metro-perovo'">Перово</a></li>
                        <li><a :href="'/'+ url +'/metro-preobrazhenskaya-ploshyad'">Преображенская площадь</a></li>
                        <li><a :href="'/'+ url +'/metro-semenovskaya'">Семеновская</a></li>
                        <li><a :href="'/'+ url +'/metro-sokolniki'">Сокольники</a></li>
                        <li><a :href="'/'+ url +'/metro-ulica-podbelskogo'">Улица Подбельского</a></li>
                        <li><a :href="'/'+ url +'/metro-cherkizovskaya'">Черкизовская</a></li>
                        <li><a :href="'/'+ url +'/metro-shosse-entuziastov'">Шоссе Энтузиастов</a></li>
                        <li><a :href="'/'+ url +'/metro-shhelkovskaya'">Щелковская</a></li>
                        <li><a :href="'/'+ url +'/metro-ehlektrozavodskaya'">Электрозаводская</a></li>
                    </ul>
                </li>
                <li stile="float:left;'">
                            <div class="head"><a style="color:#000000;text-decoration:underline" :href="'/'+ url +'-zao'">ЗАО</a></div>
                            <ul style="width:190px;'"><li><a :href="'/'+ url +'/metro-bagrationovskaya'">Багратионовская</a></li><li><a :href="'/'+ url +'/metro-borovskoe-shosse'">Боровское шоссе</a></li><li><a :href="'/'+ url +'/metro-vostryakovo'">Востряково</a></li><li><a :href="'/'+ url +'/metro-delovoj-centr'">Деловой центр</a></li><li><a :href="'/'+ url +'/metro-krylatskoe'">Крылатское</a></li><li><a :href="'/'+ url +'/metro-kuncevskaya'">Кунцевская</a></li><li><a :href="'/'+ url +'/metro-kutuzovskaya'">Кутузовская</a></li><li><a :href="'/'+ url +'/metro-mezhdunarodnaya'">Международная</a></li><li><a :href="'/'+ url +'/metro-molodezhnaya'">Молодежная</a></li><li><a :href="'/'+ url +'/metro-nikulinskaya'">Никулинская</a></li><li><a :href="'/'+ url +'/metro-novoperedelkino'">Новопеределкино</a></li><li><a :href="'/'+ url +'/metro-olimpijskaya-derevnya'">Олимпийская деревня</a></li><li><a :href="'/'+ url +'/metro-park-pobedy'">Парк Победы</a></li><li><a :href="'/'+ url +'/metro-pionerskaya'">Пионерская</a></li><li><a :href="'/'+ url +'/metro-prospekt-vernadskogo'">Проспект Вернадского</a></li><li><a :href="'/'+ url +'/metro-slavyanskij-bulvar'">Славянский бульвар</a></li><li><a :href="'/'+ url +'/metro-solncevo'">Солнцево</a></li><li><a :href="'/'+ url +'/metro-studencheskaya'">Студенческая</a></li><li><a :href="'/'+ url +'/metro-tereshkovo'">Терешково</a></li><li><a :href="'/'+ url +'/metro-filevskij-park'">Филевский парк</a></li><li><a :href="'/'+ url +'/metro-fili'">Фили</a></li><li><a :href="'/'+ url +'/metro-yugo-zapadnaya'">Юго-Западная</a></li></ul></li><li stile="float:left;'"><div class="head"><a style="color:#000000;text-decoration:underline" :href="'/'+ url +'-sao'">САО</a></div><ul style="width:190px;'"><li><a :href="'/'+ url +'/metro-aeroport'">Аэропорт</a></li><li><a :href="'/'+ url +'/metro-begovaya'">Беговая</a></li><li><a :href="'/'+ url +'/metro-vodnyj-stadion'">Водный стадион</a></li><li><a :href="'/'+ url +'/metro-vojkovskaya'">Войковская</a></li><li><a :href="'/'+ url +'/metro-vystavochnyj-centr'">Выставочный центр</a></li><li><a :href="'/'+ url +'/metro-dinamo'">Динамо</a></li><li><a :href="'/'+ url +'/metro-dmitrovskaya'">Дмитровская</a></li><li><a :href="'/'+ url +'/metro-marina-roshha'">Марьина Роща</a></li><li><a :href="'/'+ url +'/metro-petrovsko-razumovskaya'">Петровско-Разумовская</a></li><li><a :href="'/'+ url +'/metro-polezhaevskaya'">Полежаевская</a></li><li><a :href="'/'+ url +'/metro-rechnoj-vogzal'">Речной вокзал</a></li><li><a :href="'/'+ url +'/metro-savelovskaya'">Савеловская</a></li><li><a :href="'/'+ url +'/metro-sokol'">Сокол</a></li><li><a :href="'/'+ url +'/metro-telecentr'">Телецентр</a></li><li><a :href="'/'+ url +'/metro-timiryazevskaya'">Тимирязевская</a></li><li><a :href="'/'+ url +'/metro-ulica-akademika-koroleva'">Улица Академика Королева</a></li><li><a :href="'/'+ url +'/metro-ulica-milashenkova'">Улица Милашенкова</a></li><li><a :href="'/'+ url +'/metro-ulica-sergeya-ehjzenshtejna'">Улица Сергея Эйзенштейна</a></li></ul></li><li stile="float:left;'">
                                <div class="head"><a style="color:#000000;text-decoration:underline" :href="'/'+ url +'-svao'">СВАО</a></div>
                                <ul style="width:290px;'"><li><a :href="'/'+ url +'/metro-alekseevskaya'">Алексеевская</a></li><li><a :href="'/'+ url +'/metro-altufevo'">Алтуфьево</a></li><li><a :href="'/'+ url +'/metro-babushkinskaya'">Бабушкинская</a></li><li><a :href="'/'+ url +'/metro-bibirevo'">Бибирево</a></li><li><a :href="'/'+ url +'/metro-botanicheskij-sad'">Ботанический сад</a></li><li><a :href="'/'+ url +'/metro-vdnh'">ВДНХ</a></li><li><a :href="'/'+ url +'/metro-vladykino'">Владыкино</a></li><li><a :href="'/'+ url +'/metro-medvedkovo'">Медведково</a></li><li><a :href="'/'+ url +'/metro-otradnoe'">Отрадное</a></li><li><a :href="'/'+ url +'/metro-sviblovo'">Свиблово</a></li></ul></li><li stile="float:left;'"><div class="head"><a style="color:#000000;text-decoration:underline" :href="'/'+ url +'-szao'">СЗАО</a></div><ul style="width:290px;'"><li><a :href="'/'+ url +'/metro-volokolamskaya'">Волоколамская</a></li><li><a :href="'/'+ url +'/metro-mitino'">Митино</a></li><li><a :href="'/'+ url +'/metro-myakininskaya'">Мякининская</a></li><li><a :href="'/'+ url +'/metro-oktyabrskoe-pole'">Октябрьское поле</a></li><li><a :href="'/'+ url +'/metro-planernaya'">Планерная</a></li><li><a :href="'/'+ url +'/metro-strogino'">Строгино</a></li><li><a :href="'/'+ url +'/metro-skhodnenskaya'">Сходненская</a></li><li><a :href="'/'+ url +'/metro-tushinskaya'">Тушинская</a></li><li><a :href="'/'+ url +'/metro-shhukinskaya'">Щукинская</a></li></ul></li><li stile="float:left;'"><div class="head"><a style="color:#000000;text-decoration:underline" :href="'/'+ url +'-cao'">ЦАО</a></div><ul style="width:600px;'"><li><a :href="'/'+ url +'/metro-aleksandrovskij-sad'">Александровский сад</a></li><li><a :href="'/'+ url +'/metro-arbatskaya'">Арбатская</a></li><li><a :href="'/'+ url +'/metro-barrikadnaya'">Баррикадная</a></li><li><a :href="'/'+ url +'/metro-baumanskaya'">Бауманская</a></li><li><a :href="'/'+ url +'/metro-belorusskaya'">Белорусская</a></li><li><a :href="'/'+ url +'/metro-biblioteka-imeni-lenina'">Библиотека им. В. И. Ленина</a></li><li><a :href="'/'+ url +'/metro-boroviсkaya'">Боровицкая</a></li><li><a :href="'/'+ url +'/metro-vorobevy-gory'">Воробьевы горы</a></li><li><a :href="'/'+ url +'/metro-dobryninskaya'">Добрынинская</a></li><li><a :href="'/'+ url +'/metro-dostoevskaya'">Достоевская</a></li><li><a :href="'/'+ url +'/metro-kievskaya'">Киевская</a></li><li><a :href="'/'+ url +'/metro-kitaj-gorod'">Китай-город</a></li><li><a :href="'/'+ url +'/metro-komsomolskaya'">Комсомольская</a></li><li><a :href="'/'+ url +'/metro-krasnopresnenskaya'">Краснопресненская</a></li><li><a :href="'/'+ url +'/metro-krasnoselskaya'">Красносельская</a></li><li><a :href="'/'+ url +'/metro-krasnye-vorota'">Красные ворота</a></li><li><a :href="'/'+ url +'/metro-krestyanskaya-zastava'">Крестьянская застава</a></li><li><a :href="'/'+ url +'/metro-kropotkinskaya'">Кропоткинская</a></li><li><a :href="'/'+ url +'/metro-kuznecz,ckij_most'">Кузнецкий мост</a></li><li><a :href="'/'+ url +'/metro-kurskaya'">Курская</a></li><li><a :href="'/'+ url +'/metro-lubyanka'">Лубянка</a></li><li><a :href="'/'+ url +'/metro-marksistskaya'">Марксистская</a></li><li><a :href="'/'+ url +'/metro-mayakovskaya'">Маяковская</a></li><li><a :href="'/'+ url +'/metro-mendeleevskaya'">Менделеевская</a></li><li><a :href="'/'+ url +'/metro-novokuznetskaya'">Новокузнецкая</a></li><li><a :href="'/'+ url +'/metro-novoslobodskaya'">Новослободская</a></li><li><a :href="'/'+ url +'/metro-oktyabrskaya'">Октябрьская</a></li><li><a :href="'/'+ url +'/metro-ohotnyj-ryad'">Охотный ряд</a></li><li><a :href="'/'+ url +'/metro-paveletskaya'">Павелецкая</a></li><li><a :href="'/'+ url +'/metro-park-kultury'">Парк культуры</a></li><li><a :href="'/'+ url +'/metro-ploshhad-ilicha'">Площадь Ильича</a></li><li><a :href="'/'+ url +'/metro-ploshhad-revolyutsii'">Площадь Революции</a></li><li><a :href="'/'+ url +'/metro-polyanka'">Полянка</a></li><li><a :href="'/'+ url +'/metro-proletarskaya'">Пролетарская</a></li><li><a :href="'/'+ url +'/metro-prospekt-mira'">Проспект Мира</a></li><li><a :href="'/'+ url +'/metro-pushkinskaya'">Пушкинская</a></li><li><a :href="'/'+ url +'/metro-rizhskaya'">Рижская</a></li><li><a :href="'/'+ url +'/metro-rimskaya'">Римская</a></li><li><a :href="'/'+ url +'/metro-serpukhovskaya'">Серпуховская</a></li><li><a :href="'/'+ url +'/metro-smolenskaya'">Смоленская</a></li><li><a :href="'/'+ url +'/metro-sportivnaya'">Спортивная</a></li><li><a :href="'/'+ url +'/metro-sretenskij-bulvar'">Сретенский бульвар</a></li><li><a :href="'/'+ url +'/metro-sukharevskaya'">Сухаревская</a></li><li><a :href="'/'+ url +'/metro-taganskaya'">Таганская</a></li><li><a :href="'/'+ url +'/metro-tverskaya'">Тверская</a></li><li><a :href="'/'+ url +'/metro-teatralnaya'">Театральная</a></li><li><a :href="'/'+ url +'/metro-tretyakovskaya'">Третьяковская</a></li><li><a :href="'/'+ url +'/metro-tretyakovskaya'">Третьяковская</a></li><li><a :href="'/'+ url +'/metro-trubnaya'">Трубная</a></li><li><a :href="'/'+ url +'/metro-turgenevskaya'">Тургеневская</a></li><li><a :href="'/'+ url +'/metro-ulica-1905-goda'">Улица 1905 года</a></li><li><a :href="'/'+ url +'/metro-frunzenskaya'">Фрунзенская</a></li><li><a :href="'/'+ url +'/metro-cvetnoj-bulvar'">Цветной бульвар</a></li><li><a :href="'/'+ url +'/metro-shhelkovskaya'">Чеховская</a></li><li><a :href="'/'+ url +'/metro-chistye-prudy'">Чистые пруды</a></li><li><a :href="'/'+ url +'/metro-chkalovskaya'">Чкаловская</a></li></ul></li><li stile="float:left;'"><div class="head"><a style="color:#000000;text-decoration:underline" :href="'/'+ url +'-uao'">ЮАО</a></div><ul style="width:600px;'"><li><a :href="'/'+ url +'/metro-avtozavodskaya'">Автозаводская</a></li><li><a :href="'/'+ url +'/metro-annino'">Аннино</a></li><li><a :href="'/'+ url +'/metro-borisovo'">Борисово</a></li><li><a :href="'/'+ url +'/metro-brateevo'">Братеево</a></li><li><a :href="'/'+ url +'/metro-bulvar-admirala-ushakova'">Бульвар Адмирала Ушакова</a></li><li><a :href="'/'+ url +'/metro-bulvar-dmitriya-donskogo'">Бульвар Дмитрия Донского</a></li><li><a :href="'/'+ url +'/metro-buninskaya_alleya'">Бунинская аллея</a></li><li><a :href="'/'+ url +'/metro-varshavskaya'">Варшавская</a></li><li><a :href="'/'+ url +'/metro-domodedovskaya'">Домодедовская</a></li><li><a :href="'/'+ url +'/metro-zyablikovo'">Зябликово</a></li><li><a :href="'/'+ url +'/metro-kantemirovskaya'">Кантемировская</a></li><li><a :href="'/'+ url +'/metro-kahovskaya'">Каховская</a></li><li><a :href="'/'+ url +'/metro-kashirskaya'">Каширская</a></li><li><a :href="'/'+ url +'/metro-kolomenskaya'">Коломенская</a></li><li><a :href="'/'+ url +'/metro-krasnogvardejskaya'">Красногвардейская</a></li><li><a :href="'/'+ url +'/metro-nagatinskaya'">Нагатинская</a></li><li><a :href="'/'+ url +'/metro-nagornaya'">Нагорная</a></li><li><a :href="'/'+ url +'/metro-nakhimovskij-prospekt'">Нахимовский проспект</a></li><li><a :href="'/'+ url +'/metro-orehovo'">Орехово</a></li><li><a :href="'/'+ url +'/metro-prazhskaya'">Пражская</a></li><li><a :href="'/'+ url +'/metro-sevastopolskaya'">Севастопольская</a></li><li><a :href="'/'+ url +'/metro-tulskaya'">Тульская</a></li><li><a :href="'/'+ url +'/metro-ulitsa-akademika-yangelya'">Ул. Академика Янгеля</a></li><li><a :href="'/'+ url +'/metro-ulica-gorchakova'">Улица Горчакова</a></li><li><a :href="'/'+ url +'/metro-ulica-skobelevskaya'">Улица Скобелевская</a></li><li><a :href="'/'+ url +'/metro-ulica-starokachalovskaya'">Улица Старокачаловская</a></li><li><a :href="'/'+ url +'/metro-caricyno'">Царицыно</a></li><li><a :href="'/'+ url +'/metro-chertanovskaya'">Чертановская</a></li><li><a :href="'/'+ url +'/metro-shabolovskaya'">Шаболовская</a></li><li><a :href="'/'+ url +'/metro-yuzhnaya'">Южная</a></li></ul></li><li stile="float:left;'"><div class="head"><a style="color:#000000;text-decoration:underline" :href="'/'+ url +'-uvao'">ЮВАО</a></div><ul style="width:290px;'"><li><a :href="'/'+ url +'/metro-aviamotornaya'">Авиамоторная</a></li><li><a :href="'/'+ url +'/metro-bratislavskaya'">Братиславская</a></li><li><a :href="'/'+ url +'/metro-volgogradskij-prospekt'">Волгоградский проспект</a></li><li><a :href="'/'+ url +'/metro-volzhskaya'">Волжская</a></li><li><a :href="'/'+ url +'/metro-vyhino'">Выхино</a></li><li><a :href="'/'+ url +'/metro-dubrovka'">Дубровка</a></li><li><a :href="'/'+ url +'/metro-kozhuhovskaya'">Кожуховская</a></li><li><a :href="'/'+ url +'/metro-kuzminki'">Кузьминки</a></li><li><a :href="'/'+ url +'/metro-lyublino'">Люблино</a></li><li><a :href="'/'+ url +'/metro-marino'">Марьино</a></li><li><a :href="'/'+ url +'/metro-pechatniki'">Печатники</a></li><li><a :href="'/'+ url +'/metro-pronskaya'">Пронская</a></li><li><a :href="'/'+ url +'/metro-ryazanskij-prospekt'">Рязанский проспект</a></li><li><a :href="'/'+ url +'/metro-tekstilshhiki'">Текстильщики</a></li></ul></li><li stile="float:left;'"><div class="head"><a style="color:#000000;text-decoration:underline" :href="'/'+ url +'-uzao'">ЮЗАО</a></div><ul style="width:290px;'"><li><a :href="'/'+ url +'/metro-akademicheskaya'">Академическая</a></li><li><a :href="'/'+ url +'/metro-belyaevo'">Беляево</a></li><li><a :href="'/'+ url +'/metro-bitcevskij-park'">Битцевский парк</a></li><li><a :href="'/'+ url +'/metro-kaluzhskaya'">Калужская</a></li><li><a :href="'/'+ url +'/metro-konkovo'">Коньково</a></li><li><a :href="'/'+ url +'/metro-leninskij-prospekt'">Ленинский проспект</a></li><li><a :href="'/'+ url +'/metro-novye-cheremushki'">Новые Черемушки</a></li><li><a :href="'/'+ url +'/metro-profsoyuznaya'">Профсоюзная</a></li><li><a :href="'/'+ url +'/metro-teplyj-stan'">Теплый стан</a></li><li><a :href="'/'+ url +'/metro-universitet'">Университет</a></li><li><a :href="'/'+ url +'/metro-yasenevo'">Ясенево</a></li></ul></li></ul>
        </div>

-->
</template>
<style scoped>
*{
    line-height: 16px;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    font-size: 14px;
    font-family: 'Times New Roman', Times, serif;  
    color: #666;  
}
.flexB{
    display: flex;flex-wrap: wrap;align-content: flex-start;
    margin-bottom: 3px;
}
.listmetro ul li a{
    padding-left: 3px;
}

.listmetro ul li a{
    color:#666;
    text-decoration:none;
}
.mdiv{
  color: #000000;
    line-height: 18px;
    letter-spacing: -0.7pt;
    font-size: 14px;
    font-family: 'Times New Roman', Times, serif;    
}
li {
    display: inline-table;
}
.head3 {
    background-color: #e1e1e1;
    font-size: 16px;
    font-family: 'Segoe UI Semibold';
    color: #000000;
    line-height: 22px;
    padding-left: 8px;
}
h1{
    text-align: center;
    color: black;
}
</style>