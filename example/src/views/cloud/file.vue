<template>
     <div id="mokuai">
                
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <a href="#">文件名称</a>
                <a href="#">文件名称</a>
                <a href="#">文件名称</a>
                <a href="#">文件名称</a>
                <a href="#">文件名称</a>
                <a href="#">文件名称</a>
                <a href="#">文件名称</a>
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
            list-style :none;
        }
        a{
            color: gray;
        }
        #mokuai{
            width:960px;
            height:670px;
           
            background: whitesmoke;
        }
       
        #mokuai ul{
            margin-left:32px;
            margin-top:40px;
        }
        #mokuai ul li{
            width:90px;
            height:90px;
            float: left;
            background: gray;
            margin-left:32px;
        }
        #mokuai a:nth-last-child(1){
            position: absolute;
            top:218px;
            left:74px;
        }
        #mokuai a:nth-last-child(2){
            position: absolute;
            top:218px;           
            left:196px;
        }
        #mokuai a:nth-last-child(3){
            position: absolute;
            top:218px;           
            left:318px;
        }
        #mokuai a:nth-last-child(4){
            position: absolute;
            top:218px;           
            left:440px;
        }
        #mokuai a:nth-last-child(5){
            position: absolute;
            top:218px;           
            left:566px;
        }
        #mokuai a:nth-last-child(6){
            position: absolute;
            top:218px;           
            left:687px;
        }
        #mokuai a:nth-last-child(7){
            position: absolute;
            top:218px;           
            left:812px;
        }
</style>
