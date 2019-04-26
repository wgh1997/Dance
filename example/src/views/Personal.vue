<template>
  <div class="home">
    <Header></Header>
    <div class="content">
      <div class="list">
        <ul>
          <li>
            <div class="icon">
              <img src="" alt="" />
            </div>
            <span>
              <router-link to="/Personal/curriculum">课程</router-link>
            </span>
          </li>
          <li>
            <div class="icon">
              <img src="" alt="" />
            </div>
            <span>
              <router-link to="/Personal/account">账户</router-link>
            </span>
          </li>
          <li>
            <div class="icon">
              <img src="" alt="" />
            </div>
            <span>
              <router-link to="/Personal/Order">订单</router-link>
            </span>
          </li>
          <li>
            <div class="icon">
              <img src="" alt="" />
            </div>
            <span>
              <router-link to="/Personal/newsList">消息列表</router-link>
            </span>
          </li>
          <li>
            <div class="icon">
              <img src="" alt="" />
            </div>
            <span>
              <router-link to="/Personal/shoucang">我的收藏</router-link>
            </span>
          </li>
          <li>
            <div class="icon">
              <img src="" alt="" />
            </div>
            <span>
              <router-link to="/Personal/cloud">个人云盘</router-link>
            </span>
          </li>
        </ul>
      </div>
      <div class="option">
        <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from "../components/public/Header.vue"; //头部
  import Footer from "../components/public/Footer"; //尾部
  export default {
    components: {
      Header,
      Footer
    }
  };
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .home {
    background: rgba(194, 194, 194, 1);
  }
  .content {
    width: 1241px;
    height: 796px;
    background: rgba(194, 194, 194, 1);
    margin: 0 auto;
  }
  .list {
    width: 210px;
    height: 540px;
    background: rgba(242, 242, 242, 1);
    float: left;
    margin: 0px 69px 0px 0;
  }
  .option {
    width: 960px;
    height: 674px;
    background: rgba(242, 242, 242, 1);
    float: left;
  }
  .list li {
    width: 210px;
    background: rgba(242, 242, 242, 1);
    margin: 44px 0 0 0px;
  }
  .icon {
    float: left;
    margin: 0px 10px 0px 57px;
    width: 24px;
    height: 24px;
    background: rgba(146, 146, 146, 1);
  }
  .icon img {
    width: 100%;
    height: 100%;
  }
</style>
