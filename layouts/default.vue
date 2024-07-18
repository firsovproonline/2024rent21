<script setup>
    import logo from '/components/contents/logo'
    import headerMenu from '/components/contents/headerMenu'
    import callPromo from '/components/contents/callPromo'
    import sfooter from '/components/contents/footer'
    import rformSmall from '/components/contents/requestForm/small'
    import popular from '/components/contents/popular'
</script>
<template>
    <div style="padding-left: 1px;padding-right: 1px;">
        <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="padding: 3px !important;margin-top: 6px;"  >
        <div style="display: flex;">
            <logo style="margin-top: 6px;" />
            <div style="width: 18px;"></div>
            <headerMenu style="flex: 1 auto;"/>
        </div>
        </UCard>
            <div style="height: 22px;background-color: #e1e1e12e;margin-top: 8px;"></div>
            <div style="display: flex;">
                <div style="flex: 1 auto;padding-right: 8px;">
                    <slot  />
                </div>
                <div style="width: 300px;text-align: -webkit-right;">
                    <callPromo />
                    <rformSmall />
                    <popular />
                </div>
            </div>
            <UCard :ui="{ body: { base: 'grid grid-cols-1 px-1' } }" style="padding: 0px !important;margin-top: 12px;"  >
            <sfooter />
        </UCard>
    </div>
</template>
<style scoped>
html, body {
                height: 100vh;
             
}
html {
    display: table;
    margin: auto;
    background-color: #ffffff;
}
body {
    display: table-cell;
    vertical-align: middle;
    margin: 0 auto;
    background-color: #ffffff;
    
} 
#__nuxt{
    max-width: 1000px;
    width: 100vw;
    padding: 2px;
    overflow: auto;
    min-height: 100vh;    
}

* {

    font-size: 14px;
    font-family: 'Times New Roman', Times, serif;
}

</style>