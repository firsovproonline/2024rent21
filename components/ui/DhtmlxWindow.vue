<script setup>
    let myWins = null
    const myCoolDiv = ref(null)
    onMounted(() => {
        console.log(myCoolDiv.value)
        myWins = new dhtmlXWindows();
        myWins.attachViewportTo('__nuxt');
        const w = myWins.createWindow({
            id:"about",
            left:0,
            top:0,
            width:myCoolDiv.value.children[0].offsetWidth,
            height:myCoolDiv.value.children[0].offsetHeight,
            center:false,
            onClose:function(){
                alert("I'm closed");
            }
        });
        w.attachObject(myCoolDiv.value);
        w.show()
    })
</script>
<template>
<div ref="myCoolDiv">
    <slot name="body" />
</div>
</template>
