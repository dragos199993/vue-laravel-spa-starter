import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const storeData =  {
    state: {
        welcomeMessage: 'Welcome to vue-spa-starter'
    },
    getters: {
        welcome(state){
            return state.welcomeMessage
        }
    },
    mutations: {},
    actions: {}
}
export default new Vuex.Store(storeData);