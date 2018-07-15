import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from './store/index';

Vue.use(VueRouter);



const router = new VueRouter({
	mode: 'history',
	routes
});
router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const currentUser = store.state.currentUser;
    if(requiresAuth && !currentUser){
        next('/login');
    }else if (to.path == '/login' && currentUser){
        next('/');
    }else{
        next();
    }
});

export default router;