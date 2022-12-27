<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-26 11:21:35
 * @LastEditors: 源
 * @LastEditTime: 2022-12-27 16:53:32
-->
<template>
  <template v-for="(item, key) in data">
    <li
      class="item "
      :style="style"
    >
      <template v-if="item.children && item.children.length>0">
        <div
          :class="['menu-title', 'mouse']"
          @click="toggleChildren(key)"
        >
          {{ item.name }}
          <div class="menu-icon"><lm-icon name="drop-down" /></div>
        </div>
        <ul
          class="menu"
          v-if="showChildren[key]"
        >
          <nav-item
            :data="item.children"
            :padding="props.padding + 10"
          />
        </ul>
      </template>
      <template v-else>
        <router-link to="/">{{ item.name }}</router-link>
      </template>
    </li>
  </template>
</template>
<script lang="ts">
export default {
  name: "NavItem"
}
</script>
<script setup lang="ts">
import { computed, ref, Ref } from 'vue';
const props = withDefaults(defineProps<{
  data: Array<any>,
  padding?: number,
}>(), { data: () => [], padding: 0, })
const style = computed(() => {
  return {
    paddingLeft: props.padding + 'px',
  };
})
const showChildren: any = ref([])
const toggleChildren = (key: number) => {
  showChildren.value[key] = !showChildren.value[key];
}
</script>
<style scoped lang="scss">
.item {
  a,
  p,
  .menu-title {
    display: block;
    color: #868E8E;
    padding: 10px 0;
    font-size: 14px;
    transition: 1s all;
  }

  .menu-icon {
    float: right;
  }
}
</style>
