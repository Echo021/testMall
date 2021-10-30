<template>
    <div class="tab_bar_item" @click='clickItem'>
        <div v-if='!isActive'><slot v-if='!isActive' name='item_icon'></slot></div>
        <div v-else><slot  name='item_icon_active'></slot></div>
        <div :style="activeStyle"><slot name='item_text'></slot></div>
    </div> 
</template>

<script >
   export default {
       name:'TabBarItem' ,
       props:{
           path:String,
           activeColor:{
               type:String,
               default: 'red'
           }
       },
       data(){
           return {
            //    isActive:true
           }
       },
       computed:{
            isActive(){
                return this.$route.path==this.path
            },
            activeStyle(){
                return this.isActive?{color:this.activeColor}:{}
            }
       },
       methods:{
           clickItem(){
               this.$router.push(this.path).catch(err=>err)
           }
       }
   }
</script>

<style scoped>
.tab_bar_item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
}
.tab_bar_item img {
    margin: 4px 0 -2px;
    width: 24px;
    height: 24px;
}
.active {
    color: #e8989a;
}
</style>