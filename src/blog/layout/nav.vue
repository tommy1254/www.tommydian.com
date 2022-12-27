<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-22 13:48:00
 * @LastEditors: 源
 * @LastEditTime: 2022-12-27 16:52:16
-->
<template>
  <el-drawer
    v-model="menu"
    direction="ltr"
    :with-header="false"
  >
    <ul class="menu">
      <li class="">
        <router-link to="/">全部文章</router-link>
      </li>

      <NavItem :data="data" />
      <li class="last">
        <el-input v-model="search">
          <template #prefix>
            <lm-icon name="search" />
          </template>
        </el-input>
      </li>
      <li class="last">
        <img src="@/assets/config/wx_login.png">
      </li>
    </ul>
  </el-drawer>

</template>
<script setup lang="ts">
import { storeToRefs } from "pinia"
import { ref } from 'vue';

import { useConfigStore } from '@/store'
import NavItem from './nav-item.vue';

import { getArticleCategory } from '@api/blog/article';
const Config = useConfigStore()
// storeToRefs 让数据快去取出 并且不丢失响应式
let { menu } = storeToRefs(Config)
const search = ref('');
const data = ref([])
getArticleCategory().then((res) => {
  data.value = res.data;

})
</script>
<style scoped lang="scss">
.menu {

  a,
  p {
    display: block;
    color: #868E8E;
    padding: 10px 0;
    font-size: 14px;
  }

  img {
    width: 15vw;
    display: block;
    margin: 0 auto;
  }

  .last {
    padding: 10px 0;
    border-top: 1px solid #ddd;
  }
}
</style>
<style lang="scss">
.el-drawer {
  background: #333;
}

.el-menu {
  border-right: none;
}
</style>
