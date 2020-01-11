<template>
  <section class="container">
    <v-btn to="/signup">Sign Up</v-btn>
    <v-btn to="/login">Log in</v-btn>
    <v-btn @click="logout">Log out</v-btn>
  </section>
</template>

<script>
export default {
  auth: false,
  methods: {
    logout() {
      this.$auth.logout("local");
    }
  },
  mounted() {
    this.$axios.get("/users").then(res => {
      console.log(res);
    });
  }
};
</script>

<style>
</style>

