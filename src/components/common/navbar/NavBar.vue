<template>
   <div class="nav_bar">
       <div class="left"><slot name="left"></slot></div>
       <div class="middle"><slot name="middle"></slot></div>
       <div class="right"><slot name="right"></slot></div>
   </div>
</template>

<script >
   export default {
       name:'NavBar' 
   }
</script>

<style scoped>
    .nav_bar {
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        font-size: 14px;
    }
    .left ,.right {
        width: 60px;
    }
    .middle {
        flex:1;
    }
</style>