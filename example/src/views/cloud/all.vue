<template>
     <div id="mokuai">
        
        <div class="scan1">
            <div class="content">
                   <img src="../../assets/Folder/微信图片_20190427140925.png">
			</div>
            <p>文件夹</p>
        </div>
        
         <div class="scan1">
            <div class="content"><img src="../../assets/Folder/微信图片_20190427140925.png"></div>
            <p>文件夹</p>
        </div>
        
         <div class="scan1">
            <div class="content"><img src="../../assets/Folder/微信图片_20190427140925.png"></div>
            <p>文件夹</p>
        </div>
          

           <div class="scan1">
            <div class="content"><img src="../../assets/Folder/微信图片_20190427140925.png"></div>
            <p>文件夹</p>
        </div>
        

         <div class="scan1">
            <div class="content"><img src="../../assets/Folder/微信图片_20190427140925.png"></div>
            <p>文件夹</p>
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
        
        #mokuai{
            width:960px;
            height:670px;          
            background: whitesmoke;
        }
        
        #mokuai .scan1{
            width:120px;
            height:160px;
            margin-left:58px;
            margin-top:40px; 
            float: left;
        }
        #mokuai .scan1 .content{
            width:120px;
            height:120px;
        }
        #mokuai .scan1 p{
            margin-left:30px;
            line-height: 60px;
        }
		.content img{
			width:100%;
			height:100%
		}
</style>
