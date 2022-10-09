import VueRouter from 'vue-router'
import CBasic from '../components/CBasic.vue'
import BackDev from '../components/BackDev.vue'
import BlockChain from '../components/BlockChain.vue'

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
    {
      path:'/blockchain',
      component: BlockChain
    }
  ]
})