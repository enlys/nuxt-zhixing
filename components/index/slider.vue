<template>
  <div class="slide">
    <el-carousel height="240px">
      <el-carousel-item 
        v-for="item in list" 
        :key="item.img">
        <img :src="item.img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      list: [{
        url: '#abc',
        img: 'https://img.mukewang.com/5dceaccf0001f22c18720764.jpg'
      }, {
        url: '#bsbsb',
        img: 'https://img.mukewang.com/5da52155000159d118720764.jpg'
      }, {
        url: '#sjfkajfj',
        img: 'https://img.mukewang.com/5dd1fe8800013d1818720764.jpg'
      }, {
        url: '#sjfkajfja',
        img: 'https://img.mukewang.com/5ddb345f00016ca218720764.jpg'
      }, {
        url: '#kjljj',
        img: 'https://img.mukewang.com/5dd1f51c0001e39918720764.jpg'
      }]
    }
  }
}
</script>
