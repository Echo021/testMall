<template>
   <div class="comment-info" v-if='Object.keys(commentInfo).length!==0'>
       <div class="comment-title">
           <div class="comment-name">用户评价</div>
           <div class="comment-more">更多</div>
       </div>
       <div class="detail-comment">
           <div class="user-info">
               <img class="user-avatar" :src="commentInfo.user.avatar" />
               <div class="user-name">{{commentInfo.user.uname}}</div>
           </div>
       </div>
       <div class="comment-context">
           <div class="content">{{commentInfo.content}}</div>
           <p class="content-info">
               {{commentInfo.created|dataShow}} {{commentInfo.style}}
           </p>
       </div>
       <!-- <div class="shop_reply" v-if="comment.canExplain != null">
          {{ comment.canExplain}}
       </div> -->
       <div class="comment-img" v-if="commentInfo.images!==null">
           <img v-for="(item,index) in commentInfo.images" :src="item" :key='index'>
       </div>
       <ul>
           <li>liebiao</li>
           <li>liebiao</li>
           <li>liebiao</li>
           <li>liebiao</li>
           <li>liebiao</li>
       </ul>
   </div>
</template>

<script >
import {formateData} from 'common/utils'
   export default {
       name:'DetailCommentInfo' ,
       props:{
           commentInfo:{
               type:Object,
               default(){
                   return {}
               }
           }
       },
       filters:{
           dataShow(value){
               let data=new Date(value*1000)
               return formateData(data,'yyyy-MM-dd')
           }
       }
   }
</script>

<style scoped>
.comment-info {
    padding: 0 15px;
    position: relative;
}
.comment-title {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.3);
}
.comment-more {
    position: absolute;
    right: 15px;
    top: 0;
}
.detail-comment {
    padding: 10px 0;
    position: relative;
    font-size: 14px;
}
.user-info .user-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.user-info .user-name {
    position: absolute;
    left: 60px;
    top: 30px;
}
.comment-context .content {
    line-height: 1rem;
    color: #666;
}
.comment-context .content-info {
    padding: 8px 0;
    color: #999;
}
.shop_reply {
  border-top: 0.04rem solid rgba(128, 128, 128, 0.4);
  padding: 0.5rem 0;
  color: gray;
  line-height: 0.8rem;
}
.comment-img {
    display: flex;
} 
.comment-img img {
    height: 80px;
    margin: 0 2px;
    flex: 1;
}
</style>