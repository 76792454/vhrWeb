import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: () => import('../components/Login'),
      hidden: true
    },
    {
      path: '/home',
      component: () => import('../views/Home'),
      hidden: true
    },
    {
      path: '/home',
      component: () => import('../views/Home')
    }
  ]
}
)
