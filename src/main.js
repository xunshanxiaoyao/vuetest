import Vue from 'vue'
import VueRouter from 'vue-router'

import axios from 'axios'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
Vue.use(VueRouter);

//axios config
axios.defaults.headers.post['Content-Type'] =  'application/x-www-form-urlencoded; charset=UTF-8';
Object.toparams = function ObjectToParams(obj) {
  let p = [];
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (!(typeof obj[key] === 'undefined') && obj[key] != null) {
        p.push(key + '=' + encodeURIComponent(obj[key]));
      }
    }
  }
  return p.join('&');
};
axios.defaults.transformRequest = [function(data) {
  return Object.toparams(data);
}];
axios.interceptors.response.use( undefined, error => {
  if (error.response.status === 401) {
    router.push('/login');
  }
  return Promise.reject(error.data.error ? error.data.error.message : error.data);
});

Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
