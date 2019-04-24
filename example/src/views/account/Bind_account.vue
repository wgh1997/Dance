<template>
    <div class="number">
        <div class="numberinner">
          <img src="../../static/img/icon/1.jpg" alt="">
           <span>学习提醒</span>
           <span>此功能需绑定微信号并关注公众号</span>
           <span style="cursor:pointer">开启</span>
        </div>
        <div class="numberinner">
                <img src="../../static/img/icon/2.jpg" alt="">
                 <span>绑定微信号</span>
                 <span >已绑定</span>
                 <span class="other" style="cursor:pointer">解绑</span>
              </div>
              <div class="numberinner">
                    <img src="../../static/img/icon/3.jpg" alt="">
                     <span>关注公众号</span>
                     <span>使用微信扫码关注微信公众号</span>
                     <span class="other1" style="cursor:pointer">开启</span>
                  </div>
        
    </div>
</template>
<script>
export default {
          //name:'Bind_account.vue'
}
</script>
<style scoped>
    .number{
     margin-top:90px;
     margin-left:85px;
     background: #F2F2F2;
     line-height:40px;
}
.number img{
    margin: 0px 0 -15px 0
}
.numberinner{
    margin-bottom:53px;
}

.numberinner span:nth-of-type(1){
    padding-left:25px;
    padding-right:20px;
    font-size:16px;
    
    

}
.numberinner span:nth-of-type(2){
    padding-left:5px;
    font-size:16px;
}
.numberinner span:nth-of-type(3){
     margin-left:153px;
     display: inline-block;
     width:86px;
     height:32px;
    background: #349366;
    border-radius: 20px;
    text-align: center;
    line-height: 32px;
    color:#F0F0F0;
    font-size: 18px;
    
}
.numberinner .other{
    margin-left:320px !important;
}
.numberinner .other1{
    margin-left:162px !important; 
}
</style>