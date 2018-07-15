export default {
    currentUser(state) {
        return state.currentUser;
    },
    isLoggedIn(state) {
        return state.isLoggedIn;
    },
    isLoading(state) {
        return state.loading;
    },
    authError(state) {
        return state.auth_error;
    },
    userList(state) {
        return state.userList;
    }
};
