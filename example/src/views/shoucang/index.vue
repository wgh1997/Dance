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
              
              
          </ul>
      </div>
        <div class="about_content">
        <div v-show="tabId===0">
            <shipin></shipin>
        </div>
        
      </div>
  </div>
</template>
<script>

import shipin from './shipin.vue';
const components={
  shipin
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
</style>
