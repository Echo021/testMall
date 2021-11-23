<template>
   <div>
       <div class="param-info" v-if="Object.keys(paramInfo).length!==0">
           <table v-for="item in paramInfo.sizes" :key='item'>
               <tr v-for="tr in item" :key="tr">
                   <td v-for="td in tr" :key="td">{{td}}</td>
               </tr>
           </table>
           <table class="param-infos"> 
               <tr v-for="item in paramInfo.infos" :key="item">
                   <td class="info-param-key">{{item.key}}</td>
                   <td class="info-value">{{item.value}}</td>
               </tr>
           </table>
       </div>
       <div class="info-img" v-if="paramInfo.image.length !== 0">
        <img :src="paramInfo.image" alt="">
       </div>
   </div>
</template>

<script >
   export default {
       name:'DetailParamInfo' ,
       props:{
           paramInfo:{
               type:Object,
               default(){
                   return {}
               }
           }
       }
   }
</script>

<style scoped>
.param-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
.param-info table {
    width: 100%;
    border-collapse: collapse;
}
.param-info table tr {
    height: 42px;
}
 .param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
 .info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }
  .param-infos {
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .info-value {
      color: #eb4868;
  }
</style>