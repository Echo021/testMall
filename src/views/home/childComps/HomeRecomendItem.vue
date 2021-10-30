<template>
   <div class="recommends">
       <div v-for='item in recommends' :key='item' class="recommends-item">
           <a :href="item.link">
               <img :src="item.image" alt="">
               <div>{{item.title}}</div>
           </a>
       </div>
   </div>
</template>

<script >
   export default {
       name:'HomeRecommendItem' ,
       props:{
           recommends:{
               type:Array,
               default(){
                   return {}
               }
           }
       }
   }
</script>

<style scoped>
  .recommends {
      display: flex;
      width: 100%;
      padding: 10px 0 20px;
      border-bottom: 10px solid #eee;
      text-align: center;
      font-size: 12px;
  }
  .recommends-item {
      flex:1;
  }
  .recommends-item img {
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
  }
</style>