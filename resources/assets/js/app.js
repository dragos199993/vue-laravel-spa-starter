import Vue from 'vue';
import Vuex from 'vuex';

import './bootstrap';
import router from './router';

import App from './components/App';
import store from './store/index';

const app = new Vue({
    router,
    store,
    components: {
        App
    }
}).$mount('#app');
