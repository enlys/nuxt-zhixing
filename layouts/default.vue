<template>
<el-container class="layout-default">
  <el-header height="197px">
    <myheader/>
  </el-header>
  <el-main>
     <nuxt />
  </el-main>
  <el-footer height="100%">
    <myfooter/>
  </el-footer>
</el-container>
 
</template>

<script>
import myheader from '@/components/public/header/index.vue'
import myfooter from '@/components/public/footer/index.vue'

export default {
components:{
  myheader,
  myfooter
}
}
</script>
