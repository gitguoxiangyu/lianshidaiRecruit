<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo animate__fadeIn"
    router=""
    mode="horizontal"
    @select="handleSelect"
    background-color="rgba(0,0,0,0)"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-row :gutter="0">
      <el-col :span="10"><div class="title">链时代工作室</div></el-col>
      <el-col :span="2"><el-menu-item index="0">Home</el-menu-item></el-col>
      <el-col :span="2"
        ><el-menu-item index="1" route="/cbaisc"
          >C语言基础</el-menu-item
        ></el-col
      >
      <el-col :span="2"
        ><el-menu-item index="2" route="/frontdev">前端</el-menu-item></el-col
      >
      <el-col :span="2"
        ><el-menu-item index="3" route="/backdev">后端</el-menu-item></el-col
      >
      <el-col :span="2"
        ><el-menu-item index="4" route="/machinelearning"
          >机器学习</el-menu-item
        ></el-col
      >
      <el-col :span="2"
        ><el-menu-item index="5" route="/blockchain"
          >区块链</el-menu-item
        ></el-col
      >
      <el-col :span="2"></el-col>
    </el-row>
  </el-menu>
</template>

<script>
import 'animate.css';
export default {
  data() {
    return {
      activeIndex: "0",
      isTop: true,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    listenerScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // let bodyHeight = document.body.scrollHeight
      // let clientHeight = document.documentElement.clientHeight
      if (scrollTop <= 0) {
        if (this.isTop == false){
          this.isTop = true;
          //调用动画
        }
      } else {
        if (this.isTop == true){
          this.isTop = false;
          //调用动画
        }
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.listenerScroll);
  },
};
</script>

<style scoped>
.title {
  height: 100%;
  line-height: 80px;
  font-size: 20px;
  color: white;
}

.el-row{
  height: 100%;
}

.el-col {
  height: 100%;
}

.el-menu {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 100;
  box-shadow: 0px 0px 10px rgb(29, 28, 28);
}

.el-menu-item {
  height: 100%;
  line-height: 80px;
}

@keyframes small {
  0% {
    
  }
  100% {
    
  }
}
@keyframes big {
  0% {
    
  }
  100% {
    
  }
}
</style>