<template>
  <div id="box">
    <div class="protect">
      <div class="introduce">
        <div class="introduce_within w1180">
          <h2>
            重铸精彩未来
          </h2>
          <p>
            于迷茫中寻找方向，于孤独中收获希望
          </p>
          <p>
            愿你不认命，心中所愿皆能实现、愿你不将就，不为世俗只为热爱
          </p>
        </div>
      </div>
      <div class="w1180">
        <ul class="introduce_plate">
          <li>
            <div>
              <img src="../../assets/img/icon/关于我们.png" alt="" />
            </div>
            <p>关于我们</p>
          </li>
          <li class="middle">
            <div>
              <img src="../../assets/img/icon/喇叭.png" alt="" />
            </div>
            <p>特色课程</p>
          </li>
          <li>
            <div>
              <img src="../../assets/img/icon/视频.png" alt="" />
            </div>
            <p>最新消息</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
  * {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  .w1180 {
    width: 1180px;
    margin: 0 auto;
  }
  .protect {
    width: 100%;
    margin: 0 auto;
    background: linear-gradient(
      90deg,
      rgba(75, 99, 172, 1) 16%,
      rgba(122, 142, 204, 1) 50%,
      rgba(75, 99, 172, 1) 85%
    );
    opacity: 0.8;
    color: white;
    position: relative;
  }
  .introduce {
    width: 100%;
    height: 228px;
    text-align: center;
    position: relative;
  }
  .introduce::after {
    content: "";
    background: url(../../assets/img/img/banner2-2.png) no-repeat;
    background-size: cover;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
  .introduce_within {
    overflow: hidden;
  }
  .introduce_within h2 {
    margin-top: 45px;
    font-size: 36px;
    font-weight: 600;
  }
  .introduce_within p {
    font-size: 12px;
  }
  .introduce_within p:nth-child(2) {
    margin-top: 10px;
  }
  .introduce_plate {
    height: 70px;
    text-align: center;
    perspective: 800px;
    transform-style: preserve-3d;
  }
  .introduce_plate li {
    display: inline-block;
    width: 180px;
    height: 70px;
    border: 1px solid black;
  }
  .introduce_plate li img {
    width: 34px;
    height: 34px;
    margin: 0 auto;
  }
</style>
