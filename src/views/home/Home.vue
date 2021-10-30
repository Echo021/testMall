<template>
   <div id='home'>
       <nav-bar class="home_navbar"><div slot='middle'>购物街</div></nav-bar>
       <scroll class="content">
           <home-swiper :banners='banners'></home-swiper>
           <home-recommend-item :recommends='recommends'></home-recommend-item>
           <feature-item></feature-item>
           <control-bar :titles="['流行','新款','精选']" @clickBar='clickGoodsItem'/>
           <goods-list :goods="showGoods"></goods-list>
       </scroll>

        <ul>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
        </ul>
   </div>

</template>

<script >
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendItem from './childComps/HomeRecomendItem'
import FeatureItem from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import ControlBar from 'components/common/controlBar/ControlBar'
import GoodsList from 'components/context/goods/GoodsList'
import Scroll from 'components/common/bscroll/BScroll'


import {getHomeMultidata,getHomeGoods} from 'network/home'
   export default {
       name:'Home',
       components:{
           HomeSwiper,
           HomeRecommendItem,
           FeatureItem,

           NavBar,
           ControlBar,
           GoodsList,
           Scroll
       },
       data(){
           return {
               banners:[],
               recommends:[],
               goods:{
                   pop:{page:0,list:[]},
                   new:{page:0,list:[]},
                   sell:{page:0,list:[]}
               },
               currentType:'pop'
           }
       },
       computed:{
           showGoods(){
               return this.goods[this.currentType].list
           }
       },
       created(){
           this.getHomeMultidata()
           this.getHomeGoods('pop')
           this.getHomeGoods('new')
           this.getHomeGoods('sell')
       },
       methods:{
           /**
            * 方法
            */
           clickGoodsItem(index){
               this.currentType=Object.keys(this.goods)[index]
           },

           /**
            * 网络请求数据
            */
            getHomeMultidata(){
               getHomeMultidata().then((res)=>{
                this.banners=res.data.banner.list
                this.recommends=res.data.recommend.list
               })
            },
            getHomeGoods(type){
                const page=this.goods[type].page+1
                getHomeGoods(type,page).then(res=>{
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page+=1
                })
            }
       }
   }
</script>

<style scoped>
#home {
    padding-top: 44px;
}
.home_navbar {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    z-index: 9;
}
.content {
    height: 400px;
    position: absolute;
    overflow: hidden;
}
</style>