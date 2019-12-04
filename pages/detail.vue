<template>
  <div class="page-detail">
    <br/>
   
    <el-row>
      <el-col :span="24">
        <summa :meta="data"/> 
      </el-col>
    </el-row>
    <el-row class="m-title">
      <el-col :span="24">
       
      </el-col>
    </el-row>
    <el-row v-if="login">
      <el-col :span="24">
         <list
          v-if="data.brief"
          :list="data.content"/>
          <div v-else class="deal-need-login">
             <div class="biref" v-html="data.html"></div>
            
          </div>
        
      </el-col>
    </el-row>
       <el-row v-else>
      <el-col :span="24">
         <div class="deal-need-login">
          <img
            src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png"
            alt="登录查看">
          <span>请登录后查看详情</span>
          <el-button
            type="primary"
            round>
            <a href="/login">立即登录</a>
          </el-button>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>

import Summa from '@/components/detail/summary.vue'
import List from '@/components/detail/list.vue'
export default {
  components:{
   
    Summa,
    List
  },
  computed:{
   
  },
  async asyncData(ctx){
    let {keyword,type}=ctx.query;
    let {status,data:{code,data,login}}=await ctx.$axios.get('/search/products',{
      params:{
        keyword,
        type
        
      }
    })
    // console.log(data)
    if(status===200){
      return {
       data,
       login
      }
    }else{
      return {
        login:false,
       data:{}
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/detail/index.scss";
  .biref{
    margin-bottom: 8px;
    padding: 24px 32px 32px;
    background: #fff;
    font-size: 18px;
    line-height: 28px;
    
    
    text-align: left;
  }
</style>
