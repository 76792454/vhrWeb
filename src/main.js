import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {initMenu} from './utils/menu'
// 引用方法需要加{}
import {postKeyValueRequest, getRequest} from './network/api'

Vue.config.productionTip = false
Vue.use(ElementUI)
// 挂载到VUE原型上在Vue文件里能够通过this.方法调用
Vue.prototype.postKeyValueRequest = postKeyValueRequest
Vue.prototype.getRequest = getRequest

router.beforeEach((to, from, next) => {
  // 如果你要去的是login页面直接next()
  if (to.path === '/') {
    next()
  } else {
    // 如果你要去的是其他页面，就用initMenu初始化菜单
    initMenu(router, store)
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
