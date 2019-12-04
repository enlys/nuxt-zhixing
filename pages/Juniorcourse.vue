<template>
   <div style="width:100%;">
    <el-row :gutter="20">
      <el-col :span="24">
        <section class="m-istyle">
       <dl style="background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);">
        <dt>初级课程</dt>
      </dl>
      <ul class="ibody">
        <li v-for="item in list" :key="item.id">
          <el-card :body-style="{ padding: '0px' }" shadow="never">
            <img :src="item.img" class="image" />
            <ul class="cbody">
              <li class="title" >
                
                 <nuxt-link :to="{path:'detail',query:{keyword:item.id,type:'2'}}">{{ item.title }}</nuxt-link>
               </li>
              <li class="pos">
                <span>{{ item.pos }}</span>
              </li>
              <li class="price">
                ￥
                <em>{{ item.price }}</em>
              </li>
            </ul>
          </el-card>
        </li>
      </ul>
    </section>
        
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

    data(){
        return{
            list:[]
        }
    },
   async mounted(){
        let self = this;
      let {
          status,
          data: { count, pois }
        } = await this.$axios.get("/search/Juniorcourse");
        if (status === 200 && count > 0) {
          let r = pois
            .filter(item => item.icon)
            .map(item => {
              return {
                title: item.title,
                pos: item.category,
                price: item.biz_ext || "暂无",
                img: item.icon,
                 id:item._id
              };
            });
          self.list= r;
        } else {
          self.list = [];
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";

</style>>