<template>
    <div class="user-list">
        <h2 class="text-center">All users {{messages.length}}</h2>
    
        <ul class="list-group col-sm-6 offset-sm-3 mt-1">
                <li v-for="message in messages" class="list-group-item" :key="message.id">
                    Name: <router-link :to="{path: '/users/' + message.email}">{{ message.name }}</router-link>, 
                    Created at: {{ message.created_at }}
                </li>
        </ul>
    </div>
</template>

<script>
    import { list } from '../../helpers/data.js';
    export default {
        data(){
            return{
                messages: []
            }
        },
        mounted() {
            list().then(res => {
                this.$store.commit('populateUserList', res);
                this.messages = this.$store.getters.userList;
            }).catch( err => console.log(err));
        },
    }
</script>