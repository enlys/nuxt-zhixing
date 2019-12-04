<template lang="html">
  <div class="m-detail-list">
     <div class="biref" v-for="(item,i) in list" :key="item._id">
          <div class="biaoti">第{{i+1}}章：{{item.subheading}}</div>
          
        
           <nuxt-link class="mp4" :to="{path:'itemvideo',query:{title:item.subheading,src:item.itemvideo}}">   <i class="el-icon-video-camera"></i>&nbsp;立即观看</nuxt-link>
        </div>
  </div>
</template>

<script>

export default {
 
  props: {
    list: {
      type:Array,
      default:()=>{
        return []
      }
    }
  },
}
</script>

<style scoped lang='scss'>
.biref {
    margin-bottom: 8px;
    padding: 24px 32px 32px;
    background: #fff;
    font-size: 18px;
    line-height: 28px;
    box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.1);
    border-radius: 12px;
    .biaoti {
      font-size: 16px;
      font-weight: bold;
      line-height: 24px;
      margin-bottom: 10px;
    }
    .mp4 {
      text-decoration: none;
      color: #fff;
      font-size: 14px;
      line-height: 30px;
      display: block;
      text-align: center;
      width: 120px;
      height: 30px;
      border-radius: 15px;
      background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
      }
  }
</style>