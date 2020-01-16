import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
//引入mint-ui库中所有组件:完整引入
import MintUI from 'mint-ui'
//单独引入mint-ui样式文件
import'mint-ui/lib/style.css'
//将mint-ui组件库中组件注册vue实例中
Vue.use(MintUI);

//Vuerify
import Vuerify from 'vuerify'
Vue.use(Vuerify);

//ant-design-vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

//引入axios.js
import axios from './axios'

//引入qs
import qs from "qs";
Vue.prototype.$qs=qs;
// 地址
import VDistpicker from 'v-distpicker'
Vue.component('v-distpicker', VDistpicker)

//页面跳转时 显示页面的头部
router.afterEach((to,from, next) => {
  window.scrollTo(0,0)
})

// 安卓返回键
function gotoURL(callback){
  window.onpopstate = null;
  window.onpopstate = function(){
    callback()
  }
}
Vue.prototype.gotoURL = gotoURL

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
