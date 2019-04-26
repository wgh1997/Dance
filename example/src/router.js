import Vue from "vue";
import Router from "vue-router";
import register from "./views/login/register.vue"; //注册
import login from "./views/login/login.vue"; //登录
import home from "./views/home.vue"; //首页
import Personal from "./views/Personal.vue"; //个人中心
import curriculum from './views/curriculum'
import account from './views/account'
import Order from './views/Order'
import newsList from './views/newsList'
import cloud from './views/cloud'
import shoucang from './views/shoucang' 
Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/register",
      component: register
    },
    {
      path: "/login",
      component: login
    },
    {
      path: "/",
      component: home
    },
    {
      path: "/Personal",
      component: Personal,
      children:[
        {
         path:'/',
         name:"curriculum",
         component:curriculum,
         alias:"/curriculum",
       },{
         path:"/account",
         name: 'account',
         component:account,
       },{
         path:"/Order",
         name: 'Order',
         component:Order,
       },{
        path:"/newsList",
        name: 'newsList',
        component:newsList,
      },
      {
        path:"/cloud",
        name: 'cloud',
        component:cloud,
      },
      {
        path:"/shoucang",
        name: 'shoucang',
        component:shoucang,
      },
     ]
    }
  ]
});
