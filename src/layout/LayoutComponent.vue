<template>
  <div class="main">
    <HeadBar/>
    <router-view></router-view>
  </div>
</template>
matched

<script>
import HeadBar from '../components/HeadBar.vue'
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  components:{
    HeadBar
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
}
</script>

<style>

</style>