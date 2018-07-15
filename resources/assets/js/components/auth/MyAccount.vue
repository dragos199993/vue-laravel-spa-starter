<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h1>Welcome, {{ name }}</h1>

                <div v-if="log.message" :class="log.type" role="alert">
                    {{ log.message}}
                </div>
                <form @submit.prevent="newMessage" action="/message" method="POST" class="mt-5 pt-5">
                    <h1 class="h3 mb-3 font-weight-normal">Send a message</h1>
                    <label for="message" class="sr-only">Message</label>
                    <textarea id="content" name="content" class="form-control" placeholder="Message" required autofocus v-model="content"></textarea>
                    <button class="btn btn-sm btn-primary mt-4 px-4" type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { list } from '../../helpers/data.js';
    export default {
        // mounted(){
        //     this.$store.dispatch('getMessages');
        // },
        data(){
            return{
                content: '',
                name: this.$store.getters.currentUser.name,
                log: {
                    message: '',
                    type: 'alert alert-info'
                }
            }
        },
        methods: {
            newMessage(){
                this.$store.dispatch('create_message', this.content)
                    .then( res =>  {if(res.status == 200){
                        this.log = {
                            message: 'Message posted with success!',
                            type: 'alert alert-success'
                        }    
                    }})
                    .catch(err => this.log = {
                        message: 'Oops! Message not send. Something went wrong.',
                        type: 'alert alert-error'
                        });
                this.content = '';
            }
        }
    }
</script>