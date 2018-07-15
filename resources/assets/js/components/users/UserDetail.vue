<template>
    <div class="user-detail">
        <h1>Welcome</h1>
    </div>
</template>

<script>
    export default {
        name: 'userdetail',
        created(){
            console.log(this.currentUser.token);
            axios.get(`/api/${this.$route.params.email}`, {headers: {"Authorization": `Bearer ${this.currentUser.token}`}})
                .then( res => console.log(res.data));
        },
        computed: {
            currentUser(){
                return this.$store.getters.currentUser;
            }
        }
    }
</script>