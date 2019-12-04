<template>
  <el-row class="page-product">
    <el-col :span="24">
      <div class="m-product-categroy">
        <dl class="classic">
          <dt>分类</dt>
          <dt>全部</dt>
          <dd>
            <el-select v-model="value" placeholder="全部" @change="gettype">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </dd>
        </dl>
      </div>

      <list :list="list" />
    </el-col>
  </el-row>
</template>

<script>
import List from "@/components/products/list.vue";

export default {
  components: {
    List
  },
  data() {
    return {
      list: [],
      types: [],
      areas: [],
      keyword: "",
      point: [],
      options: [
        {
          value: "0",
          label: "全部"
        },
        {
          value: "1",
          label: "初级课程"
        },
        {
          value: "2",
          label: "实战课程"
        }
      ],
      value: ""
    };
  },
  async asyncData(ctx) {
    let keyword = ctx.query.keyword;

    let {
      status,
      data: { count, pois }
    } = await ctx.$axios.get("/search/resultsByKeywords", {
      params: {
        keyword
      }
    });
 
    if (status === 200 && count > 0 ) {
      return {
        list: pois
          .filter(item => item.icon)
          .map(item => {
            return {
              type: item.type,
              img: item.icon,
              name: item.title,
              comment: Math.floor(Math.random() * 10000),
              rate: Math.floor(Math.random()*3+ 3),
              price: 20,
              scene: item.tag,
              tel: item.tel,
              status: "可订明日",
              location: "www.baidu.com",
              module: item.category,
              brief:item.brief,
              id:item._id
            };
          }),
          keyword
        
      };
    }
  },
  methods:{
  async  gettype(e){
    
      let { status, data: { count, pois } } = await this.$axios.get("/search/Keywordclassification", {
      params: {
        keyword:this.keyword,
        type:e
      }
    })
     if (status === 200 && count > 0 ) {
      this.list=pois
          .filter(item => item.icon)
          .map(item => {
            return {
              type: item.type,
              img: item.icon,
              name: item.title,
              comment: Math.floor(Math.random() * 10000),
              rate: Math.floor(Math.random()*3+ 3),
              price: 20,
              scene: item.tag,
              tel: item.tel,
              status: "可订明日",
              location: "www.baidu.com",
              module: item.category,
              brief:item.brief,
              id:item._id
            };
          })
     }else{
       this.$message({
         message:'获取失败',
         type:'warning'
       })
     }



    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
.m-product-categroy {
  padding: 15px 20px 0;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
.classic {
  display: flex;
  padding-bottom: 10px;
  > dt {
    width: 80px;
    margin-top: 10px;
    &:nth-child(2) {
      border-radius: 100px;
      background: #13d1be;
      color: #fff;
      height: 22px;
      line-height: 22px;
      width: 40px;
      box-sizing: border-box;
      margin-right: 40px;
      text-align: center;
    }
  }
  &:nth-child(1) {
    dd {
      border-bottom: 1px solid #ddd;
    }
  }
}
</style>
