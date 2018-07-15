<template>
    <div class="user-detail">
        <h1>Welcome</h1>
        <ul class="list-group">
            <li class="list-group-item" v-for="message in messages" :key="message.id">
                {{ message.content }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "userdetail",
  data() {
    return {
      messages: []
    };
  },
  created() {
    if (this.messages.length) {
      this.messages = this.messages.find(
        message => message.email == this.$route.params.email
      );
    } else {
      axios
        .get(`/api/${this.$route.params.email}`, {
          headers: {
            Authorization: `Bearer ${this.currentUser.token}`
          }
        })
        .then(res => {
          this.messages = res.data.user;
        });
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  }
};
</script>