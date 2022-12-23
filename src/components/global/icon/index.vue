<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-23 09:02:25
 * @LastEditors: 源
 * @LastEditTime: 2022-12-23 15:08:22
-->
<template>
  <template
    v-if="svg"
  >
    <svg
      fill="currentColor"
      aria-hidden="true"
      class="lm-icon"
      :style="style"
      v-if="!isOnline"
    >
      <use
        :xlink:href="IconName"
        rel="external nofollow"
      />
    </svg>
    <i
      v-else
      class="lm-icon is-icon-online"
      :style="style"
    />
  </template>
  <i
    v-else
    :class="['lm-icon', IconName]"
    :style="style"
  />
</template>
<script lang="ts">
export default {
  name: "LmIcon"
}
</script>
<script setup lang="ts">
import { computed } from 'vue';
import "@style/common/fonts/icon.css"; //文字图标
import { isUndefined } from '@utils/validate';
import { iconClass } from './utils';
import { cssUnitConvertPx } from '../utils/style';

const props = withDefaults(defineProps<{
  color?: string, //颜色
  name: string, //名称
  prefix?: string, //前缀
  svg?: boolean, //svg
  size?: number | string//大小
}>(), { prefix: 'lm', svg: false })
const isOnline = computed(() => /^(https?:)/.test(props.name))
const IconName = computed(() => {
  return iconClass(props.name || '', props.prefix, props.svg)
})
const style = computed(() => {
  return {
    fontSize: isUndefined(props.size) ? undefined : cssUnitConvertPx(props.size || ''),
    color: props.color,
    '--svg-icon-url': isOnline.value ? `url(${props.name})` : undefined
  }
})
</script>
<style scoped lang="scss">
@use './index.scss';
</style>
