<template>
<el-container >
  <el-header height="30px">
    <myheader/>
  </el-header>
  <el-main>
     <nuxt />
  </el-main>
 
</el-container> 
<!-- 
<div class="home">
<div class="myheader">
  <myheader/>
</div>
<div class="mymain">
   <nuxt />
</div>
</div> -->
 
</template>

<script>
import myheader from '@/components/home/header/index.vue'


export default {
components:{
  myheader
  
}
}
</script>

<style lang="scss" scoped>

</style>