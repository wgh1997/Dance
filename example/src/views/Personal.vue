<template>
  <div class="home">
  <div class="content">
    <div class="list">
      <ul>
        <li>
          <div class="icon">
            <img src="" alt="">
          </div>
          <span>
            <router-link to="/curriculum">课程</router-link>
          </span>
        </li>
        <li>
          <div class="icon">
            <img src="" alt="">
          </div>
         <span>
            <router-link to="/account">账户</router-link>
          </span>
        </li>
        <li>
          <div class="icon">
            <img src="" alt="">
          </div>
         <span>
            <router-link to="/Order">订单</router-link>
          </span>
        </li>
        <li>
          <div class="icon">
            <img src="" alt="">
          </div>
         <span>
            <router-link to="/">消息列表</router-link>
          </span>
        </li>
        <li>
          <div class="icon">
            <img src="" alt="">
          </div>
          <span>
            <router-link to="/">我的收藏</router-link>
          </span>
        </li>
         <li>
           <div class="icon">
            <img src="" alt="">
          </div>
          <span>
            <router-link to="/">个人云盘</router-link>
          </span>
        </li>
         <li>
           <div class="icon">
            <img src="" alt="">
          </div>
          <span>
            <router-link to="/">个人论坛</router-link>
          </span>
        </li>
      </ul>
    </div>
    <div class="option">
       <router-view></router-view>
      </div>
    </div> 
  </div> 
</template>

<script>
export default {
  name: 'home',
}
</script>
<style scoped>
  *{
    margin: 0;
    padding:0;
  }
  .home{
     width:1300px;
    background:rgba(194,194,194,1);
  }
  .content{
    width:1241px;
    height:796px;
    background:rgba(194,194,194,1);
    margin: 0 auto;
  }
  .list{
    width:210px;
    height:540px;
    background:rgba(242,242,242,1);
    float: left;
        margin: 0px 69px 0px 0;
    /* position: absolute;
    left:360px;
    top:75px; */
  }
  .option{
    width:960px;
    height:674px;
    background:rgba(242,242,242,1);
    float: left;
    
    /* position: absolute;
    left:600px;
    top:75px; */
  }
  .list li{
    width:210px;
    background:rgba(242,242,242,1);
    margin: 44px 0 0 0px;
  }
  .icon{
    float: left;
   margin:0px 10px 0px 57px;
    width:24px;
    height:24px;
    background:rgba(146,146,146,1); 
  }
  .icon img{
    width:100%;
    height:100%;
  }
</style>

