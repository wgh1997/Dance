<template>
    <div id="account">
            <ul>
                <li class="Head-portrait">头像</li>
                <li>性别</li>
                <li>生日</li>
                <li>手机</li>
                <li>邮箱</li>
                <li>签名</li>
            </ul>
            <div id="square"></div>
            <p class="jpg">仅支持jpg/png文件</p>
            <input type="radio" class="boy">          
            <p class="p1">男士</p>
            <input type="radio" class="girl">
            <p class="p2">女士</p>
            <input type="text" class="year">          
            <p class="p3">年</p>
            <input type="text" class="month">          
            <p class="p4">月</p>
            <input type="text" class="data">           
            <p class="p5">日</p>
            <input type="text" placeholder="请输入您的手机号" class="inp1">
            <input type="text" placeholder="请输入您的邮箱" class="inp2">
            <input type="text" placeholder="请输入您的签名" class="inp3">
            <div class="modify">保存修改</div>
        </div>

</template>
<script>
export default {
    
}
</script>
    <style scoped>
        *{
            margin:0;
            padding: 0;
        }
        li{
            list-style: none;
        }
        #account{
            width:960px;
            height:630px;
            background:rgba(242,242,242,1);
            position: relative;        
        }
        #account ul{
            position: absolute;
            left:84px;
            top:120px;
        }
        #account ul li{ 
           margin-top:40px; 
        }
        #account ul .Head-portrait{
           position: absolute;
           top:-110px; 
        }
        #square{
            width:80px;
            height:80px;
            background:rgba(194,194,194,1);
            position: absolute;
           left:140px;
           top:50px;
        }
        #account .jpg{
            font-size: 16px;
            color: #929292;
            position: absolute;
            left:234px;
            top:110px;
        }
        #account .boy{
            width: 16px;
            height:16px;
            border: 1px solid rgba(194,194,194,1);
            border-radius: 50%;
            position: absolute;
            left:144px;
            top:163px;
        }
        #account .p1{
            color: rgba(194,194,194,1);
            position: absolute;
            left:184px;
            top:160px;
        }
        #account .girl{
            width: 16px;
            height:16px;
            border: 1px solid rgba(194,194,194,1);
            border-radius: 50%;
            position: absolute;
            left:220px;
            top:163px;
        }
        #account .p2{
            color: rgba(194,194,194,1);
            position: absolute;
            left:260px;
            top:160px;
        }
        #account .year{
            width:50px;
            height:18px;
            border:1px solid  rgba(194,194,194,1);
            position: absolute;
            left:144px;
            top:223px;
        }
        #account .p3{
            color: rgba(194,194,194,1);
            position: absolute;
            left:220px;
            top:222px;
        }
        #account .month{
            width:26px;
            height:18px;
            border:1px solid  rgba(194,194,194,1);
            position: absolute;
            left:234px;
            top:223px;
        }
        #account .p4{
            color: rgba(194,194,194,1);
            position: absolute;
            left:285px;
            top:222px;
        }
        #account .data{
            width:26px;
            height:18px;
            border:1px solid  rgba(194,194,194,1);
            position: absolute;
            left:294px;
            top:223px;
        }
        #account .p5{
            color: rgba(194,194,194,1);
            position: absolute;
            left:348px;
            top:222px;
        }
        #account .inp1{
            width:360px;
            height:40px;
            position: absolute;
            left:144px;
            top:275px;
            text-indent: 10px;
        }
        #account .inp2{
            width:360px;
            height:40px;
            position: absolute;
            left:144px;
            top:335px;
            text-indent: 10px;
        }
        #account .inp3{
            width:360px;
            height:40px;
            position: absolute;
            left:144px;
            top:395px;
            text-indent: 10px;
        }
         #account .modify{
            width:113px;
            height:42px;
            border:1px solid #349366;
            border-radius:20px;
            text-align: center;
            line-height: 42px;
            position: absolute;
            left: 166px;
            top:465px;
            color: #349366;
            cursor:pointer;
        }
        #account .modify:hover{
            background: #929292;
        }
    </style>   
