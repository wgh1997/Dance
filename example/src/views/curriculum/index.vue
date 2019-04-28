<template>
  <div class="about">
      <div class="about_head">
          <ul>
              <li>
                  <span :class="{'change':tabId==0}">
                       <div>
                           <a href="#" @click="tabId=0">全部课程</a>
                        </div>
                  </span>
              </li>
              <li>
                  <span :class="{'change':tabId==1}">
                      <a href="#" @click="tabId=1">专题课程</a>
                  </span>
              </li>
              <li>
                  <span :class="{'change':tabId==2}">
                      <a href="#" @click="tabId=2">系统课程</a>
                  </span>
              </li>
          </ul>
      </div>
      <div class="about_content">
        <div v-show="tabId===0">
            <all_courses></all_courses>
        </div>
        <div v-show="tabId===1">
            <system_course></system_course>
        </div>
        <div v-show="tabId===2">
            <thematic_curriculum></thematic_curriculum>
        </div>
      </div>
  </div>
</template>
<script>
import all_courses from './all_courses';
import system_course from './system_course.vue';
import thematic_curriculum from './thematic_curriculum.vue';
import Vue from 'vue/dist/vue'
const components={
     all_courses,
    system_course,
    thematic_curriculum
}
export default {
         name: "index",
         data(){
            return{
                tabId:0,
            }
         },
        components,
        mounted() {
        },

}
</script>
<style>
  *{
    margin: 0;
    padding:0;
    list-style: none;
    text-decoration: none;
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
.about_head ul{
    padding: 32px 0 0 61px;
}
.about_head li{
    float: left;
    margin-right:44px;
}
.about_head li span{
    width:64px;
    height:25px;
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    display: block;
}
.change{
    width:64px;
    height:25px;
    font-size:16px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(52,147,102,1);
    border-bottom: 1px solid #349366;
    display: block;
}
.about_head li span{
    text-align:center;
}
</style>
