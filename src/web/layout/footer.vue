<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-22 13:48:19
 * @LastEditors: 源
 * @LastEditTime: 2022-12-22 17:07:15
-->
<template>
  <div class="footer">
    © 2016 - {{ DateFormat(new Date(), 'yyyy') }}
    <a href="http://www.tommydian.com">www.tommydian.com</a>
    版权所有 ICP证：
    <a
      href="https://beian.miit.gov.cn"
      target="_blank"
    >粤ICP备16025643号</a>
  </div>
</template>
<script setup lang="ts">
import { DateFormat } from "@/filters";
</script>
<style scoped lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #000;
  color: #fff;
  padding: 3rem 0 2rem 0;
  margin-top: 5rem;
  font-size: 16px;
  text-align: center;

  a {
    color: #fff;
  }
}
</style>
