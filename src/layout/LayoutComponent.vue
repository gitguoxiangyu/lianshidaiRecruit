<template>
  <div class="main">
    <HeadBar/>
    <!-- 填充headbar -->
    <background class="background"></background>
    <router-view></router-view>
  </div>
</template>

<script>
import HeadBar from '../components/HeadBar.vue'
import background from '../components/background/index.vue'
export default {
  data() {
    return {
      show: false,
    };
  },
  components:{
    HeadBar,
    background
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
  watch:{
    $route(to,from){
      console.log(to.path)
      console.log(from.path);
      if (to.path == '/'){
        this.show = false
      }else {
        this.show = true
      }
    }
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
.background{
  /* background-image: linear-gradient(to right,rgb(160,46,126) , rgb(208,70,114)); */
  /* background-image: linear-gradient(to right,rgb(21, 44, 173) , rgb(70, 151, 208)); */
  height: 500px !important;
  /* background-attachment: fixed;
  background-size: cover; */
}
/* .main{
  overflow: scroll;
} */
</style>