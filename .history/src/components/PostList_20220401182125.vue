<template>
  <ul class="posts"></ul>
</template>

<script>
export default {};
</script>

<style scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  background-color: gainsboro;
}
</style>
