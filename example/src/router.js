import Vue from "vue";
import Router from "vue-router";
import register from "./views/login/register.vue"; //注册
import login from "./views/login/login.vue"; //登录
import home from "./views/home.vue"; //首页
import Personal from "./views/Personal.vue"; //个人中心
import curriculum from "./views/curriculum";
import account from "./views/account"; //账户
import Order from "./views/Order"; //订单
import newsList from "./views/newsList"; //消息列表
import cloud from "./views/cloud";//个人云盘
import shoucang from "./views/shoucang"; //我的收藏
import latestNews from "./views/latestNews.vue"; //最新消息
import all from "./components/latestNews/all"; //最新消息-全部
import inlineInformation from "./components/latestNews/inlineInformation"; //学员反馈
import studentFeedback from "./components/latestNews/studentFeedback.vue"; //行内资讯

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
      children: [
        {
          path: "/",
          name: "curriculum",
          component: curriculum,
          alias: "curriculum"
        },
        {
          path: "account",
          name: "account",
          component: account
        },
        {
          path: "Order",
          name: "Order",
          component: Order
        },
        {
          path: "newsList",
          name: "newsList",
          component: newsList
        },
        {
          path: "cloud",
          name: "cloud",
          component: cloud
        },
        {
          path: "shoucang",
          name: "shoucang",
          component: shoucang
        }
      ]
    },
    // 最新消息路由
    {
      path: "/latestNews",
      component: latestNews,
      children: [
        { path: "/", component: all, alias: "all" },
        { path: "inlineInformation", component: inlineInformation },
        { path: "studentFeedback", component: studentFeedback }
      ]
    }
  ]
});
