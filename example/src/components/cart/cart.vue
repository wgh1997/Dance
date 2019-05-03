<template>
<div>
  <div class="container">
    <div class="order">
      <div class="o_top">
        <span class="current"></span>
        <span class="xian"></span>
        <span class="future"></span>
      </div>
      <div>
        <span class="qr">确认订单信息</span>
        <span class="zf">支付订单</span>
      </div>
    </div>
    <div class="details">
      <div class="con">
        <div class="con_l">
          <img src="" alt="" />
        </div>
        <h3>宏利私教课程</h3>
        <p class="price">￥520.00</p>
      </div>
    </div>
    <div class="contact">
      <input type="text" placeholder="联系方式(QQ/微信)：" />
    </div>
    <div class="information">
      <p>选择支付方式</p>
      <!-- <div class="in_form">
        <input type="text" placeholder="请填写卡号" />
        <div>
          <input type="text" placeholder="请填写验证号码" />
          <span class="yzm">获取验证码</span>
        </div>
        <button class="btn">使用</button>
      </div> -->
     
       <div class="shoupaybox">
          <!-- <div v-for="item in showpaylist" class="showpay"> -->
            <div class="showpay">
    <img src="../../../inconimg/zhifu.jpg" alt="">
            </div>
         
       </div>
    </div>
    <div class="payment">
      <p class="total">合计金额：<span>520.0元</span></p>
      <button class="pri_btn">去付款</button>
    </div>
  </div>
     <Footer></Footer>
  </div>
</template>
<script>
//import footer from '../'
import Footer from '../public/Footer.vue'

   
export default {
         name:"cartvue",
         data(){
             return{
                    // showpaylist:[
                    //     {
                    //          img:"../../../inconimg/zhifu.jpg"
                    //     },
                    //     {
                    //          img:"../../../inconimg/weixin.jpg"
                    //     },
                    //     {
                    //          img:"../../../inconimg/jd.jpg"
                    //     }
                    // ]
             }
         },
        components:{
             Footer,
            //  header
        }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .container {
    padding: 11px;
    width: 1216px;
    margin: 0 auto;
  }
  .order {
    width: 1100px;
    height: 71px;
    background: rgba(242, 242, 242, 1);
    padding-top: 12px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
  }
  .o_top {
    margin-bottom: 12px;
  }
  .current {
    display: inline-block;
    width: 28px;
    height: 28px;
    background: rgba(75, 99, 172, 1);
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 50%;
    margin-left: 371px;
  }
  .xian {
    display: inline-block;
    width: 402px;
    height: 4px;
    background: rgba(215, 215, 215, 1);
    margin-top: 12px;
    position: absolute;
    top: 13px;
    left: 400px;
  }
  .future {
    display: inline-block;
    width: 28px;
    height: 28px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(101, 101, 101, 1);
    border-radius: 50%;
    margin-left: 397px;
  }
  .qr {
    margin-left: 343px;
    margin-top: 10px;
  }
  .showpay{
       float:left;
  }
  .zf {
    margin-left: 350px;
  }
  .details {
    margin: 22px 0;
    width: 1216px;
    height: 200px;
    background: rgba(242, 242, 242, 1);
    overflow: hidden;
  }
  .con {
    margin: 14px 68px 16px 98px;
    width: 1050px;
    height: 170px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(119, 119, 119, 1);
    overflow: hidden;
  }
  .con_l {
    float: left;
    width: 261px;
    height: 142px;
    margin: 14px 20px 14px 14px;
    background: #000;
  }
  .con_l img {
    width: 100%;
    height: 100%;
  }
  .con h3 {
    font-size: 24px;
    line-height: 170px;
    float: left;
  }
  .showpaybox{
       overflow: hidden;
  }
  .con .price {
    float: right;
    width: 203px;
    height: 170px;
    text-align: center;
    line-height: 170px;
    border-left: 1px solid #777777;
  }
  .contact {
    width: 1216px;
    height: 124px;
    background: rgba(242, 242, 242, 1);
    margin-bottom: 11px;
  }
  .contact input {
    width: 979px;
    height: 65px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(119, 119, 119, 1);
    margin: 31px 136px 28px 101px;
    text-indent: 14px;
    font-size: 14px;
  }
  .information {
    width: 1115px;
    height: 230px;
    background: rgba(242, 242, 242, 1);
    margin-bottom: 22px;
    padding-left: 101px;
    overflow: hidden;
  }
  .information p {
    margin-left: 97px;
    margin: 12px 0;
    font-size: 14px;
  }
  .information input {
    width: 300px;
    height: 41px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(119, 119, 119, 1);
    margin-bottom: 10px;
    text-indent: 14px;
    font-size: 14px;
  }
  .information .btn {
    margin-top: 15px;
    width: 164px;
    height: 56px;
    background: rgba(215, 215, 215, 1);
    border: 0;
  }
  .information .yzm {
    margin-left: 12px;
  }
  .payment {
    width: 1216px;
    height: 86px;
    background: rgba(242, 242, 242, 1);
    margin-bottom: 20px;
    overflow: hidden;
  }
  .payment .pri_btn {
    width: 144px;
    height: 64px;
    background: rgba(75, 99, 172, 1);
    border: 1px solid rgba(255, 255, 255, 1);
    border: 0;
    float: right;
    margin: 12px 139px 10px 0;
    color: white;
  }
  .payment .total {
    margin-left: 97px;
    font-size: 17px;
    line-height: 86px;
    float: left;
  }
  .total span {
    font-size: 15px;
  }
</style>