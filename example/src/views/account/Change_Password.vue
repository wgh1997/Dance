<template>
  <div>
    <form action id="myForm">
      <div class="form_a">
        <label for="currentpassword">当前密码</label>
        <input type="password" id="currentpassword" placeholder="当前使用的密码" v-model="currentpassword">
      </div>
      <div class="form_a">
        <label for="setpassword">设置密码</label>
        <input type="password" id="setpassword" placeholder="您要使用的新密码" v-model="setpassword">
      </div>
      <div class="form_a">
        <label for="confirmassword">设置密码</label>
        <input type="password" id="confirmassword" placeholder="您要使用的新密码" v-model="confirmassword">
      </div>
      <div class="set-value">
        <span @click="set_value"style="cursor:pointer">确认修改</span>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentpassword:'',
      setpassword:'',
      confirmassword:'',
    }
  },
  methods:{
       set_value(){
        console.log(1)
          if(this.setpassword===this.confirmassword){
            console.log("密码一致")
          var formData=new FormData()
          formData.append("id","1");
          formData.append("oldPwd",this.currentpassword);
          formData.append("newPwd",this.confirmassword);
          this.$axios.post("/user/updatePwd",formData).then(data=> {
          console.log(data)
      });
    }
    }
  }
};
</script>
<style scoped>
@charset "utf-8";body,ul,ol,li,dl,dt,dd,p,h1,h2,h3,h4,h5,h6,form,fieldset,table,td,img,div{margin:0;padding:0;border:0}
body{font-size:12px;font-family:"Microsoft YaHei"}
ul,ol{list-style-type:none}
select,input,img,select{vertical-align:middle}
a{
    text-decoration: none;
}
form{
    margin-top:90px;
    margin-left:84px;
}
label{
     font-size: 18px;
     color:#0D0D0D
}
input{
     width: 361px;
     height:39px;
     text-indent:10px; 
     margin-left:20px;
     color:#999999;
     border:1px solid rgba(153,153,153,1);
    
}
.form_a{
    margin-bottom:46px;
}

.set-value{
    margin-left:56px;
}
.set-value span{
     display: block;
     width:113px;
     height:42px;
     font-size:18px;
     line-height: 42px;
     text-align: center;
     border:1px solid #349366;
     border-radius:20px;
     color:#349366;
}
</style>

