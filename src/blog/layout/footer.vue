<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-22 13:48:19
 * @LastEditors: 源
 * @LastEditTime: 2022-12-26 10:39:46
-->
<template>
  <div class="footer">
    © 2016 - {{ newYear }}
    <a href="http://www.tommydian.com">www.tommydian.com</a>
    版权所有 ICP证：
    <a
      href="https://beian.miit.gov.cn"
      target="_blank"
    >粤ICP备16025643号</a>
  </div>
</template>
<script setup lang="ts">
import { useNow, useDateFormat } from '@vueuse/core'
const newYear = useDateFormat(useNow(), 'YYYY')

</script>
