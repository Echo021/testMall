<template>
   <div class="goods-item" @click='itemClick'>
       <img :src="goodsItem.show.img" alt="" @load='imageLoad'>
       <div class="goods-info">
           <p>{{goodsItem.title}}</p>
           <span class="price">{{goodsItem.price}}</span>
           <span class="collect">{{goodsItem.cfav}}</span>
       </div>
   </div>
</template>

<script >
   export default {
       name:'GoodsListItem' ,
       props:{
           goodsItem:{
               type:Object,
               default(){
                   return {}
               }
           }
       },
       methods:{
           //vue通过@load来监听图片是否加载完成
           imageLoad(){
               //$bus称为事件总线，需要自定义 可以实现父孙之间或者更远关系的一个传递
               this.$bus.$emit('imageLoad')
           },
           itemClick(){
               this.$router.push('/detail/'+this.goodsItem.iid)
           }
       }
   }
</script>

<style scoped>
.goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 45vw;
}
.goods-item img {
    width: 100%;
    border-radius: 5px;
}
.goods-info {
    position: absolute;
    bottom: 5px;
    left:0;
    right: 0;
    font-size: 12px;
    overflow: hidden;
    text-align: center;
}
.goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}
.goods-info .price {
    color:var(--color-high-text);
    margin-right: 20px;
}
.goods-info .collect {
    position: relative;
}
.goods-info .collect::before {
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    left: -14px;
    top: -1px;
    background: url(~assets/img/common/collect.svg) 0 0/14px no-repeat;
}
</style>