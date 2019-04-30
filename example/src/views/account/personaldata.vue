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
            <p class="jpg">
            <el-upload
            class="avatar-uploader"
            action="/user/updateHead?file"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            </p>
            <input type="radio"checked="checked" class="boy"  name="1" v-model="sex" value="1">     
            <p class="p1">男士</p>
            <input type="radio"  class="girl"  name="1" v-model="sex" value="2">
            <p class="p2">女士</p>
            <input type="text" class="year" v-model="year">          
            <p class="p3">年</p>
            <input type="text" class="month" v-model="month">          
            <p class="p4">月</p>
            <input type="text" class="data" v-model="data">           
            <p class="p5">日</p>
            <input type="text" placeholder="请输入您的手机号" class="inp1" v-model="number">
            <input type="text" placeholder="请输入您的邮箱" class="inp2" v-model="mailbox">
            <input type="text" placeholder="请输入您的签名" class="inp3"v-model="autograph">
            <div class="modify" @click="Preservation">保存修改</div>
        </div>
</template>
<script>
export default {
    data() {
        var numberz = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
        var mailboxz = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
        return {
            imageUrl: '',
            sex:1,
            year:'',//年
            month:'',//元
            data:'',//日
            number:'',//手机号
            mailbox:'',//邮箱
            autograph:'',//签名
        };
    },
    methods: {
        //这个是发送成功返回的数据
      handleAvatarSuccess(res, file) {
          console.log(file)
          console.log(res)
        this.imageUrl = URL.createObjectURL(file.raw);
         console.log(this.imageUrl)
      },
      beforeAvatarUpload(file){
        console.log(file)
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      bbs(file, fileList){
          console.log(file.File)
           console.log(fileList)
      },
      //这个是点击提交判断并进行提交
      Preservation(){
           var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
           var myree = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
           var formData=new FormData()
            formData.append("id","1");
            formData.append("number","1");
            formData.append("username","1");
            formData.append("nickname","1");
            formData.append("phone",this.number);
            formData.append("email",this.mailbox);
            formData.append("sex",this.sex);
            formData.append("birthday",this.year+'/'+this.month+'/'+this.data);
            console.log(formData.get("birthday"))
            formData.append("autograph",this.autograph);
            if (myreg.test(this.number)) {
                console.log(this.number)
                if (myree.test(this.mailbox)) {
                    this.$axios.post("/user/updateStudent", formData)
                    .then(data => {
                        console.log(data)
                    });
                }else{
                    return false;
                    alert("邮箱不正确")
                }
            } else {
                alert("手机号不正确")
                 return false;
            }
      }
    },
    mounted() {
    },
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
        #account .jpg[data-v-552133a6]{
            left: 170px;
            top: 78px;
        }
    </style>   
