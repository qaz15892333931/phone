// 引入axios库并且配置
// 引入Vue
import Vue from 'vue';
// // 引入axios库
import axios from 'axios';
// // 设置跨域请求保存session
// axios.defaults.withCredentials=true;
// // 设置请求服务器基础路径
// axios.defaults.baseURL="http://192.168.1.16:8080/"
axios.interceptors.request.use(config => {
    config.headers['Accept'] = '*/*';  
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';  
//   let token =localStorage.getItem('token')
//   if (token) { contentType: "application/x-www-form-urlencoded",
    config.headers.common['Authorization'] = localStorage.getItem('token');
//   }
  return config},
  err => {
    return Promise.reject(err);
  })
// // 将axios注册 Vue实例
 Vue.prototype.axios=axios;
// // 在main.js 引入axios.js即可
