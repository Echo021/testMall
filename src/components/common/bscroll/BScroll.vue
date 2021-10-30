<template>
      <div ref="wrapper" class="wrapper">
          <div class="content">
              <slot></slot>
          </div>
      </div>
</template>

<script >
import BScroll from '@better-scroll/core'

export default {
   name:'BScroll' ,
   mounted() {
      this.init()
    },
    beforeDestroy() {
      this.bs.destroy()
    },
    methods: {
      init() {
        this.bs = new BScroll(this.$refs.wrapper, {
          probeType: 3,
          click: true,
          observeDom:true
        })
      }
    }
}
</script>

<style scoped>
</style>