<template>
   <div class="goods-info" v-if="Object.keys(detailInfo).length!==0">
       <div class=info-des>
           <div class="des">{{detailInfo.desc}}</div>
       </div>
       <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
       <div class="info-list">
           <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src='item'>
       </div>
   </div>
</template>

<script >
   export default {
       name:'DetailGoodsInfo' ,
       props:{
           detailInfo:{
               type:Object,
               default(){
                   return {}
               }
           }
       }
   }
</script>

<style scoped>
.goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
 .info-key {
   margin: 10px 0 10px 15px;
   color: #333;
   font-size: 15px;
 }
 .info-list img {
     width: 100%;
 }
</style>