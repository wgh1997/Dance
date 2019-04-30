<template>
     <div id="mokuai">
                <div class="one">           
                     <p class="p1">时间日期</p>
                            <ul class="ul1">
                                  <li>
                                       <img src="../../assets/Folder/微信图片_20190427140954.png">
								  </li>
                                  <li><img src="../../assets/Folder/微信图片_20190427140954.png"></li>
                                  <li><img src="../../assets/Folder/微信图片_20190427140954.png"></li>
                                  <li><img src="../../assets/Folder/微信图片_20190427140954.png"></li>
                                  <li><img src="../../assets/Folder/微信图片_20190427140954.png"></li>
                            </ul>
                 </div> 
                 <div class="one">           
                     <p class="p1">时间日期</p>
                            <ul class="ul1">
                                  <li><img src="../../assets/Folder/微信图片_20190427140954.png"></li>
                                  <li><img src="../../assets/Folder/微信图片_20190427140954.png"></li>
                                  <li><img src="../../assets/Folder/微信图片_20190427140954.png"></li>
                                  <li><img src="../../assets/Folder/微信图片_20190427140954.png"></li>
                                  <li><img src="../../assets/Folder/微信图片_20190427140954.png"></li>
                            </ul>
                 </div> 
                                 
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
        #mokuai .one{
            height:120px;
            width:800px;
           
        }
        #mokuai .one .p1{
            margin-left:50px;
            color: gray;
            margin-top:30px;
        }
        #mokuai .one .ul1{
            margin-left:20px;
            margin-top:20px; 
        }
        #mokuai .one ul li{
            width:80px;
            height:80px;
         
            float: left;
            margin-left:30px;
        }
		.ul1 li img{
			width:100%;
			height:100%;
		}
        
</style>
