import Vue from 'vue'
import App from './App.vue'
// 引入ElementUI组件库
import ElementUI from 'element-ui';
// 引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css';
// 引入
import VueRouter from 'vue-router';
//引入路由器
import router from './router'
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 应用插件
Vue.use(VueRouter)
Vue.use(ElementUI)

//创建vm
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
