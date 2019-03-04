import Vue from 'vue'
import Router from 'vue-router'
import home from '@/exmple/home'
import upload from '@/exmple/upload'
import popoverDelete from '@/exmple/popoverDelete'
import dialogAnimation from '@/exmple/dialogAnimation'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {path: '/', component: upload},
        {path: '/popoverDelete', component: popoverDelete},
        {path: '/dialogAnimation', component: dialogAnimation},
      ],
      
    }
  ]
})
