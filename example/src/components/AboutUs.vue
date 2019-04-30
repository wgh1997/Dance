<template>
  <div class="about_us">
    <div class="about_us_content">
      <div class="about_us_content_upper w1180">
        <div class="title">
          <h3>关于我们</h3>
          <p class="gywm">guan&nbsp;yu&nbsp;wo&nbsp;men</p>
        </div>
        <div class="content">
          <div class="con_l">
            <img :src="$store.state.home.aboutnew" alt="" />
          </div>
          <div class="con_r">
            <p>于迷茫中寻找方向，于孤独中收获希望</p>
            <p>
              愿你不认命，心中所愿皆能实现，愿你不将就，不为世俗，只为热爱
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
  export default {
          data(){
               return{
                 
               }
          },
          created(){
                    this.$store.dispatch("GetABOUT")
          }
          
  }
  </script>
<style>
  .about_us {
    height: 828px;
    margin: 0 auto;
    background: url(../static/img/img/yuanbn3_04.png) no-repeat;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .about_us_content {
    overflow: hidden;
    width: 100%;
    height: 827px;
    background-image: url(../static/img/img/yuanbn2.jpg);
  }
  .about_us_content .title {
    text-align: center;
    margin: 80px 0;
  }
  .title h3 {
    font-size: 28px;
  }
  .title p {
    font-size: 18px;
  }
  .title .gywm {
    color: #9e9e9e;
  }
  .about_us_content_upper .content {
    margin: 20px auto;
    overflow: hidden;
  }
  .content .con_l {
    float: left;
  }
  .con_l img {
    width: 400px;
    height: 400px;
  }

  .content .con_r {
    float: left;
  }
  .con_r p {
    text-indent: 40px;
  }
</style>
