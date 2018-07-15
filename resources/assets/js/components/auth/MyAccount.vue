<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h1>Welcome, {{ name }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
    import { list } from '../../helpers/data.js';
    export default {
        data(){
            return{
                name: this.$store.getters.currentUser.name
            }
        }
    }
</script>