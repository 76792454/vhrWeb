import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引用方法需要加{}
import {postKeyValueRequest, getRequest} from './network/api'
Vue.config.productionTip = false
Vue.use(ElementUI)
// 挂载到VUE原型上在Vue文件里能够通过this.方法调用
Vue.prototype.postKeyValueRequest = postKeyValueRequest
Vue.prototype.getRequest = getRequest
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
