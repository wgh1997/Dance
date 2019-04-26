<template>
  <div id="head">
    <div id="head-menu">
      <div id="head-menu-1"></div>
      <div id="head-menu-2"></div>
      <div id="head-menu-3"></div>
    </div>
    <ul class="nav">
      <li id="index" @click="$router.push('/')">首页</li>
      <li @click="$router.push('/Personal')">个人中心</li>
      <li>联系我们</li>
      <li @click="$router.push('/register')">注册</li>
      <li @click="$router.push('/login')">登陆</li>
    </ul>
    <div id="serach">
      <input type="text" placeholder="搜索" />
      <span class="el-icon-search fdj"></span>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  #head {
    height: 60px;
    width: 100%;
    background: rgba(75, 99, 172, 1);
    border-bottom: 0.3px solid black;
    overflow: hidden;
  }

  #head-menu {
    width: 60px;
    height: 100%;
    border-right: 0.3px solid black;
    float: left;
    cursor: pointer;
    overflow: hidden;
  }

  #head-menu-1,
  #head-menu-2,
  #head-menu-3 {
    width: 18px;
    height: 2px;
    background: white;
    margin: 0 auto;
  }
  #head-menu-1 {
    margin-top: 20px;
  }
  #head-menu-2 {
    margin-top: 5px;
  }
  #head-menu-3 {
    margin-top: 5px;
  }

  #serach {
    width: 272px;
    height: 60px;
    background: rgba(255, 255, 255, 0.5);
    float: right;
    margin-right: 20px;
    position: relative;
  }
  #serach .fdj {
    font-size: 32px;
    cursor: pointer;
    color: white;
    float: right;
    position: absolute;
    left: 222px;
    top: 15px;
  }

  #serach input {
    line-height: 60px;
    border: 0px;
    outline: none;
    font-size: 16px;
    background: none;
    text-indent: 18px;
  }
  #serach ::-webkit-input-placeholder {
    color: white;
  }
  #serach ::-moz-placeholder {
    color: white;
  }
  #serach :-ms-input-placeholder {
    color: white;
  }
  #head .nav {
    float: right;
    font-size: 16px;
  }
  #head ul li {
    float: left;
    cursor: pointer;
  }
  #head ul li {
    padding: 0 18px;
    font-size: 14px;
    height: 60px;
    line-height: 60px;
    color: white;
  }
  #head ul li:nth-child(1) {
    background: white;
    color: black;
  }
  #head ul li:nth-last-child(1) {
    margin-right: 17px;
  }
</style>
