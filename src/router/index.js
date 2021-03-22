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
      name: '导航一',
      component: () => import('../views/Home'),
      children: [
        {
          path: '/test1',
          name: '选项1',
          component: () => import('../views/Test1')
        },
        {
          path: '/test2',
          name: '选项2',
          component: () => import('../views/Test2')
        }
      ]
    }
  ]
}
)
