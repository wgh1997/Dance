<template>
    <div>
        <Header></Header>
        <div class="curriculum">
            <div class="courses">
                <img src="" alt="">
            </div>
            <div class="introduction">
                <ul>
                    <li>
                        <span>
                            <img src="" alt="">
                        </span>
                        <p>舞种：爵士</p>
                        <p>授课时间：周六晚八点</p>
                    </li>
                    <li>
                        <span>
                            <img src="" alt="">
                        </span>
                        <p>舞种：爵士 拷贝</p>
                        <p>授课时间：周日晚八点</p>
                    </li>
                </ul>
            </div>
            <div class="Jazz">
                <div class="Jazz_title">
                    <h3>爵士舞</h3>
                    <div class="line">
                        <span></span><span></span>
                    </div>
                    <br>
                    <p>系统班</p>
                </div>
                <div class="Jazz_img">
                    <ul>
                        <li @click="$router.push('/Course_Details')" style="cursor: pointer"><img src="" alt=""></li>
                        <li><img src="" alt=""></li>
                        <li><img src="" alt=""></li>
                        <li><img src="" alt=""></li>
                        <li><img src="" alt=""></li>
                        <li><img src="" alt=""></li>
                    </ul>
                </div>
            </div>
            <div class="Jazz">
                    <div class="Jazz_title">
                        <h3>爵士舞</h3>
                        <div class="line">
                            <span></span><span></span>
                        </div>
                        <br>
                        <p>系统班</p>
                    </div>
                    <div class="Jazz_img">
                        <ul>
                            <li @click="$router.push('/Course_Details')" style="cursor: pointer"><img src="" alt=""></li>
                            <li><img src="" alt=""></li>
                            <li><img src="" alt=""></li>
                            <li><img src="" alt=""></li>
                            <li><img src="" alt=""></li>
                            <li><img src="" alt=""></li>
                        </ul>
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
    components:{
        Header,
        Footer
    }
}
</script>
<style scoped>
        * {
            margin: 0;
            padding: 0;
        }
        li{
            list-style: none;
        }
        a{
            text-decoration: none;
        }
        .curriculum{
            width:1200px;
            margin:0 auto;
        }
        .courses{
            width:100%px;
            height:580px;
            background: rebeccapurple;
        }
        .courses img{
            width:100%;
            height:100%;
        }
        .introduction{
            width:800px;
            height:180px;
            background:rgba(165,177,214,1);
            border-radius:10px;
            margin:-85px 0 0 103px;
        }
        .introduction span{
            display: block;
            width:100px;
            height:100px;
            border-radius:50%;
            background:saddlebrown;
        }
        .introduction span img{
            width:100%;
            height:100%;
        }
        .introduction ul{
            margin: 0 0 0 86px;
        }
        .introduction ul li{
            margin: 20px 80px 0 0px;
            float: left;
        }
        .Jazz{
            width:100%;
        }
        .Jazz_title{   
            text-align: center;
            margin: 50px 0 auto;
        }
        .Jazz_title h3{
            font-size:20px;
            font-family:MicrosoftYaHei;
            font-weight:400;
            color:rgba(30,30,30,1);
        }
        .line{
            margin: 0px 0px 0px 470px
        }
        .line span{
            display: block;
            float: left;
            width:120px;
            height:4px;
            background:rgba(165,177,214,1);
            margin: 9px 8px 0px 4px;
        }
        .Jazz .Jazz_img{
            width:100%;
            height: 502px;
        }
        .Jazz .Jazz_img ul{
            margin: 0px 0px 0px 90px
        }
        .Jazz .Jazz_img ul li{
            background: salmon;
            float: left;
            width:270px;
            height:180px;
            margin:60px 100px 0 0;
        }
</style>