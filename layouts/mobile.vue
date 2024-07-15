<script setup>
    import sfooter from '/components/contents/footer'
    const items = computed(()=>{

      return  [
      [{
          label: 'Офисная',
          to: '/ofisnaya-nedvizhimost',
          icon: 'i-heroicons-cog-8-tooth',
          click: () => {
            useRouter().push('/ofisnaya-nedvizhimost')
          }
        }],        [{
          label: 'Торговая',
          to: '/torgovaya-nedvizhimost',
          icon: 'i-heroicons-cog-8-tooth',
          click: () => {
            useRouter().push('/torgovaya-nedvizhimost')
          }
        }],        [{
          label: 'Складская',
          to: '/skladskaya-nedvizhimost',
          icon: 'i-heroicons-cog-8-tooth',
          click: () => {
            useRouter().push('/skladskaya-nedvizhimost')
          }
        }],        
        [{
          label: 'Поиск',
          to: '/find',
          icon: 'i-heroicons-cog-8-tooth',
          click: () => {
            useRouter().push('/find')
          }
        }],
        [{
          label: 'Позвонить',
          to: '/',
          icon: 'i-heroicons-cog-8-tooth',
          click: () => {
            useRouter().push('/news')
          }
        }],
      ]


  })

</script>
<template>
    <div style="display: flex;margin-top: 5px;">
        <div>
            <div>
                <a href="/">
                <img src='/assets/img/21logo.png' />
            </a>
            <div class="logo nomobile">Объявления по аренде и продаже коммерческой недвижимости<br>в Москве и Московской области</div>    
            </div>            
        </div>
        <div style="width: 18px;"></div>
        <div>
            <div>
                <h1>Офисная недвижимость Москвы, Аренда и Продажа.</h1>							
                <div class="module nomobile" ><p>Rent21 - Доска обьявлений. Предложения по аренде офисов без комиссии от собственников в Бизнес Центрах Москвы. Мы помогаем снять офис в Бизнес Центрах Москвы</p></div>
            </div>

            <div class="nomobile">
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

            </div>
        </div>
        <div class="mobileOnly">
            <UDropdown  :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
            <UIcon name="i-heroicons-bars-3" style="width: 28px;height: 28px;" />


    <template #account="{ item }">
      <div class="text-left">
        <p>
          Signed in as
        </p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>

    <template #item="{ item }">
        <span class="truncate">{{ item.label }}</span>
      <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
    </template>
  </UDropdown>

        </div>



    </div>    
    <div style="height: 6px;"></div>
    <slot />

    <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="padding: 0px !important;margin-top: 12px; background-color: #a9a9a921;"  >
            <sfooter />
        </UCard>

</template>
<style>
.logo {
    width: 200px;
    border: 1px solid #dad6d7;
    background-color: #f6f6f6;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    font-size: 12px;
    line-height: 19px;
    color: #000000;
    text-align: center;
    margin-top: 3px;
    padding-top: 2px;
    padding-bottom: 2px;
}
.mobileOnly{
    display: block;
}
.nomobile{
    display: none !important;
}
html, body {
    height: 100vh;
             
}
html {
    display: table;
    margin: auto;
}
body {
    display: table-cell;
    vertical-align: middle;
    margin: 0 auto;
    
} 
#__nuxt{
    max-width: 1000px;
    min-width: 400px;
    padding: 2px;
    overflow: auto;
    min-height: 100vh;    
}

* {
    line-height: 16px;
    font-size: 14px;
    font-family: 'Times New Roman', Times, serif;
}


@media (min-width: 640px) {
    .mobileOnly{
        display: none !important;
    }

    .nomobile{
        display: block !important;
    }

    .row{
        display: flex;
    }
    .col{
        width: 50%;
        margin: 4px;
    }
}

.flex {
    display: flex;
    justify-content: space-around;
}

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