<template>
  <div class="about">
      <div class="about_head">
          <ul>
              <li>
                  <span :class="{'change':tabId==0}">
                       <div>
                           <a href="#" @click="tabId=0">已支付</a>
                        </div>
                  </span>
              </li>
              <li>
                  <span :class="{'change':tabId==1}">
                      <a href="#" @click="tabId=1">未支付</a>
                  </span>
              </li>
              <li>
                  <span :class="{'change':tabId==2}">
                      <a href="#" @click="tabId=2">已过期</a>
                  </span>
              </li>
          </ul>
      </div>
        <div class="about_content">
        <div v-show="tabId===0">
           <Paid></Paid>
        </div>
        <div v-show="tabId===1">
            <Unpaid></Unpaid>
        </div>
        <div v-show="tabId===2">
           <Expired>
               
           </Expired>
        </div>
      </div>
  </div>
</template>
<script>
import Paid from './Paid';
import Unpaid from './Unpaid';
import Expired from './Expired';
const components={
    Paid,
    Unpaid,
    Expired
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
<style scoped>
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
