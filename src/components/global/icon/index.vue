<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-23 09:02:25
 * @LastEditors: 源
 * @LastEditTime: 2022-12-23 10:06:33
-->
<template>
  <div>icon{{ prefix}}</div>
</template>
<script lang="ts">
export default {
  name: "LmIcon"
}
</script>
<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  color?: string, //颜色
  name: string, //名称
  prefix?: string, //前缀
  svg?: boolean, //svg
  size?: number | string//大小
}>(), { prefix: 'lm',svg:false })
const isOnline = computed(() => /^(https?:)/.test(props.name))
</script>
<style scoped lang="scss">

</style>
