<template>
  <div class="m-life">
    <el-row>
      <el-col :span="14">
        <slider/>
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"/>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <h4><img 
            src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" 
            alt=""></h4>
          <p class="m-life-login-name">Hi！你好</p>
          <p><nuxt-link to="/register"><el-button 
            round 
            size="medium">注册</el-button></nuxt-link></p>
          <p><nuxt-link to="/login"><el-button 
            round 
            size="medium">立即登录</el-button></nuxt-link></p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel"/>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"/>
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop"/>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img 
            src="https://www.imooc.com/static/img/common/appload.png" 
            alt="下载APP">
          <p>知行APP手机版</p>
          <h4><span class="red">即时学习</span></h4>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Slider from './slider.vue'
export default {
  components: {
    Slider
  }
}
</script>


<style lang="scss">
    @import "@/assets/css/index/life.scss";
</style>
