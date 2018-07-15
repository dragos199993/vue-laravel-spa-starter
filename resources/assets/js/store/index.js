import Vue from 'vue';
import Vuex from 'vuex';

import {state} from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);


const storeData =  {
    state,
    getters,
    mutations,
    actions
}
export default new Vuex.Store(storeData);