<template lang="">
  <div class="nav">
    <custom-btn @click="$router.push('/')">Home</custom-btn>
    <custom-btn @click="$router.push('/posts')">Posts</custom-btn>
    <custom-btn @click="$router.push('/store')">Posts</custom-btn>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.nav {
  display: flex;
  grid-column: 1 / -1;
  gap: 10px;
  justify-content: end;
}
</style>
