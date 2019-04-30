<template>
  <div id="footer">
    <div id="footer_first">
      <p>Copyright ©2013-2019 XXXXXXX教育科技有限公司版权所有</p>
      <p>
        广播电视节目制作经营许可证: (沪) 字第1248号 丨
        网络文化经营许可证:沪网文[2016]2296-134号丨信息网络传播视听节目许可证:0910417丨互联
      </p>
      <p>
        网ICP备案 : 沪ICP备13002172号 - 3 沪B2-20100043 丨 违法不良信息举报邮箱
        : help @ bilibili.com丨违法不良信息举报电话:4 0 0 0 - 2 3 3 2 3 3
      </p>
    </div>
  </div>
</template>

<script>
  export default {
       name:"Footer"
  };
</script>

<style>
  #footer {
    width: 100%;
    height: 180px;
    background: rgba(75, 99, 172, 1);
    font-size: 13px;
    color: white;
    overflow: hidden;
  }
  #footer_first {
    width: 1300px;
    margin: 0 auto;
    text-align: center;
  }
  #footer_first p {
    margin-top: 30px;
  }
  /* #footer_first p:nth-child(1) {
    line-height: 60px;
  } */
</style>
