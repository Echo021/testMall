<template>
    <tab-bar>
          <tab-bar-item path='/home' >
                <img src="~assets/img/tabbar/首页.svg" alt="" slot="item_icon">
                <img src="~assets/img/tabbar/首页1.svg" alt="" slot="item_icon_active">
                <div slot='item_text'>首页</div>
          </tab-bar-item>
          <tab-bar-item path='/category'>
                <img src="~assets/img/tabbar/分类.svg" alt="" slot="item_icon">
                <img src="~assets/img/tabbar/分类1.svg" alt="" slot="item_icon_active">
                <div slot='item_text'>分类</div>
          </tab-bar-item>          
          <tab-bar-item path='/cart' activeColor='deepPink'>
                <img src="~assets/img/tabbar/购物车.svg" alt="" slot="item_icon">
                <img src="~assets/img/tabbar/购物车1.svg" alt="" slot="item_icon_active">
                <div slot='item_text'>购物车</div>
          </tab-bar-item>          
          <tab-bar-item path='/profile' activeColor='deepPink'>
                <img src="~assets/img/tabbar/我的.svg" alt="" slot="item_icon">
                <img src="~assets/img/tabbar/我的1.svg" alt="" slot="item_icon_active">
                <div slot='item_text'>我的</div>
          </tab-bar-item>
    </tab-bar>
</template>

<script >
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
   export default {
       name:'mainTabBar' ,
       components:{
           TabBar,
           TabBarItem
       }
   }
</script>

<style scoped>
</style>