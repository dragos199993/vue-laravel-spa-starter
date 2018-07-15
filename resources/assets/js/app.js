import Vue from 'vue';

import './bootstrap';
import router from './router';
import store from './store/index';
import icons from './helpers/icons';
import { interceptor } from './helpers/general';

import App from './components/App';


interceptor(store, router);


const app = new Vue({
    router,
    store,
    components: {
        App
    }
}).$mount('#app');
