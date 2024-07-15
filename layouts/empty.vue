<template>
    <slot  />
</template>
<style>
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
    min-width: 960px;
    max-width: 960px;

    overflow: auto;
    min-height: 100vh;    
}

* {

    font-size: 14px;
    font-family: 'Times New Roman', Times, serif;
}
</style>