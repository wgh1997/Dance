<template>
  <div class="about">
      <div class="about_head">
          <ul>
              <li>
                  <span :class="{'change':tabId==0}">
                       <div>
                           <a href="#" @click="tabId=0">全部文件</a>
                        </div>
                  </span>
              </li>
              <li>
                  <span :class="{'change':tabId==1}">
                      <a href="#" @click="tabId=1">图片</a>
                  </span>
              </li>
              <li>
                  <span :class="{'change':tabId==2}">
                      <a href="#" @click="tabId=2">文档</a>
                  </span>
              </li>
          </ul>
      </div>
        <div class="about_content">
        <div v-show="tabId===0">
            <all></all>
        </div>
        <div v-show="tabId===1">
            <tutu></tutu>
        </div>
        <div v-show="tabId===2">
            <file></file>
        </div>
      </div>
  </div>
</template>
<script>
import all from './all.vue';
import tutu from './tutu.vue';
import file from './file.vue';
const components={
   all,
    tutu,
   file 
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
.about_head li span{
    text-align:center;
}
</style>
