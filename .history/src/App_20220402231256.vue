<template>
  <div class="app">
    <post-nav />
    <router-view />
  </div>
</template>

<script>
import PostNav from '@/components/PostNav';
export default {
  components: {
    PostNav,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
}

ul {
  list-style-type: none;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

.app {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto 1fr auto;
  padding: 15px;
  min-height: 100vh;
  background-color: #e7f5f1;
}
</style>
