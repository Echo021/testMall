<template>
    <div ref="wrapper" class="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script >
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import Pullup from '@better-scroll/pull-up'

BScroll.use(ObserveDOM)
BScroll.use(Pullup)

export default {
  name: "BScroll",
  props:{
      probeType:{
          type:Number,
          default:0
      },
      pullUpLoad:{
          type:Boolean,
          default:false
      }
  },
  data(){
    return {
        scroll:null
    }
  },
  mounted(){
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll() {
      if(!this.scroll){
        this.scroll = new BScroll(this.$refs.wrapper,{
          observeDOM: true,
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad,
          click: true,
        })
      }
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
        // console.log(position);
      })
      this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp')
      })
    },
    //回到顶部
    scrollTo(x,y ,time=300){
        this.scroll&&this.scroll.scrollTo(x,y,time)
    },
    //结束上拉加载事件
    finishPullUp(){
        this.scroll.finishPullUp()
    },
    //监听滚动的位置
     refresh(){
    //重新计算BS 先判断事件是否this.scroll存在
      this.scroll && this.scroll.refresh()
    },
    enable() {
      // 启用BS
      this.scroll && this.scroll.enable()
    },
    disable(){
    //禁用BS
      this.scroll&&this.scroll.disable();
    },
    scrollY(){
        return this.scroll?this.scroll.y:0
    }
  },
  watch: {
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    data() {
      setTimeout(() => {
        this.refresh()
      }, 200)
    }
  }
}
</script>

<style scoped> 

</style>
