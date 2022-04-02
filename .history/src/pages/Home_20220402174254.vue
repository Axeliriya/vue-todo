<template>
  <div class="home">
    <h1>Hello</h1>
    <div class="links">
      <router-link to="/posts"><a>Go To Posts</a></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home {
  grid-column: 2 / -2;
}
</style>
