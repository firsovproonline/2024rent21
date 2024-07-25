<script setup>
const accountForm = reactive({
  name: undefined,
  username: undefined,
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
</script>
<template>
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
                          <UInput size="xl" variant="none" v-model="accountForm.name" placeholder="Назание Улици или часть названия" style="width: 100%;" />
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
              <div style="display: flex;color: white;align-items: center;margin-top: 8px;cursor:pointer;">
                <UIcon name="i-heroicons-adjustments-horizontal" class="w-12 h-12" />
                <div style="font-size: 22px;">Выбор категории</div>
              </div>
              <div style="text-align: center;margin-top: 12px;">
                <UButton size="xl" color="gray">Подобрать</UButton>
              
              </div>
            </template>
        </UTabs>
    </UCard>
</template>