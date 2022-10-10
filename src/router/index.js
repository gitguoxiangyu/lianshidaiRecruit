import VueRouter from 'vue-router'

export default new VueRouter({
  routes:[
    {
      path:'/',
    },
    {
      path:'/cbasic',
      component: ()=> import('../components/CBasic.vue')
    },
    {
      path:'/cadded',
      component: ()=> import('../components/CAdded.vue')
    },
    {
      path:'/backdeveasy',
      component: ()=> import('../components/BackDevEasy.vue')
    },
    {
      path:'/backdevhard',
      component: ()=> import('../components/BackDevHard.vue')
    },
    {
      path:'/frontdev',
    },
    {
      path:'/machinelearning'
    },
    // 本来想做个子路由，发现无法直接跳转
    // 区块链招新题
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