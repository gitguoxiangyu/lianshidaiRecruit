<template>
  <div id="app">
    <LayoutComponent/>
  </div>
</template>

<script>
import LayoutComponent from './layout/LayoutComponent.vue'

export default {
  name: 'App',
  components: {
    LayoutComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 在scoped下，无法修改elsubmenu的样式，因此添加到全局 */
.el-submenu__title{
  height: 80px !important;
  line-height: 80px !important;
}
</style>
