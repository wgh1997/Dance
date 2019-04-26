<template>
  <div>
    <Header></Header>
    <Slider></Slider>
    <Advertisement></Advertisement>
    <AboutUs></AboutUs>
    <Characteristiccourses></Characteristiccourses>
    <Latestnews></Latestnews>
    <Footer></Footer>
  </div>
</template>
<script>
  import login from "./login/login.vue";
  import register from "./login/register.vue";
  import Advertisement from "../components/Advertisement"; //轮播图底部
  import AboutUs from "../components/AboutUs.vue"; //关于我们
  import Characteristiccourses from "../components/Characteristic_courses"; //特色课程
  import Latestnews from "../components/Latestnews"; //最新消息
  import Header from "../components/public/Header.vue"; //头部
  import Slider from "../components/Slider";//轮播图
  import Footer from "../components/public/Footer"; //尾部

  export default {
    components: {
      Characteristiccourses,
      Latestnews,
      Header,
      Footer,
      Slider,
      Advertisement,
      AboutUs,
      login,
      register
    }
  };
</script>
