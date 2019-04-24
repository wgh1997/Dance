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
        <div class="registerbox">
          <div class="title">注册</div>

          <div>
            <div class="userInfo">
              <div class="userInfoinner">
                <span>账号:</span>
                <input type="text" placeholder="手机号/邮箱" />
              </div>
            </div>
            <div class="passwordwarp">
              <span>密码:</span>
              <input type="password" placeholder="请输入您的密码" />
            </div>
          </div>
          <div class="remberwarp">
            <div class="go-left">
              <input type="text" placeholder="请输入验证码" />
            </div>
            <div class="go-right">验证码</div>
          </div>
          <div class="warning">
            <p>
              <input type="checkbox" />
              我已阅读并同意《XX注册协议》
            </p>
          </div>
          <div class="buttonwrap">
            <button>立即登录</button>
          </div>
          <div>
            <div class="lastmsg">
              <span>已有账号？</span><a href="#">快速登录</a>
            </div>
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
  @charset "utf-8";
  body,
  ul,
  ol,
  li,
  dl,
  dt,
  dd,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  form,
  fieldset,
  table,
  td,
  img,
  div {
    margin: 0;
    padding: 0;
    border: 0;
  }
  body {
    font-size: 12px;
    font-family: "Microsoft YaHei";
  }
  ul,
  ol {
    list-style-type: none;
  }
  select,
  input,
  img,
  select {
    vertical-align: middle;
  }
  a {
    text-decoration: none;
  }
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
    background: #5f81e6;
    position: relative;
    width: 1300px;
    margin: 0 auto;
  }
  .contentwarp .contentinner .registerbox {
    position: absolute;
    top: 207px;
    left: 684px;
    width: 562px;
    min-height: 200px;
    background: #4b63ac;
  }
  .registerbox .title {
    text-align: center;
    margin-top: 32px;
    font-size: 40px;
    color: #f2f2f2;
    font-weight: 400;
    margin-bottom: 25px;
  }

  .userInfo {
    width: 416px;
    height: 65px;
    margin: 0 auto;
    margin-bottom: 20px;
    border: 1px solid #ddd;
  }

  .userInfoinner input {
    width: 321px;

    padding-bottom: 8px;
    font-size: 24px;
    outline: none;
    border: 0;
    padding-left: 20px;
    background: #4b63ac;
    color: #fff;
  }
  .userInfoinner span {
    font-size: 24px;
    line-height: 65px;
    color: #fff;
    padding-left: 10px;
    display: inline-block;
  }
  .passwordwarp {
    width: 416px;
    height: 65px;
    margin: 0 auto;
    margin-bottom: 20px;
    border: 1px solid #ddd;
  }
  .passwordwarp input {
    width: 321px;
    font-size: 24px;
    outline: none;
    border: 0;
    padding-left: 20px;
    background: #4b63ac;
    color: #fff;
    float: left;
    margin-top: 20px;
  }
  .passwordwarp span {
    font-size: 24px;
    line-height: 65px;
    color: #fff;
    padding-left: 10px;
    display: inline-block;
    float: left;
  }
  .remberwarp {
    overflow: hidden;
    padding: 0 74px 0 72px;
  }
  .remberwarp .go-left {
    width: 245px;
    height: 65px;
    float: left;
    border: 1px solid #f2f2f2;
  }
  .remberwarp .go-left input {
    margin-top: 1px;
    width: 243px;
    height: 62px;
    text-align: center;
    font-size: 24px;
    background: #4b63ac;
    outline: 0;
    border: none;
    color: #fff;
  }

  input::-webkit-input-placeholder {
    color: #fff;
  }
  .remberwarp .go-right {
    width: 144px;
    height: 65px;
    float: right;
    text-align: center;
    line-height: 65px;
    font-size: 24px;
    cursor: pointer;
    border: 1px solid #f2f2f2;
    color: #f2f2f2;
  }
  .warning {
    margin-top: 10px;
    padding-left: 67px;
  }
  .warning input {
    width: 22px;
    height: 15px;
  }
  .warning p {
    font-size: 18px;
    color: #f2f2f2;
  }
  .buttonwrap {
    margin-top: 26px;
    text-align: center;
    margin-bottom: 61px;
  }
  .buttonwrap button {
    padding: 20px 150px;
    font-size: 30px;
    color: #f2f2f2;
    background: #5f81e6;
  }
  .lastmsg {
    float: right;
    font-size: 20px;
    color: #f2f2f2;
  }
  .lastmsg a {
    color: #f2f2f2;
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
