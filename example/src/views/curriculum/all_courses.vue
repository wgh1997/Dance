<template>
    <div class="curriculum_a">
        <ul>
            <li v-for="imit in bba" @click="fn">
                <div class="Introduction_diagram">
                    <img src="" alt="">
                </div>
                <p>{{imit.name}}</p>
                <span>{{imit.teacher}}</span><br>
                <a>{{imit.introduce}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
     name: "all_courses",
     data(){
        return{  
            bba:[{
                name:"震感舞教学",
                src:"",
                introduce:"刘老师在不遗余力展示舞姿",
                teacher:"刘思嘉老师"

            },{
                name:"震感舞教学",
                src:"",
                introduce:"刘老师在不遗余力展示舞姿",
                teacher:"刘思嘉老师"
            }]
        }
    },
    methods: {
        fn(){
            console.log("我要运行啦")
        }
    },
    mounted() {
        console.log(1)
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