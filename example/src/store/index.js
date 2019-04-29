import Vue from "vue";
import Vuex from "vuex";
import homeStore from "./home/store";
import personalStore from "./personal/store";


Vue.use(Vuex);


const store = new Vuex.Store({
    modules : {
        homeStore,
        personalStore,

    }
})

export default store ;