<template>
  <div>
    <section class="m-istyle">
      <dl @mouseover="over">
        <dt>学习线路</dt>
        <dd :class="{active:kind==='all'}" kind="all" keyword="Vue">Vue</dd>
        <dd :class="{active:kind==='part'}" kind="part" keyword="Html">Html</dd>
        <dd :class="{active:kind==='spa'}" kind="spa" keyword="JS">JS</dd>
        <dd :class="{active:kind==='movie'}" kind="movie" keyword="React">React</dd>
        <dd :class="{active:kind==='travel'}" kind="travel" keyword="Node.js">Node.js</dd>
      </dl>
      <ul class="ibody">
        <li v-for="item in cur" :key="item.id">
          <el-card :body-style="{ padding: '0px' }" shadow="never">
            <img :src="item.img" class="image" />
            <ul class="cbody">
             
               <li class="title" v-if="item.brief">
                
                 <nuxt-link :to="{path:'detail',query:{keyword:item.id,type:'1'}}">{{ item.title }}</nuxt-link>
               </li>
                <li class="title" v-else>
                
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
    <section class="m-istyle">
      <dl style="background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);">
        <dt>新上好课</dt>
      </dl>
      <ul class="ibody">
        <li v-for="item in newcourse" :key="item.id">
          <el-card :body-style="{ padding: '0px' }" shadow="never">
            <img :src="item.img" class="image" />
            <ul class="cbody">
              <li class="title" >
                
                 <nuxt-link :to="{path:'detail',query:{keyword:item.id,type:'1'}}">{{ item.title }}</nuxt-link>
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
    <div class="zhishi">
      <h4>知识体系</h4><br/>
      <ul>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/5f32/595b876537116.png" alt="HTML5开发">
                    <h3>HTML5开发</h3>
                    <span>116门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/28dc/595b878d67fdd.png" alt="Android">
                    <h3>Android</h3>
                    <span>90门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/ff9b/595b87bf6cec5.png" alt="JavaWeb">
                    <h3>JavaWeb</h3>
                    <span>64门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/2d29/595b87d12c634.png" alt="Node.js">
                    <h3>Node.js</h3>
                    <span>39门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/0dfc/595b87e3c9351.png" alt="Bootstrap">
                    <h3>Bootstrap</h3>
                    <span>11门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/6c5e/595b8805ce869.png" alt="Unity3D">
                    <h3>Unity3D</h3>
                    <span>45门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/222d/595b881a26b3b.png" alt="iOS开发">
                    <h3>iOS开发</h3>
                    <span>51门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/dee2/595b8829d33ec.png" alt="Java语言">
                    <h3>Java语言</h3>
                    <span>45门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/53bc/595b886903b76.png" alt="PHP语言">
                    <h3>PHP语言</h3>
                    <span>23门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/0579/595b88771f5b2.png" alt="Python">
                    <h3>Python</h3>
                    <span>38门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/cdc0/595b88843e58d.png" alt="Swift语言">
                    <h3>Swift语言</h3>
                    <span>11门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/b9a5/595b88929e943.png" alt="JavaScript">
                    <h3>JavaScript</h3>
                    <span>43门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/400c/595b88b8739f6.png" alt="C语言">
                    <h3>C语言</h3>
                    <span>17门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/b8ad/595b88d574b22.png" alt="Asp.Net">
                    <h3>Asp.Net</h3>
                    <span>61门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/5ea3/595b88f1e8ed4.png" alt="Cocos2d-x游戏开发">
                    <h3>Cocos2d-x游戏开发</h3>
                    <span>89门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/8528/595b8907d4aba.png" alt="C#">
                    <h3>C#</h3>
                    <span>30门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/43a9/595b895a7f00a.png" alt="GUI">
                    <h3>GUI</h3>
                    <span>40门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/0e6e/595b89670adf8.png" alt="Docker">
                    <h3>Docker</h3>
                    <span>9门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/8637/595b897841a09.png" alt="Arduino">
                    <h3>Arduino</h3>
                    <span>14门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/9c12/595b8985638f0.png" alt="Egret">
                    <h3>Egret</h3>
                    <span>7门课程</span>
                </a>
            </li>
        
            <li>
                <a href="#" target="_blank">
                    <img src="http://a1.jikexueyuan.com/home/201707/04/d3c1/595b8993e8cd3.png" alt="Android UiAutomator">
                    <h3>Android UiAutomator</h3>
                    <span>20门课程</span>
                </a>
            </li>
        
    </ul>
    </div>
    <div class="myfoot">
     
					<a href="#" target="_blank">关于我们</a><i>|</i>
					<a href="#" target="_blank">加入我们</a><i>|</i>
					<a href="#" target="_blank">联系我们</a><i>|</i>
					<a href="#" target="_blank">企业合作</a><i>|</i>
					<a href="#" target="_blank">讲师合作</a><i>|</i>
					<a href="#" target="_blank">帮助中心</a><i>|</i>
					<a href="#" target="_blank">黑板报</a><i>|</i>
					<a href="#" target="_blank">友情链接</a>
				
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: () => {
    return {
      kind: "all",
      list: {
        all: [],
        part: [],
        spa: [],
        movie: [],
        travel: []
      },
      newcourse:[]
    };
  },
  computed: {
    cur: function() {
      // console.log(axios)
      return this.list[this.kind];
    }
  },
  async mounted() {
    let self = this;
    let {
      status,
      data: { count, pois }
    } = await axios.get("/search/resultsByKeywords", {
      params: {
        keyword: "Vue"
        // city:self.$store.state.geo.position.city
      }
    });
    if (status === 200 && count > 0) {
      let r = pois
        .filter(item => item.icon)
        .map(item => {
          return {
            title: item.title,
            pos: item.category,
            price: item.biz_ext || "暂无",
            img: item.icon,
            id:item._id,
            brief:item.brief
          };
        });
      self.list[self.kind] = r.slice(0, 9);
    } else {
      self.list[self.kind] = [];
    }
    this.getxinke();
  },
  methods: {
   async getxinke(){
     let self = this;
      let {
          status,
          data: { count, pois }
        } = await axios.get("/search/newcourse");
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
          self.newcourse= r.slice(0, 9);
        } else {
          self.newcourse = [];
        }
    },
    over: async function(e) {
      let dom = e.target;
      let tag = dom.tagName.toLowerCase();
      let self = this;
      if (tag === "dd") {
        this.kind = dom.getAttribute("kind");
        let keyword = dom.getAttribute("keyword");
        let {
          status,
          data: { count, pois }
        } = await axios.get("/search/resultsByKeywords", {
          params: {
            keyword
            // city:self.$store.state.geo.position.city
          }
        });
        if (status === 200 && count > 0) {
          let r = pois
            .filter(item => item.icon)
            .map(item => {
              return {
                title: item.title,
                pos: item.category,
                price: item.biz_ext || "暂无",
                img: item.icon,
                 id:item._id,
                  brief:item.brief

              };
            });
          self.list[self.kind] = r.slice(0, 9);
        } else {
          self.list[self.kind] = [];
        }
      }
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";

</style>
