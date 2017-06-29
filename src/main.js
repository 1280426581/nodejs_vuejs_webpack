import Vue from 'vue'
import App from './App.vue'
require('../static/css/font.min.css');
require('../static/css/css.css');
require('../static/js/jquery-1.7.2.js');
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
import store from './store/'
import axios from 'axios'
import loading from './components/loading'

Vue.use(VueRouter);
Vue.use(loading);
//axios 配置
axios.interceptors.request.use(function(config){//发送请求
  store.dispatch('showLoading')
  return config;
},function(error){
  return promise.reject(error);
})
axios.interceptors.response.use(function(response){//请求回来
  store.dispatch('hideLoading')
  return response;
},function(error){
  return promise.reject(error);
})
Vue.prototype.$http=axios;
const router=new VueRouter({
  mode: 'history',
  scrollBehavior:()=>({
    y:0
  }),
  routes:routerConfig
});
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
