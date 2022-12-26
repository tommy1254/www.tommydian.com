<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-22 13:48:00
 * @LastEditors: 源
 * @LastEditTime: 2022-12-24 14:30:15
-->
<template>
  <el-drawer
    v-model="menu"
    direction="ltr"
    :with-header="false"
  >
    <ul class="menu">
      <li class="">
        <router-link to="/">1</router-link>
      </li>
    </ul>
  </el-drawer>

</template>
<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useConfigStore } from '@/store'

const Config = useConfigStore()
// storeToRefs 让数据快去取出 并且不丢失响应式
let { menu } = storeToRefs(Config)
</script>
<style scoped lang="scss">
.menu {
  a {
    display: block;
    color: #868E8E;
    padding: 10px 0;
    font-size: 14px;
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
