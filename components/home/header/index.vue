<template>
  <div class="m-headersss">
    <el-row>
      <el-col>
        <topbar/>
      </el-col>
    </el-row>
   
  </div>
</template>

<script>
import Topbar from './topbar.vue'

export default {
  components: {
   Topbar
  }
};
</script>

<style lang="scss" scoped>

@import "@/assets/css/public/header/index.scss";

</style>