<template>
  <div class="about">
      <div class="about_head">
          <ul>
              <li>
                  <span :class="{'change':tabId==0}">
                       <div>
                           <a href="#" @click="tabId=0">班级消息</a>
                        </div>
                  </span>
              </li>
              <li>
                  <span :class="{'change':tabId==1}">
                      <a href="#" @click="tabId=1">系统消息</a>
                  </span>
              </li>
          </ul>
      </div>
        <div class="about_content">
        <div v-show="tabId===0">
            <classNews></classNews>
        </div>
        <div v-show="tabId===1">
            <system></system>
        </div>
      </div>
  </div>
</template>
<script>
import classNews from './classNews.vue';
import system from './system.vue';

const components={
   classNews,
   system
}
export default {
    name:'index',
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
