<template>
  <div class="home">
    <h1>Hello</h1>
    <div class="links">
      <router-link @click="goToDashboard" to="/posts">Go To Posts</router-link>
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
      console.log(this.$route);
      this.$route.push('/posts');
    },
  },
};
</script>

<style>
.home {
  grid-column: 2 / -2;
}
</style>
