<template>
    <div class="curriculum_a">
        <ul>
            <li v-for="imit in curriculum" @click="fn">
                <div class="Introduction_diagram">
                    <img :src="imit.courseCover" alt="">
                </div>
                <p>{{imit.courseName}}</p>
                <span>{{imit.teacherName}}</span><br>
                <a>{{imit.courseText}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
     name: "all_courses",
     data(){
        return{  
            curriculum:[]
        }
    },
    methods: {
        fn(){
            console.log("我要运行啦")
        }
    },
    created() {
        this.$axios.get("/test/login").then(res=>{
            console.log(res)
        })
       this.$axios.get("/course/my_courses",{
        params:{
            pageNum:1,
            pageSize:3,

        }      
       }).then(data=>{
           console.log(data.list)
           this.curriculum=data.list;
          
       }) 
    },

}
</script>
<style>
    *{
        margin: 0;
        padding:0;
    }
    .curriculum_a ul{

    }
    .curriculum_a li{
        width:370px;
        height:94px;
        float: left;
        margin:67px 0 0 67px;
    }
    .curriculum_a li p{
        height:26px;
        font-size:26px;
        font-weight:normal;
        color:rgba(0,0,0,1);
        margin: 0px 0 10px 0;
    }
    .curriculum_a li span{
         float: left;
        height:16px;
        font-size:16px;
        font-weight:normal;
        color:rgba(135,135,135,1);
    }
    .curriculum_a li a{
        height:15px;
        font-size:14px;
        font-weight:normal;
        color:rgba(135,135,135,1);
        display: block;
        margin: 17px 0 0px 0;
    }
    .Introduction_diagram{
        width:160px;
        height:94px;
        float: left;
        margin: 0px 15px 1px 0px;
    }
    .Introduction_diagram img{
        width:100%;
        height:100%;
    }
</style>