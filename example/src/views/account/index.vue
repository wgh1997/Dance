<template>
  <div class="about">
      <div class="about_head">
          <ul>
              <li>
                  <span :class="{'change':tabId==0}">
                       <div>
                           <a href="#" @click="tabId=0">个人资料</a>
                        </div>
                  </span>
              </li>
              <li>
                  <span :class="{'change':tabId==1}">
                      <a href="#" @click="tabId=1">修改密码</a>
                  </span>
              </li>
              <li>
                  <span :class="{'change':tabId==2}">
                      <a href="#" @click="tabId=2">绑定账号</a>
                  </span>
              </li>
          </ul>
      </div>
        <div class="about_content">
        <div v-show="tabId===0">
            <personaldata></personaldata>
        </div>
        <div v-show="tabId===1">
            <Change_Password></Change_Password>
        </div>
        <div v-show="tabId===2">
           <Bind_account></Bind_account>
        </div>
      </div>
  </div>
</template>
<script scoped>
import personaldata from './personaldata';
import Change_Password from './Change_Password';
import Bind_account from './Bind_account';
const components={
    personaldata,
    Change_Password,
    Bind_account
}
export default {
        data(){
            return{
                tabId:0,
                bbs:1
            }
         },
         components
}
</script>
<style>
  *{
    margin: 0;
    padding:0;
  }
.about{
    position: relative;
    width:960px;
    height:674px;
    background:rgba(242,242,242,1);
}
.about_head{
      width:960px;
      height:76px;
      border-bottom:1px solid #C2C2C2;
}
</style>
