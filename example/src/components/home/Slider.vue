<template>
  <div id="background">
    <div id="slide">
      <el-carousel :interval="3000" height="440px" arrow="always">
        <el-carousel-item v-for="(img,index) in imgList" :key="index">
          <img ref="bannerHeight" v-bind:src="img.url" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: "slider",
    data() {
      return {
        // 图片需要引入, 否则无法显示
        imgList: [
          // { url: require("@/assets/images/1.jpg") },
          // { url: require("@/assets/images/2.jpg") },
          // { url: require("@/assets/images/3.jpg") },
          // { url: require("@/assets/images/4.jpg") }
        ]
      };
    },
    methods: {
      beforeMount: function() {
        this.height = ($(window).width() * 664) / 1920 + "px";
      }
    }
  };
</script>

<style>
  #background {
    width: 100%;
    height: 440px;
    background: rgba(75, 99, 172, 1);
  }
  .el-carousel__item img{
  width: 100%;
    height: 100%    
  }
  #slide {
    width: 100%;
    height: 440px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  #slide .el-carousel__indicators {
    position: absolute;
    left: 50%;
  }

  #slide .el-carousel__button {
    width: 14px;
    height: 14px;
    border-radius: 50%;
  }

  #slide .el-carousel__arrow {
    font-size: 120px;
    background: none;
  }

  #slide .el-icon-arrow-left {
    position: absolute;
    top: -46px;
    left: 120px;
  }

  #slide .el-icon-arrow-right {
    position: absolute;
    left: -200px;
    top: -50px;
  }
</style>
