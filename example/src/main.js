import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
<<<<<<< HEAD
axios.defaults.withCredentials=true//可以让他携带cookie
=======
import vuex from 'vuex'
import user from '@/store/user'
import home from '@/store/home'

>>>>>>> 496d633ad918743275747a85c42173cb67fe9e8c
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
  console.log(config)
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
