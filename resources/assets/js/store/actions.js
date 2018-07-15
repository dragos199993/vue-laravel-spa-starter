import { resolve } from "upath";

export default {
    login(context) {
        context.commit("login");
    },
    register(context) {
        context.commit("register");
    },
    create_message(context, payload) {
        return new Promise(( resolve, reject) => {
            axios
                .post("/api/new", {
                    'content': payload
                }, { headers: {
                    "Authorization": `Bearer ${context.state.currentUser.token}`
                }})
                .then(res => resolve(res))
                .catch(err => reject(err));
        });
    }
};
