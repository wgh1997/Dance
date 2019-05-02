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
                <input type="text" v-model="email" class="phone" @blur ="textinput" placeholder="手机号/邮箱" />
              </div>
            </div>
            <div class="passwordwarp">
              <span>密码:</span>
              <input type="password" v-model="password" placeholder="请输入您的密码" />
            </div>
          </div>
          <div class="remberwarp">
            <div class="go-left">
              <input type="text" v-model="num" placeholder="请输入验证码" />
            </div>
            <div class="go-right" @click="getCode"><img :src="dataimg" alt="">{{text}}</div>
          </div>
          <div class="warning">
            <p>
              <input type="checkbox" class="checkbox" @click="checkbox=!checkbox" />
              我已阅读并同意《XX注册协议》
            </p>
          </div>
          <div class="buttonwrap">
            <button @click="fn">立即注册</button>
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
<script>
 
  export default {
    data() {
      return {
            text:"获取验证码",
            dataimg:"",
            email:"",
            password:"",
            num:"",
          emailRegular: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
         checkbox: false
      };
    },
    methods: {
       getCode(){
           this.$store.dispatch("GetCode")
    //                this.$store.dispatch("GetCode",{
    //                     sucess:(data)=>{
    //                       //  var blob = new Blob(data);

    //                        var url = createObjectURL(data);
    //                         this.dataimg = url
    //                     }
    //                })
                 this.text = ""

               this.dataimg = "http://188.131.188.119/sys/captcha.jpg?"+Date.now()
                   
             
      },
      textinput(){
          
           var phone =  document.querySelector(".phone")
          
             if ( this.emailRegular.test(this.email)){
                         return false
          
                  }else{
                      this.$message({
          showClose: true,
          message: '请输入正确的邮箱格式',
          type: 'warning'
        });
                  }
               
      },
      
      fn() {  
         
                 var el = document.querySelector(".checkbox")
                 //var emailRegular = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/; //邮箱正则
               
                  
                       if( this.emailRegular.test(this.email)&& el.checked){
                          this.$store.dispatch("Register",{
                        email:this.email,
                        password:this.password,
                        num:this.num,
                        success:((data)=>{
                              if(data.code === 0){
                                    this.$message({
          showClose: true,
          message: '恭喜你，注册成功,页面2s后将自动跳转到登录页面，请稍后...',
          type: 'success'
        });
                   setTimeout(()=>{
                          this.$router.push("/login")
                   },2000)
                              }
                        })
                      
            })
                       }
                 
             
                 
      }
     
  } 
  } 
        // if(this.phone)

    //     var phoneRegular = /^[1][3,4,5,7,8][0-9]{9}$/; //手机号正则
    //     var emailRegular = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/; //邮箱正则
    //     var pwdRegular = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z]).*$/;
    //     if (phoneRegular.test(this.phone) || phoneRegular.test(this.phone)) {
    //       if (pwdRegular.test(this.pwd)) {
    //         if (this.checkbox) {
    //           this.$axios
    //             .get("/haha", {
    //               params: {
    //                 a: 1,
    //                 b: 2
    //               }
    //             })
    //             .then(res => {
    //               this.imgUrl = res.url;
    //               if (res.ok === 1) {
    //                 localStorage.userInfo = {
    //                   headPortrait: res.touxiang,
    //                   StudentID: res.xuehao,
    //                   nickname: res.yonghunicheng,
    //                   userName: res.yonghuming
    //                 };
    //                 this.$router.push("/");
    //               }
    //             });
    //         } else {
    //           this.tips = "请同意注册协议";
    //           this.isShow = !this.isShow;
    //         }
    //       } else {
    //         this.tips = "密码最少六位，包含数字和字母！";
    //         this.isShow = !this.isShow;
    //       }
    //     } else {
    //       this.isShow = !this.isShow;
    //       this.tips = "请输入正确的手机号或者邮箱！";
    //     }
    //   }
    // }
    // mounted() {
    //   this.yzm = this.imgUrl ? "" : "验证码";
    // }
  
</script>
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
    background: #4b63ae;
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
    background: url(../../static/img/img/1111.png) no-repeat;
    background-position: 20px;
  }
  .contentwarp .contentinner .registerbox {
    position: absolute;
    top: 207px;
    left: 684px;
    width: 562px;
    min-height: 200px;
    background: #4b63b7;
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
    background: #4b63b7;
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
    background: #4b63b7;
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
    background: #4b63b7;
    outline: 0;
    border: none;
    color: #ddd;
  }

  input::-webkit-input-placeholder {
    color: #ddd;
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
