<script setup>
import { onMounted } from 'vue'
import mwin from '/components/ui/DhtmlxWindow.vue'
const isOpen = ref(false)
const isModalOpen = ref(false)
const accountForm = reactive({
  ulitca: undefined,
  plin:undefined,
  plout:undefined,
  cenain:undefined,
  cenaout:undefined,
  nalog:undefined
})
const items = [{
  key: 'rent',
  label: 'Аренда',
  description: 'Make changes to your account here. Click save when you\'re done.'
}, {
  key: 'sale',
  label: 'Продажа',
  description: 'Change your password here. After saving, you\'ll be logged out.'
}]
watch( () => accountForm.plin, () => {
  localStorage.setItem('findFilter',JSON.stringify(accountForm))
})
watch( () => accountForm.plout, () => {
  localStorage.setItem('findFilter',JSON.stringify(accountForm))
})
watch( () => accountForm.cenain, () => {
  localStorage.setItem('findFilter',JSON.stringify(accountForm))
})
watch( () => accountForm.cenaout, () => {
  localStorage.setItem('findFilter',JSON.stringify(accountForm))
})

watch( () => accountForm.ulitca, () => {
  localStorage.setItem('findFilter',JSON.stringify(accountForm))
})
const clearFilter = ()=>{
  accountForm.ulitca = undefined
  accountForm.plin = undefined
  accountForm.plout = undefined
  accountForm.cenain = undefined
  accountForm.cenaout = undefined
  localStorage.setItem('findFilter',null)
}
onMounted(() => {
  
  if(localStorage && localStorage.getItem('findFilter')){

    const findOb = JSON.parse(localStorage.getItem('findFilter'))
    if(findOb){
      accountForm.ulitca = findOb.ulitca
      accountForm.plin = findOb.plin
      accountForm.plout = findOb.plout
      accountForm.cenain = findOb.cenain
      accountForm.cenaout = findOb.cenaout
    }
  }
})
</script>
<template>
  <!---->
    <UModal  v-model="isOpen" :ui="{fullscreen: 'w-screen h-screen',width: 'w-full sm:max-w-lg',}">






        <div class="linkFindSpeed">
          <h1>Офисная недвижимость</h1>
          <div style="padding-left: 12px;">
            <div class="h23"><NuxtLink href="/arenda-ofisa">Аренда офисных помещений</NuxtLink></div>
            <div class="h23"><NuxtLink href="/prodazha-ofisy">Продажа офисов</NuxtLink></div>
            <div class="h23"><NuxtLink href="/arenda-osobnyak">Aренда особняков</NuxtLink></div>
            <div class="h23"><NuxtLink href="/prodazha-osobnyak">Продажа особняков</NuxtLink></div>
            <div class="h23"><NuxtLink href="/arenda-gostinitsa">Аренда помещений под Гостиницу</NuxtLink></div>
            <div class="h23"><NuxtLink href="/arenda-bank">Аренда помещений под банк</NuxtLink></div>
            <div class="h23"><NuxtLink href="/prodazha-bank">Продажа помещений под банк</NuxtLink></div>
            <div class="h23"><NuxtLink href="/biznes-centry-moskva">Бизнес Центры Москвы</NuxtLink></div>        
          </div>
        </div>
        <div class="linkFindSpeed">
            <h1>Торговая недвижимость</h1>
            <div style="padding-left: 12px;">
              <div class="h23"><NuxtLink href="/arenda-kafe-restoran">Аренда помещений под Кафе, Ресторан</NuxtLink></div>
              <div class="h23"><NuxtLink href="/arenda-magazina">Аренда помещений под магазин</NuxtLink></div>
              <div class="h23"><NuxtLink href="/prodazha-kafe-restoran">Продажа помещений под Ресторан</NuxtLink></div>
              <div class="h23"><NuxtLink href="/arenda-psn">Аренда ПСН</NuxtLink></div>
              <div class="h23"><NuxtLink href="/prodazha-psn">Продажа ПСН</NuxtLink></div>
              <div class="h23"><NuxtLink href="/torgovye-centry">Торговые центры</NuxtLink></div>
              <div class="h23"><NuxtLink href="/arenda-medicinskij-centr">Аренда медицинский центер</NuxtLink></div>
            </div>
        </div>     
        <div class="linkFindSpeed">
            <h1>Складская недвижимость</h1>
            <div style="padding-left: 12px;">
              <div class="h23"><NuxtLink href="/arenda-sklada-moskva">Аренда склада в Москве</NuxtLink></div>
              <div class="h23"><NuxtLink href="/arenda-sklad-moskovskaya-oblast">Аренда склада в Московской области</NuxtLink></div>
              <div class="h23"><NuxtLink href="/skladskie-kompleksy">Cкладские комплексы</NuxtLink></div>
              <div class="h23"><NuxtLink href="/otvetstvennoe-hranenie">Ответственное хранение</NuxtLink></div>
              <div class="h23"><NuxtLink href="/arenda-pomeshhenij-pod-proizvodstvo">Аренда помещений под производство</NuxtLink></div>
              <div class="h23"><NuxtLink href="/аrenda-holodilnyh-i-morozilnyh-skladov">Аренда холодильных и морозильных складов</NuxtLink></div>
              <div class="h23"><NuxtLink href="/arenda-otkrytoj-ploshhadki">Аренда открытой площадки</NuxtLink></div>
              <div class="h23"><NuxtLink href="/prodazha-sklada">Продажа складов</NuxtLink></div>
            </div>
        </div>               


    </UModal>  
    <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="background-color: #00668bb8; padding-top: 4px;margin-top: 7px;margin-right: 8px;margin-left: 8px;" >
        <UTabs :items="items" class="w-full">
            <template #item="{ item }">
                <UCard style="background-color: transparent;" :ui="{ring: 'ring-0 ring-gray-200 dark:ring-gray-800',header: {
    base: '',
    background: 'transparent',
    padding: 'px-0 py-0 sm:px-0',
  },}">
                  <template #header>

                    <div  class="space-y-3" style="background-color: transparent;">
                      <div class="inputFind">
                        <div>
                          <div style="padding-left: 12px;">Площадь</div>
                          <UInput size="xl" placeholder="От" variant="none" v-model="accountForm.plin" />
                        </div>
                        <div style="padding-left: 16px;">
                          <UFormGroup label="&nbsp" name="plout">
                            <UInput size="xl" placeholder="До" variant="none" v-model="accountForm.plout" />
                          </UFormGroup>
                        </div>
                      </div>
                      <div class="inputFind">
                        <div>
                          <div style="padding-left: 12px;">Ставка, рублей за м2/год</div>
                          <UInput size="xl" variant="none" placeholder="От" v-model="accountForm.cenain" />
                        </div>
                        <div style="padding-left: 16px;">
                          <UFormGroup label="&nbsp" name="plout">
                            <UInput size="xl" variant="none" placeholder="До" v-model="accountForm.cenaout" />
                          </UFormGroup>
                        </div>
                      </div>
                      <div class="inputFind">
                        <div  style="flex: 1 auto;">
                          <div style="padding-left: 12px;">Улица</div>
                          <UInput size="xl" variant="none" v-model="accountForm.ulitca" placeholder="Назание Улици или часть названия" style="width: 100%;" />
                        </div>
                      </div>
                      <div class="inputFind">
                        <div style="flex: 1 auto;">
                          <div style="padding-left: 12px;">Налоговая</div>
                        <USelect
                        variant="none"
                          size="xl"
                          icon="i-heroicons-magnifying-glass-20-solid"
                          color="white"
                          :options="['', '1', '2']"
                          v-model="accountForm.nalog"
                        />

                        </div>

                      </div>
                    </div>

                  </template>
              </UCard>
              <div style="display: flex;color: white;align-items: center;margin-top: 8px;cursor:pointer;" @click="isOpen = true">
                <UIcon name="i-heroicons-adjustments-horizontal" class="w-12 h-12" />
                <div style="font-size: 22px;">Быстрый поиск</div>
              </div>
              <div style="text-align: center;margin-top: 12px;">
                <UButton size="xl" color="gray">Подобрать</UButton>
                <div style="font-size: 22px;line-height: 48px;color: white;cursor: pointer;"  @click="clearFilter">Сбросить</div>
              </div>
            </template>
        </UTabs>
    </UCard>
</template>