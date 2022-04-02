<template>
  <div class="home" @click="goToDashboard">
    <h1>Hello</h1>
    <div class="links">
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
      console.log(this.$router);
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
