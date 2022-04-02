<template>
  <div class="home">
    <h1 @click="goToDashboard">Hello</h1>
    <div class="links">
      <router-link to="/posts">Go To Posts</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.path;
    },
  },
  methods: {
    goToDashboard() {
      console.log(this.$route);
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
