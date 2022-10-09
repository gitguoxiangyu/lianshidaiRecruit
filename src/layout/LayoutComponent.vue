<template>
  <div class="main">
    <HeadBar/>
    <!-- 填充headbar -->
    <div class="background"><img src="../assets/logo.jpg" alt=""></div>
    <router-view></router-view>
  </div>
</template>

<script>
import HeadBar from '../components/HeadBar.vue'
export default {
  data() {
    return {

    };
  },
  components:{
    HeadBar
  },
  methods: {
    // listenerScroll() {
    //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //   // let bodyHeight = document.body.scrollHeight
    //   // let clientHeight = document.documentElement.clientHeight
    //   if (scrollTop <= 0) {
    //     console.log('到顶了')
    //   }else {
    //     console.log("离顶了");
    //   }
    // },
  },
  mounted() {
    // window.addEventListener('scroll', this.listenerScroll)
  },
}
</script>

<style>
img{
  width: 100%;
}
.backgroud{
  background-image: url(../assets/logo.jpg);
  background-attachment: fixed;
    /* 让背景图基于容器大小伸缩 */
  background-size: cover;
}
</style>