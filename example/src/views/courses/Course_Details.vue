<template>
    <div>
        <Header></Header>
        <div>

            <div id="article">
                <div class="img"></div>
                <h2 class="love">全网这套就够了,娜娜老师全网入门教程</h2>
                <p class="p1">变身女神的第一步</p>
                <p class="p2">互动授课，在线答疑，为你揭秘舞蹈的魅力</p>
                <div class="price">
                    <p class="jiage">价格 : <h3 class="RMB">￥ 399</h3>
                    </p>
                    <p class="jiage1">原价 : ￥666</p>
                    <p class="long">距离结束结束 : 1 天 23 时 58 分</p>
                </div>
                <p class="p3">结课事件 : 2019年8月21</p>
                <p class="p4">选择班级 : <span class="p8">【第三期】质保期协议到2019年8月21</span></p>
                <p class="p5">服务保障</p>
                <div class="p6" @click="fn">质保期协议</div>
                <div class="p7">退款协议</div>
                <div class="line"></div>
                <div class="buy" @click="goshop">立即报名</div>
            </div>


            <div id="body">

                <div class="list">
                    <ul>
                        <li  @click="tabId=0" :class ="{'bba':tabId==0}">课程详情</li>
                        <li  @click="tabId=1" :class ="{'bba':tabId==1}">课程安排</li>
                        <li  @click="tabId=2" :class ="{'bba':tabId==2}">报班答疑</li>
                        <li  @click="tabId=3" :class ="{'bba':tabId==3}">学院评价(33)</li>
                    </ul>
                </div>

                  <div>
                    <div class="square" v-show="tabId===0">
                    <p class="p9">0000</p>
                    <div class="imgs">
                    </div>
                </div>
                <div class="square" v-show="tabId===1">
                        <p class="p9">111</p>
                        <div class="imgs">
                        </div>
                    </div>
                    <div class="square" v-show="tabId===2">
                            <p class="p9">课程详情2222</p>
                            <div class="imgs">
                            </div>
                        </div>
                        <div class="square" v-show="tabId===3">
                                <p class="p9">课程详情 444</p>
                                <div class="imgs">
                                </div>
                            </div>
                </div>
                
           <div class="the-one">第一期开班</div>
                <div id="two">
                    <p class="p10">上课时间 : 每周周二16 : 00-18 : 00</p>
                    <p class="p11">晚上上课时间 : 每周六18 : 00-20 : 00</p>
                </div>
                <div id="teacher">
                    <div class="detail">
                        <p class="p12">王芳老师</p>
                        <p class="p13">我这一生,唯独不能缺的就是舞蹈了</p>
                        <div class="img2"></div>
                    </div>

                    <div class="number">
                        <ul class="ul1">
                            <li>9.5分</li>
                            <li>355人</li>
                            <li>932个小时</li>
                            <li>课堂评分</li>
                            <li>服务学员</li>
                            <li>授课时常</li>
                        </ul>
                    </div>

                    <div class="product">
                        <p class="p14">导师简介</p>
                        <div class="production">
                            王芳老师曾就读于北京舞蹈学院,三岁接触舞蹈
                            ,拥有四年的教学经验,教学深受学生以及其他老师的
                            认可,教学经验充足,课堂活泼,曾获得多项优秀舞蹈
                            教师称呼
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from "../../components/public/Header.vue"; //头部
    import Footer from "../../components/public/Footer.vue"; //尾部
    export default {
        data(){
            return{
                tabId:0,
            }
         },
        components: {
            Header,
            Footer
        },
        methods:{
             goshop(){
                 console.log(111111111111111111111111111)
                   this.$router.push("/cart")
             },
             fn(){
                   console.log(1111111)
             }
        },
        mounted() {
            // let oLis = document.querySelectorAll(".list ul li");
            // for (let i = 0, len = oLis.length; i < len; i++) {
            //     oLis[i].onmouseover = oLis[i].onclick = function () {
            //         this.style.borderBottom = "4px solid white"
            //     }
            // }
            // for (let i = 0, len = oLis.length; i < len; i++) {
            //     oLis[i].onmouseout = function () {
            //         this.style.borderBottom = "none"

            //     }
            // //     oLis[0].onmouseout = function () {
            // //         this.style.borderBottom = "4px solid white"
            // //     }
            //  }
        },
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }

    #article {
        width: 1200px;
        height: 500px;
        background: whitesmoke;
        margin: auto;

        position: relative;
    }

    #article .img {
        width: 230px;
        height: 280px;
        background: white;
        position: absolute;
        left: 50px;
        top: 40px;

    }

    #article .love {
        position: absolute;
        top: 36px;
        left: 330px;
    }

    #article .p1 {
        position: absolute;
        left: 330px;
        top: 78px;
    }

    #article .p2 {
        position: absolute;
        left: 330px;
        top: 105px;
    }

    #article .price {
        position: absolute;
        border: 1px solid rgba(165, 177, 214, 1);
        width: 415px;
        height: 70px;
        left: 330px;
        top: 140px;
    }

    #article .jiage {
        margin-left: 10px;
        margin-top: 10px;
    }

    #article .RMB {
        margin-left: 70px;
        margin-top: -24px;
    }

    #article .jiage1 {
        margin-left: 190px;
        margin-top: -26px;
        text-decoration: line-through;
    }

    #article .long {
        margin-left: 10px;
        margin-top: 10px;
    }

    #article .p3 {
        position: absolute;
        left: 330px;
        top: 230px;
    }

    #article .p4 {
        position: absolute;
        left: 330px;
        top: 270px;
    }

    #article .p5 {
        position: absolute;
        left: 330px;
        top: 308px;
        font-size: 18px;

    }

    #article .p6 {
        font-size: 20px;
        width: 160px;
        height: 36px;
        background: #A5B1D6;
        position: absolute;
        left: 410px;
        top: 304px;
        text-align: center;
        line-height: 36px;
        cursor: pointer;
    }

    #article .p7 {
        font-size: 20px;
        width: 160px;
        height: 36px;
        background: #A5B1D6;
        position: absolute;
        left: 584px;
        top: 304px;

        text-align: center;
        line-height: 36px;
        cursor: pointer;
    }

    #article .p8 {
        border: 1px solid rgba(165, 177, 214, 1);
        display: block;
        width: 330px;
        height: 30px;
        position: absolute;
        text-align: center;
        line-height: 30px;
        left: 80px;
        top: -6px;
    }

    #article .line {
        width: 415px;
        height: 2px;
        background: rgba(165, 177, 214, 1);
        position: absolute;
        z-index: 2;
        left: 330px;
        top: 350px;
    }

    #article .buy {
        width: 92px;
        height: 36px;
        background: #4B63AC;
        position: absolute;
        left: 330px;
        top: 380px;
        text-align: center;
        line-height: 36px;
        cursor: pointer;
    }

    #body {
        width: 1200px;
        height: 1000px;

        margin: auto;

    }

    .list {
        width: 870px;
        height: 50px;
        background: rgba(165, 177, 214, 1);

        margin-top: 40px;
    }

    .list ul li {
        float: left;
        margin-left: 103px;
        line-height: 50px;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
    }

    .bba{
        border-bottom: 2px solid red;
    }

    .square {
        width: 870px;
        height: 700px;
        background: whitesmoke;

    }

    .square .p9 {
        font-size: 21px;
        font-weight: 700;
        line-height: 60px;
        margin-left: 350px;
        padding:3px 0 0 0;
    }

    .square .imgs {
        width: 800px;
        height: 580px;
        background: rgba(165, 177, 214, 1);

        margin: 0px 0px 0px 33px;

    }

    .the-one {
        width: 300px;
        height: 50px;
        background: rgba(165, 177, 214, 1);
        margin-left: 900px;
        margin-top: -750px;
        text-align: center;
        line-height: 50px;
        font-weight: 700;
        font-size: 20px;
    }

    #two {
        width: 300px;
        height: 110px;
        background: whitesmoke;
        margin-left: 900px;
    }

    #two .p10 {
        margin-left: 20px;
        line-height: 60px;
    }

    #two .p11 {
        margin-left: 14px;

    }


    #teacher {
        width: 300px;
        height: 640px;
        background: whitesmoke;
        margin-left: 900px;
        margin-top: 20px;
        position: relative;
    }

    #teacher .detail {
        width: 250px;
        height: 180px;
        background: #A5B1D6;
        position: absolute;
        left: 25px;
        top: 60px;
    }

    #teacher .detail .p12 {
        font-size: 22px;
        font-weight: 700;
        position: absolute;
        left: 85px;
        top: 90px;
    }

    #teacher .detail .p13 {
        font-size: 12px;
        position: absolute;
        top: 130px;
        left: 3px;
    }

    #teacher .detail .img2 {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: greenyellow;
        position: absolute;
        left: 75px;
        top: -40px;
    }

    #teacher .number {
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #A5B1D6;
        position: absolute;
        top: 250px;
    }

    #teacher .number .ul1 li:nth-child(1) {
        position: absolute;
        left: 40px;
        top: 20px;
    }

    #teacher .number .ul1 li:nth-child(2) {
        position: absolute;
        left: 120px;
        top: 20px;
    }

    #teacher .number .ul1 li:nth-child(3) {
        position: absolute;
        left: 200px;
        top: 20px;
    }

    #teacher .number .ul1 li:nth-child(4) {
        position: absolute;
        left: 24px;
        top: 54px;
    }

    #teacher .number .ul1 li:nth-child(5) {
        position: absolute;
        left: 114px;
        top: 54px;
    }

    #teacher .number .ul1 li:nth-child(6) {
        position: absolute;
        left: 210px;
        top: 54px;
    }

    #teacher .product {
        width: 100%;
        height: 260px;
        position: absolute;
        top: 350px;
    }

    #teacher .product .p14 {
        font-size: 23px;
        font-weight: 600;
        text-align: center;
        line-height: 60px;
    }

    #teacher .product .production {
        width: 230px;
        height: 160px;
        margin-left: 40px;
        line-height: 28px;
    }
</style>