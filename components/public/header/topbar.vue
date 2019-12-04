<template>
  <el-row :gutter="0" class="m-header">
    <el-col :span="8">
       <navbar/>
        
     
    </el-col>
    <el-col :span="13">
     <div class="ss"></div>
            
     
    </el-col>
    <el-col :span="3">
     <user/>
    </el-col>
  </el-row>
</template>

<script>
import Geo from "./geo"
import user from './user'
import navbar from './nav'
export default {
  components: {
   
    user,
    navbar
  }
};
</script>

<style lang="scss">
// @import "@/assets/css/public/header.scss";
.ss{
  height: 10px;
}
</style>