<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {};
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
  grid-template-rows: auto 1fr auto;
  padding: 15px;
  min-height: 100vh;
  background-color: #e7f5f1;
}
</style>
