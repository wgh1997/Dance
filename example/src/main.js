import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from "@/store";
import axios from "axios";
axios.defaults.withCredentials=true//可以让他携带cookie
Vue.prototype.$axios = axios;

Vue.use(ElementUI);
Vue.config.productionTip = false;


<<<<<<< HEAD
=======
// axios请求拦截
axios.interceptors.request.use(config => {
  console.log(config)
  config.url = "/exa" + config.url;
  return config;
});
>>>>>>> origin/devwongguohui20190428
new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
