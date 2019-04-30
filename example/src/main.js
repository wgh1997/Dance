import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import vuex from 'vuex'
import user from '@/store/user'
import home from '@/store/home'

Vue.prototype.$axios = axios;

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(vuex)
var store = new vuex.Store({
      modules:{
            user,
            home
      }
})
axios.defaults.withCredentials= true;

// axios响应拦截;
axios.interceptors.response.use(({ data }) => {
  return data;
});

// axios请求拦截
axios.interceptors.request.use(config => {
  config.url = "/exa" + config.url;
  return config;
});
new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
