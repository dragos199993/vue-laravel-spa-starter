<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h2 class="text-center">All users {{messages.length}}</h2>
            
                <ul class="list-group col-sm-6 offset-sm-3 mt-1">
                        <li v-for="message in messages" class="list-group-item" :key="message.id">
                            Name: <a :href="message.email">{{message.name }}</a>, 
                            Created at: {{ message.created_at }}
                        </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { list } from '../helpers/data.js';
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