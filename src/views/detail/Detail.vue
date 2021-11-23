<template>
   <div id='detail'>
       <detail-nav-bar class="nav-bar"/>
       <scroll class="wrapper">
        <detail-swiper :topImages="topImages"/>
        <detail-base-info :goods='goods'/>
        <detail-shop-info :shopInfo='shopInfo'/>
        <detail-goods-info :detailInfo='detailInfo'/>
        <detail-param-info :paramInfo='paramInfo'/>
        <detail-comment-info :commentInfo='commentInfo'/>
       </scroll>
   </div>
</template>

<script >
import DetailNavBar from './childComp/DetailNavBar'
import DetailSwiper from './childComp/DetailSwiper'
import DetailBaseInfo from './childComp/DetailBaseInfo'
import DetailShopInfo from './childComp/DetailShopInfo'
import DetailGoodsInfo from './childComp/DetailGoodsInfo'
import DetailParamInfo from './childComp/DetailParamInfo'
import DetailCommentInfo from './childComp/DetailCommentInfo'


import Scroll from 'components/common/bscroll/BScroll'

import {getDetail,Goods,shopInfo,GoodsParam} from 'network/detail'
   export default {
       name:'Detail' ,
       data(){
           return {
               id:null,
               topImages:[],
               goods:{},
               shopInfo:{},
               detailInfo:{},
               paramInfo:{},
               commentInfo:{}
           }
       },
       components:{
           DetailNavBar,
           DetailSwiper,
           DetailBaseInfo,
           DetailShopInfo,
           DetailGoodsInfo,
           DetailParamInfo,
           DetailCommentInfo,

           Scroll
       },
       created(){
           this.id=this.$route.params.id
           getDetail(this.id).then(res=>{
               console.log(res);
               let data=res.result
               this.topImages=data.itemInfo.topImages
               this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
               this.shopInfo=new shopInfo(data.shopInfo)
               //获取商品的详情数据
               this.detailInfo=data.detailInfo
               this.paramInfo=new GoodsParam(data.itemParams.info, data.itemParams.rule)
               //获取评论信息
               if(data.rate.cRate!==0){
                   this.commentInfo=data.rate.list[0]
               }
           })
       },
       methods:{
           //网络请求数据
       }
   }
</script>

<style scoped>
#detail {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
}
.wrapper {
    height: calc(100% - 44px);
    overflow: hidden;
}
</style>