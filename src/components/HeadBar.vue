<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-row :gutter="0">
      <el-col :span="10"><div class="img"><img src="../assets/logo.jpg" alt="工作室logo"></div></el-col>
      <el-col :span="2"><el-menu-item index="0">Home</el-menu-item></el-col>
      <el-col :span="2"><el-menu-item index="1">C语言基础</el-menu-item></el-col>
      <el-col :span="2"><el-menu-item index="2">前端</el-menu-item></el-col>
      <el-col :span="2"><el-menu-item index="3">后端</el-menu-item></el-col>
      <el-col :span="2"><el-menu-item index="4">机器学习</el-menu-item></el-col>
      <el-col :span="2"><el-menu-item index="5">区块链</el-menu-item></el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '0',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
img{
  width: 40px;
  height: 60px;
}
</style>