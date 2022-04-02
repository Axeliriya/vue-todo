<template>
  <div class="home">
    <h1>Hello</h1>
    <div @click="goToDashboard" class="links">
      sdjhfgjsdh
      <router-link to="/posts">Go To Posts</router-link>
    </div>
  </div>
</template>

<script>
export default {
  //   computed: {
  //     username() {
  //       // We will see what `params` is shortly
  //       return this.$route.params.username;
  //     },
  //   },
  methods: {
    goToDashboard() {
      this.$router.push('/posts');
    },
  },
};
</script>

<style>
.home {
  grid-column: 2 / -2;
}
</style>
