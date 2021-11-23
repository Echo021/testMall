<template>
   <div id='home'>
       <nav-bar class="home_navbar"><div slot='middle'>购物街</div></nav-bar>
       <control-bar :titles="['流行','新款','精选']" 
                    @clickBar='clickGoodsItem' 
                    ref='tabControl1' 
                    class='fixed' v-show="isTabFixed"/>
       <scroll class="wrapper" 
               ref='scroll' 
               :probe-type='2' 
               @scroll='contentScroll' 
               :pullUpLoad='true'
               @pullingUp='loadMore'>
           <home-swiper :banners='banners' @swiperImageLoad='swiperImageLoad'></home-swiper>
           <home-recommend-item :recommends='recommends'></home-recommend-item>
           <feature-item></feature-item>
           <control-bar :titles="['流行','新款','精选']" @clickBar='clickGoodsItem' ref='tabControl2'/>
           <goods-list :goods="showGoods"></goods-list>
       </scroll>
       <back-top @click.native='backtop' v-show='btnIsShow'></back-top>
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
import BackTop from 'components/context/backTop/BackTop'

import {getHomeMultidata,getHomeGoods} from 'network/home'
import {debounce} from 'common/utils'

   export default {
       name:'Home',
       components:{
           HomeSwiper,
           HomeRecommendItem,
           FeatureItem,

           NavBar,
           ControlBar,
           GoodsList,
           Scroll,
           BackTop
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
               currentType:'pop',
               btnIsShow:false,
               tabOffSetTop:0,
               isTabFixed:false,
               scrollY:0
           }
       },
       computed:{
           showGoods(){
               return this.goods[this.currentType].list
           }
       },
       activated(){
           this.$refs.scroll.scrollTo(0,this.scrollY,0)
       },
       deactivated(){
           this.scrollY=this.$refs.scroll.scrollY()
       },
       created(){
           this.getHomeMultidata()
           this.$nextTick(()=>{
	         this.getHomeGoods('pop')
	       })
           this.$nextTick(()=>{
	         this.getHomeGoods('new')
	       })
           this.$nextTick(()=>{
	         this.getHomeGoods('sell')
	       })
        //    this.getHomeGoods('pop')
        //    this.getHomeGoods('new')
        //    this.getHomeGoods('sell')
       },
       mounted(){
           //1.判断图片是否加载完成
           const refresh = debounce(this.$refs.scroll.refresh,50)
           this.$bus.$on('imageLoad',()=>{
               refresh()
           })
       },
       methods:{
           /**
            * 方法
            */
           clickGoodsItem(index){
               this.currentType=Object.keys(this.goods)[index]
               this.$refs.tabControl1.currentIndex=index
               this.$refs.tabControl2.currentIndex=index
           },
           backtop(){
               this.$refs.scroll.scrollTo(0,0)
            },
            //加载更多
            loadMore(){
                // console.log('加载给更多');
                this.getHomeGoods(this.currentType)
                this.$refs.scroll.refresh()
            },
           //计算tabControl到顶部的距离
           swiperImageLoad(){
               this.tabOffSetTop=this.$refs.tabControl2.$el.offsetTop
           },
            //请求当前滑动到的位置
           contentScroll(position){
            //    console.log(position);
            //判断是否显示backTop
             this.btnIsShow=(-position.y)>1000
             //判断是否吸顶
             this.isTabFixed=(-position.y)>this.tabOffSetTop
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
                    //结束上拉加载行为 调用 finishPullUp() 告诉 BetterScroll 准备好下一次的 pullingUp 钩子。
                    this.$refs.scroll.finishPullUp()
                })
            }
       }
   }
</script>

<style scoped>
#home {
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
}
.home_navbar {
    background-color: var(--color-tint);
    color: #fff;
    /* 这是在使用原生浏览器滚动时，为了固定头部而使用的 现在使用bscoll不会影响到头部 */
    /* position: fixed;
    top:0;
    left: 0;
    right: 0;
    z-index: 9; */
}
.wrapper {
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
}
.fixed {
    position: relative;
    z-index: 9;
}
</style>