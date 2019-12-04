<template>
  <div class="m-menu">
      <dl class="nav" @mouseleave="mouseleave">
          <dt>全部分类</dt>
          <dd v-for="(item,idx) in $store.state.home.menu" :key='idx' @mouseenter="enter" >
              <i :class="item.type"></i>{{item.name}} <span class="arrow"></span>
          </dd>
      </dl>
      <div
      v-if="kind"
       class="detail"
       @mouseenter="sover"
       @mouseleave="sout">
          <template
          v-for="(item,idx) in curdetail.child">
              <h4 :key='idx'>{{item.title}}</h4>
              <span v-for="v in item.child"
              :key="v">
              <a :href="'/products?keyword='+encodeURIComponent(v)">{{ v }}</a>

              </span>
          </template>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        time:null,
        kind:'',
       
    }
},
mounted(){
// console.log(this.$store.state.home.menu);
},
computed:{
    curdetail:function(){
        return this.$store.state.home.menu.filter((item)=>item.type===this.kind)[0]
    }
},
methods:{
    mouseleave(){
     
        let selt=this;
    this.time=   setTimeout(()=> {
            this.kind=''
            //    console.log('dsgdsgs');
        }, 150);
    }
    ,enter(e){
        this.kind=e.target.querySelector('i').className
        // console.log(this.kind)
    },
    sover(){
        clearTimeout(this.time);
    },
    sout(){
        this.kind=''
    }
}
}
</script>

<style>

</style>