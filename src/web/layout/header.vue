<!--
 * @Description: 定位图片
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-22 13:48:09
 * @LastEditors: 源
 * @LastEditTime: 2022-12-24 10:45:27
-->
<template>
  <ul class="header">
    <li class="item"><lm-icon name="top" /></li>
    <li class="item"><lm-icon name="home" /></li>
    <li
      class="item"
      @click="showMenu"
    ><lm-icon name="menu" /></li>
  </ul>
</template>
<script setup lang="ts">
import { useConfigStore } from '@/store'
const Config = useConfigStore()
const showMenu = () => {
  Config.updateMenu();
}
</script>
