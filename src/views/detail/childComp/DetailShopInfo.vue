<template>
   <div v-if='Object.keys(shopInfo).length!==0' class="shop-info">
       <div class="shop-logo">
           <span class="logo">
               <img :src="shopInfo.logo" alt="" class="shopInfo-logo">
           </span>
           <span class="shopInfo-name">{{shopInfo.name}}</span>
       </div>
       <div class="shop-des">
           <div class="des-left">
               <div class="info-sell">
                   <div class="sell-count">{{shopInfo.sells|sellCountFilter}}</div>
                   <div class="sell-text">总销量</div>
               </div>
               <div class="info-goods">
                   <div class="goods-count">{{shopInfo.goodsCount}}</div>
                   <div class="goods-text">全部宝贝</div>
               </div>
           </div>
           <div class="des-right">
                <table>
                    <tr v-for="(item,index) in shopInfo.score" :key="index">
                        <td>{{item.name}}</td>
                        <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
                        <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter?'高':'低'}}</span></td>
                    </tr>
                </table>
           
        </div>
    </div>
    <div class="shop-bottom">
        <div class="enter-shop">进店逛逛</div>
    </div>
</div>
</template>

<script >
   export default {
       name:'DetailShopInfo' ,
       props:{
           shopInfo:{
               type:Object,
               default(){
                   return {}
               }
           }
       },
       filters:{
           sellCountFilter(value){
               if(value<10000) {
                   return value
               }else {
                   return (value/10000).toFixed(1)+'万'
               }
           }
       }
   }
</script>

<style scoped>
.shop-logo {
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    font-size: 14px;
}
.shop-logo .logo {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border:  1px solid #ccc; 
    overflow: hidden;
}
.shopInfo-logo {
    width: 50px;
    height: 50px;
}
.shopInfo-name {
    margin: 20px 18px;
}
.shop-des {
    display: flex;
    align-items: center;
    margin: 0 15px;
    font-size: 13px;
}
.des-left,.des-right {
    flex:1;
}
.des-left {
    display: flex;
    padding-right: 10px;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
}
.info-sell,.info-goods {
    flex: 1;
}
.des-right {
    padding-left: 24px;
}
.des-right table td {
    padding: 5px 0;
}
.des-right .score-better {
    color: #f13e3a;
}
.des-right .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
}
.des-right .better-more span {
    background-color: #f13e3a;
}
.shop-bottom {
    text-align: center;
}
.shop-bottom {
    position: relative;
    
    border-bottom: 5px solid #f2f5f8;
}
.shop-bottom .enter-shop {
    width: 150px;
    height: 30px;
    margin: 5px auto;
    line-height: 30px;
    text-align: center;
    padding: 0 10px;
    margin-bottom: 10px;
    background-color: #f2f5f8;
    border-radius: 10px;

}
</style>