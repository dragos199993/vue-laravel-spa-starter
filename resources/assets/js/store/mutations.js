export default {
    login(state) {
        state.loading = true;
        state.auth_error = null;
    },
    register(state) {
        state.loading = true;
        state.auth_error = null;
    },
    loginSuccess(state, payload) {
        state.loading = false;
        state.auth_error = null;
        state.isLoggedIn = true;
        state.currentUser = Object.assign({}, payload.user, {
            token: payload.access_token
        });
        localStorage.setItem("user", JSON.stringify(state.currentUser));
    },
    loginFailed(state, payload) {
        state.loading = false;
        state.auth_error = payload.err;
    },
    logout(state) {
        state.loading = false;
        state.isLoggedIn = false;
        state.currentUser = null;
        localStorage.removeItem("user");
    },
    populateUserList(state, payload){
        state.userList = payload;
    }
};
