<template>
  <dl class="s-item">
    <dt>
      <img :src="meta.img" alt="商品图片" />
    </dt>
    <dd>
      <div v-if="meta.brief">
        <h3>
          <nuxt-link :to="{path:'detail',query:{keyword:meta.id,type:'1'}}">{{ meta.name }}</nuxt-link>
        </h3>
      </div>
      <div v-else>
        <h3>
          <nuxt-link :to="{path:'detail',query:{keyword:meta.id,type:'2'}}">{{ meta.name }}</nuxt-link>
        </h3>
      </div>

      <el-rate v-model="meta.rate" :colors="['#ff9900', '#ff9900', '#FF9900']" disabled />
      <span v-if="meta.rate>4" class="s-item-comment">很好</span>
      <span v-else-if="meta.rate>3" class="s-item-comment">好</span>
      <span v-else class="s-item-comment">一般</span>
      <span class="s-item-value">{{ meta.rate }}分</span>
      <span class="s-item-comment-total">{{ meta.comment }}人评论</span>
      <p>
        <span class="s-item-type">{{ meta.module }}</span>
        <span class="s-item-addr">{{ meta.addr }}</span>
      </p>
      <p>
        <em class="s-item-price">免费</em>
      </p>
      <ul>
        <!-- <li>
          <span class="detail-type">门票</span>{{meta.ticket}}
        </li>
        <li>
          <span class="detail-type">跟团</span>{{meta.group}}
        </li>-->
        <li v-if="meta.brief">
          <span class="detail-type">{{meta.module }}</span>
          {{ meta.brief }}
        </li>
        <li v-else>
          <span class="detail-type">{{meta.module }}</span>
          暂无描述
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    meta: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
