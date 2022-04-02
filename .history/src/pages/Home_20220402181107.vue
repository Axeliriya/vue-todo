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
      // We will see what `params` is shortly
      return this.$route.params.username;
    },
  },
  methods: {
    goToDashboard() {
      if (isAuthenticated) {
        this.$router.push('/dashboard');
      } else {
        this.$router.push('/login');
      }
    },
  },
};
</script>

<style>
.home {
  grid-column: 2 / -2;
}
</style>
