<script setup>
const route = useRoute()
import sfooter from '/components/contents/footer'
import { useNuxtApp } from '#app'
const { $viewport } = useNuxtApp()
    let mobile = false
    if($viewport.isLessThan('tablet')){
            mobile = true
    }
    watch($viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
        console.log('Breakpoint updated:', oldBreakpoint, '->', newBreakpoint)
    })


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
    <div v-if="$viewport.isLessThan('tablet')" >
        <div style="display: flex;align-items: center;">
            <div>
                <div>
                    <a href="/">
                    <img src='/assets/img/21logo.png' />
                </a>
                   
                </div>            
            </div>
            <div><h1 style="text-align:center">{{ route.matched[0].meta.titleMobile }}</h1></div>
            <div>
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
    </div>
    <div v-else>
        <div style="display: flex;margin-top: 5px;">
        <div>
            <div>
                <a href="/">
                <img src='/assets/img/21logo.png' />
            </a>
            <div class="logo">Объявления по аренде и продаже коммерческой недвижимости<br>в Москве и Московской области</div>    
            </div>            
        </div>
        <div style="width: 18px;"></div>
        <div>
            <div>
                <h1>{{ route.matched[0].meta.title }}</h1>							
                <div class="module" ><p>{{ route.matched[0].meta.description }}</p></div>
            </div>

            <div>
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
    </div>          
    </div>
    <div style="height: 8px;"></div>
    <slot />
    <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="padding: 0px !important;margin-top: 12px; background-color: #a9a9a921;"  >
            <sfooter />
    </UCard>





    <div v-if="mobile && 1==2">

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
                <h1>{{ route.matched[0].meta.title }}</h1>							
                <div class="module nomobile" ><p>{{ route.matched[0].meta.description }}</p></div>
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

    </div>

        
        <slot />
    </div>
    <div v-if="1==2">
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

    </div>

</template>
<style></style>