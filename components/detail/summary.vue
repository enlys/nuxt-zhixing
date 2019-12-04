<template>
  <dl class="m-sum-card">
    <dt>
      <h1>{{ meta.title }}</h1>
      <el-rate v-model="rate" disabled />
      <span>{{rate }}分</span>

      <ul>
        <li v-if="meta.brief">
          <span class="detail-type">{{meta.module }}</span>
          {{ meta.brief }}
        </li>
        <li v-else>
          <span class="detail-type">{{meta.module }}</span>
          暂无描述
        </li>
      </ul>
    </dt>
    <dd>
      <img
        :src="meta.icon"
        alt="商品图片"
        class="imgicon"
       
      />
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    meta: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      sale: 70 + Math.floor(Math.random() * 300)
    };
  },
  computed: {
    rate: function() {
      return Math.floor(Math.random() * 3 + 3);
    }
  },
  mounted() {
    console.log(this.meta);
  },
  methods: {
    openMap: function(location) {}
  }
};
</script>

<style scoped >
.imgicon{
width: 270px;
    height: 120px;
    overflow: hidden;
    margin-left: 15px;
}
</style>