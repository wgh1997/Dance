  import axios from "axios"
export default{
        state:{
            phoneOrEmail: localStorage.userName,
                password:"",
                userId:localStorage.userId,
                ImageData:""
        },
          mutations:{
            
          },
        actions:{
            Login(context,obj){
                  console.log(obj.userName)
                axios.post("http://188.131.188.119/sys/student/login",{
                    phoneOrEmail:obj.userName,
                   password:obj.passWord      
                }).then(function(data){
                       console.log(data)
                         
                })
            },
            Register(context,obj){
                  console.log(obj)
                 axios.post("http://188.131.188.119/sys/student/register",{
                    email:obj.email,
                    password:obj.password,
                    captchaCode:obj.num
                 }).then(function(data){
                          console.log(data)
                 })
            },
            GetCode(context,obj){
                     axios.get("http://188.131.188.119/sys/captcha.jpg",{responseType: 'Blob'

                     }).then(function(data){
                          obj.sucess(data)
                     })
            }
        }
        
}