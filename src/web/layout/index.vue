<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-22 13:48:00
 * @LastEditors: 源
 * @LastEditTime: 2022-12-22 14:00:57
-->
<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
  <Nav/>
</template>
<script setup lang="ts">
import Header from './header.vue';
import Footer from './footer.vue';
import Nav from './nav.vue';
</script>
<style scoped lang="scss">

</style>
