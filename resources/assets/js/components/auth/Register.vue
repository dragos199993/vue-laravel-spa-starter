<template>

    <div class="container">
        <div class="row">
            <template v-if="isLoading">
                <font-awesome-icon v-if="isLoading" icon="spinner" spin size="4x"/>
            </template>
            <template v-else>
                <div class="col-sm-6 offset-sm-3 mt-5">
                    <div class="text-center">
                            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <form @submit.prevent="register" method="POST" class="mt-5 pt-5 form-signin">
                                <div class="alert alert-danger" role="alert" v-if="authError">
                                    {{ authError }}
                                </div>
                                <input type="hidden" name="_token" :value="csrf">

                                <label for="name" class="sr-only">Name</label>
                                <input v-model="state.name" type="text" id="name" name="name" class="form-control" placeholder="Your name" required autofocus>

                                <label for="email" class="sr-only">Email address</label>
                                <input v-model="state.email" type="text" id="email" name="email" class="form-control" placeholder="Email address" required>

                                <label for="password" class="sr-only">Password</label>
                                <input v-model="state.password" type="password" id="password" name="password" class="form-control" placeholder="Password" required>

                                <label for="password_confirmation" class="sr-only">Password confirmation</label>
                                <input v-model="state.password_confirmation" type="password" id="password_confirmation" name="password_confirmation" class="form-control" placeholder="Password confirmation" required>

                                <button class="btn btn-md btn-primary btn-block" type="submit">Register</button>

                            </form>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped>
 svg{
         margin: 20vh auto;
 }
</style>

<script>
    import { login } from '../../helpers/auth.js';
    export default{ 
        data: () => ({
            state:{
                name: '',
                email: '',
                password: '',
                password_confirm: ''
            },
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        }),
        methods: {
            register() {
                this.$store.dispatch('login');
                login(this.state)
                    .then( res => {
                        this.$store.commit('loginSuccess', res);
                        this.$router.push({path: "/"});
                    })
                    .catch( err => {
                        this.$store.commit('loginFailed', {err});
                    });
            }
        },
        computed: {
            authError(){
                return this.$store.getters.authError;
            },
            isLoading(){
                return this.$store.getters.isLoading;
            }
        }
    }
</script>
