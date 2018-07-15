import Vue from 'vue';

import './bootstrap';
import router from './router';

import App from './components/App';
import store from './store/index';
import icons from './helpers/icons';


const app = new Vue({
    router,
    store,
    components: {
        App
    }
}).$mount('#app');
