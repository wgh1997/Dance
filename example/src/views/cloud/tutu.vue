<template>
     <div id="mokuai">              
                <p class="p1">时间日期</p>
                 <ul class="ul1">
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                 </ul>
                 <p class="p2">时间日期</p>
                 <ul class="ul2">
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                 </ul>
                 <p class="p3">时间日期</p>
                 <ul class="ul3">
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                 </ul>
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
        #mokuai{
            width:960px;
            height:670px;
            
            background: whitesmoke;
        }
       
        #mokuai .p1{
            margin-left:50px;
            color: gray;
            margin-top:30px;
        }
        #mokuai .ul1{
            margin-left:20px;
            margin-top:20px; 
        }
        #mokuai ul li{
            width:80px;
            height:80px;
            background: lightgrey;
            float: left;
            margin-left:30px;
        }
        #mokuai .p2{
            margin-left:50px;
            color: gray;
            margin-top:140px;
        }
        #mokuai .ul2{
            margin-left:20px;
            margin-top:30px; 
        }
        #mokuai .p3{
            margin-left:50px;
            color: gray;
            margin-top:140px;
        }
        #mokuai .ul3{
            margin-left:20px;
            margin-top:30px; 
        }
</style>
