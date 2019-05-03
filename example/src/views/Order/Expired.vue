<template>
<div>
         <div class="details">
        <div class="con">
          <div class="con_l">
            <img src="" alt="" />
          </div>
          <h3>宏利私教课程</h3>
          <p class="price">查看详细</p>
        </div>
      </div>
</div>

      
</template>
<script>
export default {
  mounted() {
    this.$axios.get("/test/login").then(res=>{
            console.log(res)
        })
        this.$axios.get("/sys/my_courses",{
        params:{
            pageNum:1,
            pageSize:2
        }      
       }).then(data=>{
           console.log(data)
           this.bba=data.list
       }) 
    },  
}
</script>
<style scoped>
    *{
        margin: 0;
        padding:0;
    }
.details {
      }
      .con {
        margin:29px 0px 27px 50px;
        width:860px;
        height:160px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(119, 119, 119, 1);
        overflow: hidden;
      }
      .con_l {
        float: left;
        width: 136px;
        height: 96px;
        margin: 36px 40px 0px 40px;
        background: #000;
      }
      .con_l img {
        width: 100%;
        height: 100%;
      }
      .con h3 {
        font-size: 24px;
        line-height: 170px;
        float: left;
      }
      .con .price {
        float: right;
        width: 203px;
        font-size:24px;
        height: 170px;
        text-align: center;
        font-weight:400;
        line-height: 170px;
        border-left: 1px solid #777777;
      }
</style>