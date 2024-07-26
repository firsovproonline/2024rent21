<script setup>
import { onMounted } from 'vue'
const isOpen = ref(false)
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
  console.log('ddddddddddddddd')
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
  if(localStorage.getItem('findFilter')){
    const findOb = JSON.parse(localStorage.getItem('findFilter'))
    accountForm.ulitca = findOb.ulitca
    accountForm.plin = findOb.plin
    accountForm.plout = findOb.plout
    accountForm.cenain = findOb.cenain
    accountForm.cenaout = findOb.cenaout
  }
})
</script>
<template>
    <UModal v-model="isOpen" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }" style="min-height: 98vh;">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Быстрый поиск
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>

        <div class="linkFindSpeed">
          <h1>Офисная недвижимость</h1>
          <div style="padding-left: 12px;">
            <div class="h23"><a href="/arenda-ofisa">Аренда офисных помещений</a></div>
            <div class="h23"><a href="/prodazha-ofisy">Продажа офисов</a></div>
            <div class="h23"><a href="/arenda-osobnyak">Aренда особняков</a></div>
            <div class="h23"><a href="/prodazha-osobnyak">Продажа особняков</a></div>
            <div class="h23"><a href="/arenda-gostinitsa">Аренда помещений под Гостиницу</a></div>
            <div class="h23"><a href="/arenda-bank">Аренда помещений под банк</a></div>
            <div class="h23"><a href="/prodazha-bank">Продажа помещений под банк</a></div>
            <div class="h23"><a href="/biznes-centry-moskva">Бизнес Центры Москвы</a></div>        
          </div>
        </div>
        <div class="linkFindSpeed">
            <h1>Торговая недвижимость</h1>
            <div style="padding-left: 12px;">
              <div class="h23"><a href="/arenda-kafe-restoran">Аренда помещений под Кафе, Ресторан</a></div>
              <div class="h23"><a href="/arenda-magazina">Аренда помещений под магазин</a></div>
              <div class="h23"><a href="/prodazha-kafe-restoran">Продажа помещений под Ресторан</a></div>
              <div class="h23"><a href="/arenda-psn">Аренда ПСН</a></div>
              <div class="h23"><a href="/prodazha-psn">Продажа ПСН</a></div>
              <div class="h23"><a href="/torgovye-centry">Торговые центры</a></div>
              <div class="h23"><a href="/arenda-medicinskij-centr">Аренда медицинский центер</a></div>
            </div>
        </div>     
        <div class="linkFindSpeed">
            <h1>Складская недвижимость</h1>
            <div style="padding-left: 12px;">
              <div class="h23"><a href="/arenda-sklada-moskva">Аренда склада в Москве</a></div>
              <div class="h23"><a href="/arenda-sklad-moskovskaya-oblast">Аренда склада в Московской области</a></div>
              <div class="h23"><a href="/skladskie-kompleksy">Cкладские комплексы</a></div>
              <div class="h23"><a href="/otvetstvennoe-hranenie">Ответственное хранение</a></div>
              <div class="h23"><a href="/arenda-pomeshhenij-pod-proizvodstvo">Аренда помещений под производство</a></div>
              <div class="h23"><a href="/аrenda-holodilnyh-i-morozilnyh-skladov">Аренда холодильных и морозильных складов</a></div>
              <div class="h23"><a href="/arenda-otkrytoj-ploshhadki">Аренда открытой площадки</a></div>
              <div class="h23"><a href="/prodazha-sklada">Продажа складов</a></div>
            </div>
        </div>               
      </UCard>
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