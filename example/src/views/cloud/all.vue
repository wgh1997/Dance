<template>
     <div id="mokuai">
        
        <div class="scan1"></div>
        <div class="scan2"></div>
        <div class="scan3"></div>
        <div class="scan4"></div>
        <div class="scan5"></div>
        <a href="">文件夹</a>
        <a href="">文件夹</a>
        <a href="">文件夹</a>
        <a href="">文件夹</a>
        <a href="">文件夹</a>
    </div>
</template>


<script>
export default {
    
}
</script>



 <style scoped>
     <style>
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
            width:100px;
            height:100px;
            background: gray;
            position: absolute;
            left:40px;
            top:100px;
        }
        #mokuai .scan2{
            width:100px;
            height:100px;
            background: gray;
            position: absolute;
            left:200px;
            top:100px;
        }
        #mokuai .scan3{
            width:100px;
            height:100px;
            background: gray;
            position: absolute;
            left:360px;
            top:100px;
        }
        #mokuai .scan4{
            width:100px;
            height:100px;
            background: gray;
            position: absolute;
            left:520px;
            top:100px;
        }
        #mokuai .scan5{
            width:100px;
            height:100px;
            background: gray;
            position: absolute;
            left:680px;
            top:100px;
        }
        #mokuai a:nth-last-child(1){
            position: absolute;
            left:60px;            
            top:220px;       
        }
        #mokuai a:nth-last-child(2){
            position: absolute;
            left:220px;            
            top:220px;       
        }
        #mokuai a:nth-last-child(3){
            position: absolute;
            left:380px;            
            top:220px;       
        }
        #mokuai a:nth-last-child(4){
            position: absolute;
            left:540px;            
            top:220px;       
        }
        #mokuai a:nth-last-child(5){
            position: absolute;
            left:706px;            
            top:220px;       
        }
</style>
