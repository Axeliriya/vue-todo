<template>
  <ul class="posts">
    <post-item v-for="post in posts" :post="post" :key="post.id" />
  </ul>
</template>

<script>
import PostItem from '@/components/PostItem';

export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
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
