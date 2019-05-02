import axios from "axios"
export default {
       state:{
                new:[],
                aboutnew:""
       },
       mutations:{
        GetTEXT(state,obj){
            state.new = obj
            //console.log(state.new)
                
        },
        Getabout(state,obj){
              state.aboutnew = obj.imageUuid
        }
       },
       actions:{
        Getlesson(context){
              axios.post("/home/new/list",{
                "pageSize":"7",
                "pageNum":"2",
              }).then(function(data){
                  //console.log(data)
                    var obj = data.list
                      context.commit("GetTEXT",obj)
              })
        },
        GetABOUT(context){
                 axios.get("/home/about/id",{
                      params:{
                           id:1
                      }
                 }).then(function(data){
                     console.log(data)
                    context.commit("Getabout",data)
                 })
        }
       }

}