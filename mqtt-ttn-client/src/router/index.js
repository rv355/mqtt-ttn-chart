import Vue from 'vue'
// import Router from 'vue-router'
import Home from '@/components/Home'
import Test from '@/components/test'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [          
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    }        
  ]
})

new Vue({
  router,
  render: h => h(Home),
}).$mount('#app')
