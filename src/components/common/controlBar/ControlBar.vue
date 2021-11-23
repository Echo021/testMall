<template>
   <div class="control-bar">
       <div v-for="(item,index) in titles" 
            class="control-bar-item" :key="item" 
            :class="{active:currentIndex==index}" @click="itemClick(index)">
           <span>{{item}}</span>
        </div>
   </div>
</template>

<script >
   export default {
       name:'ControlBar',
       props :{
           titles:{
               type:Array,
               default(){
                   return []
               }
           }
       },
       data(){
           return {
               currentIndex:0 ,//记录当前状态
           }
       },
       methods:{
           itemClick(index){
               this.currentIndex=index
               this.$emit('clickBar',index)
           }
       }
   }
</script>

<style scoped>
.control-bar {
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
}
.control-bar-item {
    flex:1;
}
.control-bar-item span {
    padding: 5px;
}
.active {
    color: var(--color-high-text)
}
.active span {
    border-bottom: 2px solid var(--color-high-text);
}
</style>