import axios from "axios"
export default{
        state:{
            //phoneOrEmail: localStorage.userName,
                // password:"",
                userId:localStorage.userId,
                //ImageData:""
        },
          mutations:{
            CHANGE(state,obj){

                    state. userId =localStorage.userId= obj.uid
                      
            }
          },
        actions:{
            Login(context,obj){
                 // console.log(obj.userName)
                axios.post("/sys/student/login",{
                    phoneOrEmail:obj.userName,
                   password:obj.passWord      
                }).then(function(data){
                       console.log(data,11111111111111)
                           obj.success(data)
                        if(data.code === 0){
                               
                             context.commit("CHANGE",data)
                        }
                         
                })
            },
            Register(context,obj){
                  console.log(obj)
                 axios.post("/sys/student/register",{
                    email:obj.email,
                    password:obj.password,
                    captchaCode:obj.num
                 }).then(function(data){
                           obj.success(data)
                 })
            },
            GetCode(context,obj){
                      axios({
                          method:"post",
                          url:"/sys/my_courses",
                          data:{
                              pageNum:1,
                              pageSize:2,
                          },
                          
                      }).then(function(data){
                          console.log(data)
                      })
            }
        }
        
}