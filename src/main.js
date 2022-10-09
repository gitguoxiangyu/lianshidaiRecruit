import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router';  //引入vue-router
import router from './router'//引入路由器
import animated from 'animate.css';

Vue.use(animated)

Vue.use(ElementUI);
Vue.use(Router);  //Vue全局使用Router
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
