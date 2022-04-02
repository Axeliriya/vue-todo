<template>
  <div class="home">
    <h1>Hello</h1>
    <div class="links">
      <router-link to="/posts">Go To Posts</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
};
</script>

<style>
.home {
  grid-column: 2 / -2;
}
</style>
