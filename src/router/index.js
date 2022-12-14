import VueRouter from 'vue-router'

export default new VueRouter({
  routes:[
    // 本来想根据方向做个子路由，发现无法直接跳转
    {
      path:'/',
      component: ()=> import('../components/index.vue')
    },
    // C语言招新题
    {
      path:'/cforeword',
      component: ()=> import('../components/CForeword.vue')
    },
    {
      path:'/cnecessity',
      component: ()=> import('../components/CNecessity.vue')
    },
    {
      path:'/cbasic',
      component: ()=> import('../components/CBasic.vue')
    },
    {
      path:'/cadded',
      component: ()=> import('../components/CAdded.vue')
    },
    // 后端招新题
    {
      path:'/backdevforeword',
      component: ()=> import('../components/BackDevForeword.vue')
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
      path:'/backdevdirect',
      component: ()=> import('../components/BackDevDirect.vue')
    },
    //前端招新题
    {
      path:'/frontdevforeword',
      component: ()=> import('../components/FrontDevForeword.vue')
    },
    {
      path:'/frontdevhtmlcss',
      component: ()=> import('../components/FrontDevEasy.vue')
    },
    {
      path:'/frontdevjs',
      component: ()=> import('../components/FrontDevJS.vue')
    },
    // 机器学习
    {
      path:'/machinelearningforeword',
      component: ()=> import('../components/MachineLearningForeword.vue')
    },
    {
      path:'/machinelearningeasy',
      component: ()=> import('../components/MachineLearningBasic.vue')
    },
    {
      path:'/machinelearninghard',
      component: ()=> import('../components/MachineLearningHard.vue')
    },
    // 区块链招新题
    {
      path:'/blockchaineasy',
      component: ()=> import('../components/BlockChainEasy.vue')
    },
    {
      path:'/blockchainhard',
      component: ()=> import('../components/BlockChainHard.vue')
    },
    {
      path:'/blockchainforeword',
      component: ()=> import('../components/BlockChainForeword.vue')
    },
    // 网络招新题
    {
      path:'/networkeasy',
      component: ()=> import('../components/NetworkEasy.vue')
    },
    {
      path:'/networkhard',
      component: ()=> import('../components/NetworkHard.vue')
    },
    {
      path:'/networkforeword',
      component: ()=> import('../components/NetworkForeword.vue')
    }
  ]
})