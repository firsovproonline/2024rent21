<script setup>

</script>
<template>
<UCard :ui="{ label: { base: 'grid grid-cols-1 px-1'} ,divide: 'divide-y divide-gray-200 dark:divide-gray-800 borderRed bGrey',body:{padding:'px-0'}}" style="margin-bottom: 12px;"  >
	    <div class="infotel"><span style="color:red;font-weight: bold;">Аренда и продажа<br>коммерческой недвижимости</span>
            <div style="padding-top: 8px;display: flex;justify-content: space-evenly;align-items: center;">
                <img class="imgtel" src="/assets/img/tel1.png">
                <span class="pre">(495)</span>
                <span class="tel">135-10-11</span>
            </div>
            <div style="color:red">Звоните с 9.00 до 21.00<br>Без Выходных</div>
        </div>
    </UCard>
</template>
<style scoped>
.infotel {
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    text-align: center;
    color: #000000;
    line-height: 16px;
}
.infotel .imgtel {
    width: 31px;
    height: 21px;
    border: none;
}
.infotel .pre {
    font-size: 20px;
}
.infotel .tel {
    font-size: 25px;
    color: #000000;
    font-weight: bold;
    line-height: 26px;
}
</style>