<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <ul class="navbar-nav mr-auto">
                <li class="nav-item ">
                    <router-link class="nav-link" to="/" v-once>Home</router-link>
                </li>
                <li class="nav-item"  v-if="currentUser">
                    <router-link class="nav-link" to="/users" v-once>Users</router-link>
                </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <template v-if="!currentUser">
                <li class="nav-item">
                    <router-link class="nav-link" to="/register" v-once>Register</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/login" v-once>Login</router-link>
                </li>
            </template>
            <template v-else>
                <div class="dropdown">
                    <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ currentUser.name }}
                    </button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <router-link  class="dropdown-item" to="/profile" v-once>Profile</router-link>
                        <a  class="dropdown-item" @click="logout" v-once>Logout</a>
                    </div>
                </div>
            </template>
        </ul>
    </nav>
</template>

<script>
    
    export default {
        methods: {
            logout(){
                this.$store.commit('logout');
                this.$router.push("/");
            }
        },
        computed: {
            currentUser() {
                return this.$store.getters.currentUser;
            }
        }
    }

</script>
