<template>
  <div class="Latestnews">
    <h3 @click="$router.push('/LatestNews')">最新消息</h3>
    <p>zui xin xiao xi</p>
    <div class="Latestnews_introduce">
      <div class="introduce_left">
        <div class="introduce_left_head">
          <dir class="upper">
            <img src="../../assets/img/img/舞蹈赛事.jpg" alt="" />
            <p>少年天团参加山东省邹平市大赛荣获二等奖</p>
            <a href="">查看详情 >></a>
          </dir>
          <div class="lower">
            <ul class="Roll">
              <li>
                <a href="">
                  少年天团参加山东省邹平市大赛荣获二等奖
                </a>
                <span>2019/04/12</span>
              </li>
              <li>
                <a href="">
                  少年天团参加山东省邹平市大赛荣获二等奖
                </a>
                <span>2019/04/12</span>
              </li>
              <li>
                <a href="">
                  少年天团参加山东省邹平市大赛荣获二等奖
                </a>
                <span>2019/04/12</span>
              </li>
              <li>
                <a href="">
                  少年天团参加山东省邹平市大赛荣获二等奖
                </a>
                <span>2019/04/12</span>
              </li>
              <li>
                <a href="">
                  少年天团参加山东省邹平市大赛荣获二等奖
                </a>
                <span>2019/04/12</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="introduce_right">
        <dir class="upper">
          <img src="../../assets/img/img/图片赛事1.jpg" alt="" />
          <p>少年天团参加山东省邹平市大赛荣获二等奖</p>
          <a href="">查看详情 >></a>
        </dir>
        <div class="lower">
          <ul class="Roll">
            <li>
              <a href="">
                少年天团参加山东省邹平市大赛荣获二等奖
              </a>
              <span>2019/04/12</span>
            </li>
            <li>
              <a href="">
                少年天团参加山东省邹平市大赛荣获二等奖
              </a>
              <span>2019/04/12</span>
            </li>
            <li>
              <a href="">
                少年天团参加山东省邹平市大赛荣获二等奖
              </a>
              <span>2019/04/12</span>
            </li>
            <li>
              <a href="">
                少年天团参加山东省邹平市大赛荣获二等奖
              </a>
              <span>2019/04/12</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {};
</script>
<style>
  .Latestnews {
    width: 100%;
    height: 793px;
    background: rgba(255, 255, 255, 0.8);
    background: url("../../assets/img/img/yuanbn2_02.png") no-repeat -230px 0;
  }

  .Latestnews h3 {
    width: 128px;
    height: 32px;
    font-size: 32px;
    font-weight: bold;
    color: rgba(33, 33, 33, 1);
    margin: 0 auto;
    padding: 110px 0 15px 0;
    cursor: pointer;
  }
  .Latestnews p {
    height: 17px;
    font-size: 20px;
    font-weight: 400;
    color: rgba(158, 158, 158, 1);
    text-align: center;
  }
  .Latestnews_introduce {
    width: 1242px;
    height: 500px;
    margin: 100px auto;
  }
  .introduce_left {
    width: 621px;
    height: 500px;
    float: left;
  }
  .introduce_right {
    width: 621px;
    height: 500px;
    float: left;
  }
  .upper {
    width: 621px;
    height: 100px;
  }
  .upper img {
    height: 100px;
    width: 170px;
  }
  .upper p {
    height: 15px;
    font-size: 14px;
    font-weight: bold;
    color: rgba(139, 139, 139, 1);
    float: right;
    margin: 0px 142px 0 0px;
  }
  .upper a {
    height: 14px;
    font-size: 14px;
    font-weight: 300;
    color: rgba(12, 0, 254, 1);
    float: right;
    margin: -26px 330px 0 0;
  }
  .Roll {
    width: 621px;
    margin: 50px 0px 0px 26px;
    padding: 0 0 0 0;
  }
  .Roll li {
    float: left;
  }
  .Roll li span {
    display: block;
    float: right;
    margin: 3px 0 3px 150px;
  }
  .Roll li {
    margin: 10px 0;
  }
</style>
