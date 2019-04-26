<template>
  <div>
    <Header></Header>
    <div class="box">
      <ul class="list">
        <li>
          <img src="../static/img/img/1553675245758.png" alt="" />
          <p>舞蹈发展全新计划，成立最新舞蹈教学方案</p>
        </li>
        <li>
          <img src="../static/img/img/1553675245758.png" alt="" />
          <p>独特管理系统</p>
        </li>
        <li>
          <img src="../static/img/img/1553675245758.png" alt="" />
          <p>女子天团成立方案</p>
        </li>
      </ul>
    </div>
    <div class="late_nav">
      <ul class="nav_list">
        <li
          v-for="(item, index) in nav"
          :class="{active : active === item.name}"
          @click="routerLink(index, item.path)"
        >
          <p
            :class=" navIndex === index ? 'item-cn item-cn-active' : 'item-cn'"
          >
            {{ item.title }}
          </p>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from "../components/public/Header.vue"; //头部
  import Footer from "../components/public/Footer"; //尾部
  export default {
    data() {
      return {
        nav: [
          { title: "全部", path: "/latestNews/all" },
          { title: "学员反馈", path: "/latestNews/studentFeedback" },
          { title: "行业资讯", path: "/latestNews/inlineInformation" }
        ],
        navIndex: 0,
        active: "全部"
      };
    },
    components: {
      Header,
      Footer
    },
    methods: {
      routerLink(index, path) {
        this.navIndex = index;
        this.$router.push(path);
      },
      checkRouterLocal(path) {
        this.navIndex = this.nav.findIndex(item => item.path === path);
      }
    },
    watch: {
      $route() {
        let path = this.$route.path;
        this.checkRouterLocal(path);
      }
    }
  };
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  .box {
    width: 100%;
    background: rgba(242, 242, 242, 1);
  }
  .list {
    margin: 0 auto;
    width: 1300px;
    padding: 41px 0;
    overflow: hidden;
    font-size: 16px;
  }
  .list li {
    width: 400px;
    height: 304px;
    float: left;
    position: relative;
  }

  .list li:nth-child(1) {
    margin-left: 34px;
  }
  .list li:nth-child(2) {
    margin: 0 16px;
  }
  .list li img {
    width: 100%;
    height: 100%;
  }
  .list li p {
    position: absolute;
    bottom: 0;
    width: 400px;
    height: 40px;
    background: rgba(0, 0, 0, 1);
    opacity: 0.5;
    color: white;
    line-height: 40px;
    text-indent: 16px;
  }
  .box .late_nav {
    width: 100%;
  }
  .nav_list {
    display: flex;
    justify-content: center;
    height: 60px;
    line-height: 60px;
    color: white;
    background: rgba(75, 99, 172, 1);
  }
  .nav_list li:nth-child(2) {
    font-size: 16px;
    margin: 0 63px;
  }
  .item-cn-active {
    border-bottom: 2px solid white;
    height: 58px;
  }
</style>
