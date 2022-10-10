import VueRouter from 'vue-router'
import CBasic from '../components/CBasic.vue'
import BackDev from '../components/BackDev.vue'

export default new VueRouter({
  routes:[
    {
      path:'/',
    },
    {
      path:'/cbaisc',
      component: CBasic
    },
    {
      path:'/backdev',
      component: BackDev
    },
    {
      path:'/frontdev',
      component: BackDev
    },
    {
      path:'/machinelearning',
      component: BackDev
    },
    // 本来想做个子路由，发现无法直接跳转
    {
      path:'/blockchaineasy',
      component: ()=> import('../components/BlockChainEasy.vue')
    },
    {
      path:'/blockchainhard',
      component: ()=> import('../components/BlockChainHard.vue')
    }
  ]
})