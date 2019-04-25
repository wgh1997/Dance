<template>
    <div>
        <div class="goPay">
            <div class="payLeft">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556187946140&di=ced5f506ebb0145f59b95a964cb16bdc&imgtype=0&src=http%3A%2F%2Fi8.qhimg.com%2Ft019df2911a33d977d9.jpg" alt="">
                <div class="payContent">
                    <h3>订单提交完成，去支付喽</h3>
                    <p>请在48小时内完成支付，超时将取消订单</p>
                </div>
            </div>
            <div class="payRight">
                应付金额：￥<span>999</span>元
            </div>
        </div>
        <div class="paySelect">
            <h4>选择支付方式</h4>
            <div class="platform">
                <h5>支付平台</h5>
                <div class="content">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556192257464&di=05dcb466e3f1aa0781ead9a60b414a1a&imgtype=0&src=http%3A%2F%2Fapp.3987.com%2Fuploadfile%2F2016%2F1202%2F20161202044444665.jpg" alt="">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556192302950&di=4845d45d321738076fa92523157399b9&imgtype=0&src=http%3A%2F%2Fi5.hexun.com%2F2018-08-22%2F193848945.jpg" alt="">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556192320679&di=f1bff1b8ce28c2018b80475957bc4a13&imgtype=0&src=http%3A%2F%2Fwww.mpaypass.com.cn%2FUpLoadFiles%2Fimages%2F20160412155301.jpg" alt="">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556192201362&di=3f5ef2117fe4d94bff023be26fb16d21&imgtype=0&src=http%3A%2F%2Fimg005.file.rongbiz.cn%2Fuploadfile%2F201510%2F19%2F11%2F11-32-53-78-508485.png" alt="">
                </div>
            </div>
            <div class="banking">
                <h5>网银支付</h5>
                <div class="content">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556192518216&di=06fc599562ed6c78b2f5d66a6f92068d&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FRomiaTOUhjsryw6Mpv2v3z56BH380TgNGqLMHpxA4JuaQHrCYXApO7XYXAEHfT3dF3zy520yCuZf0qnCWX8bAbg%2F640%3Fwx_fmt%3Djpeg" alt="">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556192534736&di=af39eea6d7ceb9e6df8918be85538c2f&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171001%2F107d484da6394a18b7b96897a8d025d5.jpeg" alt="">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556192546882&di=1cdf6f9f0ceb478c6da6c1f55e593323&imgtype=0&src=http%3A%2F%2Fimages.qdmama.net%2Fdata%2Fattachment%2Fforum%2F201612%2F06%2F1120104d7t7fstytttdkff.jpg" alt="">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556192559126&di=65c229c4108c276ff793c526e294f1aa&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171001%2F107d484da6394a18b7b96897a8d025d5.jpeg" alt="">
                </div>
            </div>
            <div class="remit">
                <h5>银行汇款</h5>
                <div class="remitContainer">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556193108165&di=0f4e967a775010e0c25204cf2a7a8503&imgtype=0&src=http%3A%2F%2Fupload.fx110.com%2Ffiles%2Fbbs%2F201803%2F867215F6597F197B6D907D2655F671AD.jpg" alt="">
                    <div class="remitContent">
                        <div>开户名：<span>XXX</span></div>
                        <div>开户行：<span>XXX</span></div>
                        <div>账户号：<span>XXX</span></div>
                        <p>（请咨询老师确认汇款金额，跨行或异地汇款手续费请咨询汇款银行）</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>


<script>
export default {
    
}
</script>

<style lang="less" scope>
    .goPay{
        width: 1300px;
        height: 100px;
        background: #999;
        margin:20px auto ;
        box-sizing: border-box;
        overflow: hidden;
        .payLeft{
            float: left;
            margin: 15px 20px 0 50px;
            img{
                height: 50px;
                border: none;
                margin-right: 20px;
            }
            .payContent{
                display: inline-block ;
                height: 50px;
            }
        }
        .payRight{
            float: right;
            height: 100px;
            line-height: 100px;
            margin-right: 50px;
        }
    }
    .goPay::after{
        content: "" ;
        display: block;
        clear: both;
        height: 0;
    }
    .paySelect{
        width: 1300px;
        background: #999;
        margin:20px auto ;
        box-sizing: border-box;
        padding:  10px 50px;
        overflow: hidden;

        h5{
            margin: 10px 0 ;
        }
        .platform{
            margin-top: 20px;
            .content{
                img{
                    width: 100px;
                    margin-right: 20px;
                    height: 50px;
                }
            }
        }
        .banking{
            img{
                width: 100px;
                height: 50px;
                margin-right: 20px;
            }
        }
        .remit{
            .remitContainer{
                width: 100% ;
                background: #666;
                height: 100px;
                img{
                    width: 100px;
                    // height: 50px;
                    float: left;
                    margin-right: 20px;
                }
                .remitContent{
                    float: left;
                    div:nth-child(1){
                        margin-top: 5px;
                    }
                }
                
            }
            .remitContainer:after{
                content: "" ;
                display: block;
                clear: both;
                overflow: hidden;
                height: 0;
            }
        }
    }
</style>