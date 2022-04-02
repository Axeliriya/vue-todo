<template>
  <ul class="posts">
    <post-item />
  </ul>
</template>

<script>
import PostItem from '@/components/PostItem';

export default {
  components: {
    PostItem,
  },
};
</script>

<style scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  background-color: gainsboro;
}
</style>
