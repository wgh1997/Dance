<template>
  <div class="Characteristic_courses">
    <div class="Char_bg">
      <div class="Characteristic_courses_content w1180">
        <h3 @click="$router.push('/Characteristic')">特色课程</h3>
        <span>te se ke cheng</span>
        <ul class="content_introduce">
          <li>
            <div class="img_describe">
              <img src="../../assets/img/img/街舞.jpg" alt="" />
            </div>
            <h4>街舞</h4>
            <p>
              街舞动作是由各种走、跑、跳组合而成
              ，并通过头、颈、肩、上肢、躯干等关
              节的屈伸、转动、绕环、摆振、波浪形 扭动等连贯组合而成
            </p>
          </li>
          <li>
            <div class="img_describe">
              <img src="../../assets/img/img/20130828121438271.gif" alt="" />
            </div>
            <h4>震感舞</h4>
            <p>
              POPPING（震感舞），也称为震动，属于街舞，一般的POPPING包括了肩膀、胸部、手臂、腿部等等。当今的POPPIN没有Old
              School 和New School的区分，都是属于Street Dance的舞种。
            </p>
          </li>
          <li>
            <div class="img_describe">
              <img
                src="../../assets/img/img/depositphotos_83454406-stock-photo-girl-jumping-in-hip-hop.jpg"
                alt=""
              />
            </div>
            <h4>锁舞</h4>
            <p>
              Locking起源于60年代，由Don Cambell领衔的The
              Lockers团队发明，是最早成型的街舞舞种。手腕手臂的快速旋转与指向，动作的突然定格，伴以各种拍手、跳跃及劈叉等技术为其主要特征。
            </p>
          </li>
          <li>
            <div class="img_describe">
              <img src="../../assets/img/img/爵士舞.jpg" alt="" />
            </div>
            <h4>震感舞</h4>
            <p>
              POPPING（震感舞），也称为震动，属于街舞，一般的POPPING包括了肩膀、胸部、手臂、腿部等等。当今的POPPIN没有Old
              School 和New School的区分，都是属于Street Dance的舞种。
            </p>
          </li>
        </ul>
      </div>
      <div class="B_background">
        <img src="../../assets/img/img/L-suceCaseBar.png" alt="" />
      </div>
      <div class="Characteristic_courses_bottom"></div>
    </div>
  </div>
</template>
<script>
  export default {};
</script>
<style>
  .Characteristic_courses {
    background-image: url(../../assets/img/img/yuanbn3_02.png);
    background-repeat: no-repeat;
    background-position: 1012px -6px;
    width: 100%;
    height: 618px;
    opacity: 0.8;
    overflow: hidden;
    position: relative;
  }
  .Characteristic_courses_content {
    text-align: center;
  }
  .Characteristic_courses_content h3 {
    width: 128px;
    height: 32px;
    font-size: 32px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: rgba(33, 33, 33, 1);
    margin: 0 auto;
    padding: 40px 0 0 0;
  }
  .Characteristic_courses_content span {
    width: 137px;
    height: 22px;
    font-size: 20px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(158, 158, 158, 1);
  }
  .content_introduce {
    margin-top: 62px;
    overflow: hidden;
    position: relative;
    z-index: 10;
  }
  .content_introduce .img_describe {
    overflow: hidden;
    width: 245px;
    height: 170px;
  }
  .content_introduce .img_describe img {
    width: 100%;
    height: 151%;
    margin-left: -54px;
  }
  .content_introduce h4 {
    height: 25px;
    font-size: 24px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(242, 242, 242, 1);
    margin: 0 auto;
    padding: 18px 0 0 0;
  }
  .content_introduce p {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(242, 242, 242, 1);
    padding: 0 11px;
  }
  .content_introduce li {
    float: left;
    width: 217px;
    height: 410px;
    background: #35467a;
    margin: 0 17px 0 10px;
    position: relative;
    box-shadow: -2px -2px 5px 0px rgba(137, 137, 137, 1);
  }
  .content_introduce li h4 {
    margin-bottom: 10px;
  }
  .content_introduce li:nth-child(1) {
    margin: 0 17px 0 125px;
  }
  .B_background {
    position: relative;
    height: 300px;
    left: -170px;
    top: 14px;
  }
  .B_background img {
    position: absolute;
    left: 166px;
    top: -360px;
    z-index: 5;
  }
  .Characteristic_courses_bottom {
    width: 100%;
    height: 369px;
    background: rgba(75, 99, 172, 1);
    margin-top: 0px;
    position: absolute;
    top: 302px;
  }
</style>
