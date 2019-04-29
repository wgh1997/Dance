const store = {
    state: {
        age : 10 ,
        num : 100,
    },
    mutations: {
        addAge(state,params){
            state.age += params ;
        },
        addNum(state,params){
            state.num += params ;
        }
    },
    getters: {},
    actions: {
        ageAction(params){
            let {commit} = params ;
            // console.log(params) ;
            commit("addAge",10);
            commit("addNum",100);
        }
    },
    
}

export default store ;