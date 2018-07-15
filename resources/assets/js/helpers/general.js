export function interceptor(store, router){
    axios.interceptors.response.use(null, error => {
        if(error.response.stauts == 401){
            store.commit('logout');
            router.push('/login');
        }

        return Promise.reject(error);
    });
}