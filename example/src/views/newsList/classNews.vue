
<template>
    <div id="mokuai">
            <div class="con1">
            <div class="square1"></div>
            <p class="simple">最新消息最新消息最新消息最新消息最新消息最新消息最新消</p>
            <a href="#" class="received">点击跳转回复</a>           
             </div>
             

              <div class="con1">
            <div class="square1"></div>
            <p class="simple">最新消息最新消息最新消息最新消息最新消息最新消息最新消</p>
            <a href="#" class="received">点击跳转回复</a>           
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
            height:673.98px;
            
        }
      
       
       
        #mokuai .con1{
            width:800px;
            height:60px;
            background: lightgrey;
            margin-left:50px;
            margin-top:30px;
            position: relative;
        }      
        #mokuai .con1 .square1{
            width:40px;
            height:40px;
            background: darkgray;           
            position:absolute;  
            left:20px;
            top:10px;   
        }
        #mokuai .con1 .simple{
           position: absolute;
           left:100px;
           top:20px;
        }
        #mokuai .con1 .received{
            color: aqua;         
            display: block;
            position: absolute;
            left:640px;
            top:20px;
        }
        
    
       
</style>
