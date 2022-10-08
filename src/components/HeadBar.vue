<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" router="" mode="horizontal" @select="handleSelect" background-color="black" text-color="#fff" active-text-color="#ffd04b">
    <el-row :gutter="0">
      <el-col :span="10"><div class="img"><img src="../assets/logo.jpg" alt="工作室logo"></div></el-col>
      <el-col :span="2"><el-menu-item index="0">Home</el-menu-item></el-col>
      <el-col :span="2"><el-menu-item index="1" route="/cbaisc">C语言基础</el-menu-item></el-col>
      <el-col :span="2"><el-menu-item index="2" route="/frontdev">前端</el-menu-item></el-col>
      <el-col :span="2"><el-menu-item index="3" route="/backdev">后端</el-menu-item></el-col>
      <el-col :span="2"><el-menu-item index="4" route="/machinelearning">机器学习</el-menu-item></el-col>
      <el-col :span="2"><el-menu-item index="5" route="/blockchain">区块链</el-menu-item></el-col>
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
  width: 120px;
}

.el-col{
  height: 100%;
}
</style>