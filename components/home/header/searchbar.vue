<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
      <img src="https://electronjs.org/images/favicon.ico" alt="知行" />
        <div class="tit">  <a href="/" > 知行</a></div>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            placeholder="搜索商家或地点"
            @focus="focus"
            @blur="blur"
            @input="input"
          />
          <button class="el-button el-button--primary" @click="seacrchke">
            <i class="el-icon-search" />
          </button>
          <dl v-if="isHotPlace" class="hotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,idx) in hotPlace" :key="idx">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item.name }}</a>
            </dd>
          </dl>
          <dl v-if="isSearchList" class="searchList">
            <dd v-for="(item,idx) in searchList" :key="idx">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item.name }}</a>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a
            v-for="(item,idx) in hotPlace"
            :key="idx"
            :href="'/products?keyword='+encodeURIComponent(item.name)"
          >{{ item.name }}</a>
        </p>
        <ul class="nav">
          <li>
            <a href="/products?keyword=Vue" class="takeout">Vue</a>
          </li>
          <li>
             <a href="/products?keyword=Html" class="movie">HTML5</a>
          </li>
          <li>
             <a href="/products?keyword=React" class="hotel">React</a>
          </li>
          <li>
            <a href="/products?keyword=JS" class="apartment">JS</a>
          </li>
          <li>
             <a href="/products?keyword=Node.js" class="business">Node.js</a>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="el-icon-circle-check" />
            <p class="txt">随时学习</p>
          </li>
          <li>
            <i class="el-icon-tickets" />
            <p class="txt">即时练习</p>
          </li>
          <li>
            <i class="el-icon-medal" />
            <p class="txt">学员互动</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      search: "",
      isFocus: false,
      hotPlace: [
        { name: "Vue" },
        { name: "Html" },
        { name: "JS" },
        { name: "Node.js" },
        { name: "React" },
        { name: "Php" }
      ],
      searchList: [
         { name: "Vue" },
        { name: "Html" },
        { name: "JS" },
        { name: "Node.js" },
        { name: "React" },
        { name: "Php" }
      ]
    };
  },
  mounted() {
    // console.log(this.$store.state.home.hotPlace.slice(0, 5));
  },
  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.search;
    },
    isSearchList: function() {
      return this.isFocus && this.search;
    }
  },
  methods: {
    focus: function() {
      this.isFocus = true;
    },
    blur: function() {
      let self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 200);
    },
    input: _.debounce(async function() {
    
    }, 300),
    seacrchke(){
      console.log(this.search);
      window.location.href='/products?keyword='+encodeURIComponent(this.search)
    }
  }
};
</script>

<style lang="css">
</style>
