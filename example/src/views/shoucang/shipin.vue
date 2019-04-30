<template>
      <div id="mokuai">
          <div class="video">
              <div class="content">
                  <div class="up1"></div>
                  <div class="down1"></div>
              </div>
              <p>视频名称</p>
          </div>
          <div class="video">
              <div class="content">
                  <div class="up1"></div>
                  <div class="down1"></div>
              </div>
              <p>视频名称</p>
          </div>
      </div>    
</template>
<script>
export default {
    name:'shipin',
    mounted() {
        this.$axios.git("/sys/my_courses",{
            params:{

            }
        }).then((data)=>{
            console.log(data)
        })
    },
    
}
</script>
<style scoped>
     *{
            margin:0;
            padding: 0;
        }
       .video{
           width:200px;
           height:240px;
           margin:40px 40px;
           float: left;
       }
       .video .content{
           width:200px;
           height:200px;
           background: gray;
           position: relative;
       }
       .video .content .up1{
           width:30px;
           height:30px;
           background: red;
           position: absolute;
           right:30px;
           top:170px;
       }
        .video .content .down1{
           width:30px;
           height:30px;
           background: red;
           position: absolute;
           right:0px;
           top:170px;
       }
        .video p{
            margin-left:70px;
            line-height: 40px;
        }
</style>
