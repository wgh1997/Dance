<template>
  <div>
    <div class="login-headerwarp">
      <div class="login-header">
        <div class="log">
          <div class="logimg"></div>
          <div class="msg">名字</div>
        </div>
        <div class="nav">
          <ul>
            <li @click="$router.push('/')"><a href="javascript:;">首页</a></li>
            <li><a href="javascript:;">选择课程</a></li>
            <li><a href="javascript:;">学习中心</a></li>
            <li><a href="javascript:;">投诉建议</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="contentwarp">
      <div class="contentinner">
        <div class="loginbox">
          <div class="title">登录</div>
          <div class="c-top">
            <div class="c-left">扫码登录</div>
            <div class="c-right">账户登录</div>
          </div>
          <div class="textwarp">
            <input type="text" placeholder="请输入账号" />
          </div>
          <div class="passwordwarp">
            <input type="password" placeholder="请输入密码" />
          </div>
          <div class="remberwarp">
            <div class="go-left"><input type="checkbox" />记录我的登录状态</div>
            <div class="go-right"><a href="#">忘记密码?</a></div>
          </div>
          <div class="buttonwrap">
            <button>立即登录</button>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="footerwarp">
        <p>Copyright©2013-2019 XXXXXX教育科技有限公司版权所有</p>
        <p>
          广播电视节目制作经营许可证：（沪）字第1248号 |
          网络文化经营许可证：沪网文[2016]2296-134号 |
          信息网络传播视听节目许可证：0910417 | 互联
        </p>
        <p>
          网ICP备案：沪ICP备13002172号-3 沪ICP证：沪B2-20100043 |
          违法不良信息举报邮箱：help@bilibili.com |
          违法不良信息举报电话：4000233233转
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
  .login-headerwarp {
    background: #f2f2f2;
  }
  .login-header {
    width: 1300px;
    height: 60px;
    margin: 0 auto;
  }

  .login-header .log {
    float: left;
    font-size: 16px;
  }
  .login-header .log .logimg {
    height: 60px;
    width: 84px;
    background: #585858;
    float: left;
  }
  .login-header .log .msg {
    float: right;
    line-height: 60px;
    font-size: 40px;
    color: #0d0d0d;
    padding-left: 18px;
  }
  .login-header .nav {
    float: right;
  }
  .login-header .nav ul {
    overflow: hidden;
  }
  .login-header .nav ul li {
    float: left;
  }
  .login-header .nav ul li a {
    display: block;
    line-height: 60px;
    font-size: 16px;
    color: #0d0d0d;
    padding: 0 15px;
    margin-left: 38px;
  }
  .contentwarp {
    background: #5f81e6;
  }
  .login-header .nav ul li:hover a {
    background: #5f81e6;
    color: rgba(242, 242, 242, 1);
  }
  .contentwarp .contentinner {
    height: 1011px;
    width: 1300px;
    background: #5f81e6;
    position: relative;
    margin: 0 auto;
  }
  .contentwarp .contentinner .loginbox {
    position: absolute;
    top: 207px;
    left: 684px;
    width: 516px;
    min-height: 200px;
    background: #4b63ac;
  }
  .loginbox .title {
    text-align: center;
    margin-top: 32px;
    font-size: 40px;
    color: #f2f2f2;
    font-weight: 400;
  }
  .loginbox .c-top {
    margin: 42px 0;
  }
  .loginbox .c-top .c-left {
    display: inline-block;
    width: 258px;
    text-align: center;
    color: rgba(242, 242, 242, 1);
    font-size: 32px;
    position: relative;
    cursor: pointer;
  }
  .loginbox .c-top .c-left::after {
    position: absolute;
    content: "";
    width: 1px;
    height: 33px;
    right: 0;
    top: 7px;
    background: #f2f2f2;
  }
  .loginbox .c-top .c-right {
    display: inline-block;
    width: 258px;
    text-align: center;
    color: rgba(242, 242, 242, 1);
    font-size: 32px;
    cursor: pointer;
  }
  .textwarp {
    margin-bottom: 25px;
  }
  .textwarp input {
    width: 401px;
    height: 65px;
    font-size: 24px;
    border: 1px solid rgba(195, 195, 195, 1);
    margin: 0 auto;
    display: block;
    padding-left: 20px;
  }
  .passwordwarp input {
    color: #fff;
    width: 401px;
    height: 65px;
    font-size: 24px;
    border: 1px solid rgba(195, 195, 195, 1);
    margin: 0 auto;
    display: block;
    padding-left: 20px;
  }
  .passwordwarp {
    margin-bottom: 53px;
  }
  input {
    background: #4b63ac;
    color: #fff;
  }
  .go-left {
    float: left;
    font-size: 24px;
    color: #fff;
    border: 0;
    margin-left: -18px;
  }
  .go-left input {
    width: 19px;
    height: 24px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .loginbox .remberwarp .go-left input {
    width: 19px;
    height: 24px;
  }
  .remberwarp {
    overflow: hidden;
    padding: 0 66px;
    margin-bottom: 40px;
  }

  .go-right {
    float: right;
    font-size: 24px;
    color: #fff;
    border: 0;
  }
  .go-right a {
    color: #fff;
  }
  .buttonwrap {
    text-align: center;
    margin-bottom: 34px;
  }
  input::-webkit-input-placeholder {
    color: #fff;
  }
  .buttonwrap button {
    padding: 20px 150px;
    font-size: 30px;
    color: #f2f2f2;
    background: #5f81e6;
  }
  footer {
    background: #4b63ac;
  }
  footer .footerwarp {
    width: 1300px;
    margin: 0 auto;
  }
  footer .footerwarp p:nth-child(1) {
    padding-top: 40px;
  }
  footer .footerwarp p {
    text-align: center;
    padding: 0 0 30px 0;
    color: #fff;
  }
</style>
