<!--
 * @Description: 定位图片
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-22 13:48:09
 * @LastEditors: 源
 * @LastEditTime: 2022-12-23 17:24:10
-->
<template>
  <ul class="header">
    <li class="item"><lm-icon name="top" /></li>
    <li class="item"><lm-icon name="home" /></li>
    <li class="item"><lm-icon name="menu" /></li>
  </ul>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
$size: 35px ;
.header {
  transition: all 0.4s ease-in-out;
  position: fixed;
  z-index: 10000;
  right: 0px;
  bottom: 5rem;

  .item {
    position: absolute;
    left: -$size;
    width: $size;
    height: $size;
    line-height: $size;
    color: #969a9b;
    font-size: 1.5rem;
    text-align: center;
    background: rgba(0, 0, 0, 0.7);
    border-bottom: 1px silver solid;
    cursor: pointer;

    &:first-child {
      border-bottom-left-radius: 4px;
      border-bottom: 0;
    }

    &:last-child {
      border-top-left-radius: 4px;
    }
  }
}

@for $i from 0 through 10 {
  .item:nth-child(#{$i}) {
    bottom: calc(#{$i} * #{$size});
  }
}
</style>
