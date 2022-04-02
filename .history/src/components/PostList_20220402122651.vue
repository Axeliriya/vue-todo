<template>
  <ul class="posts" v-if="posts.length > 0">
    <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </ul>
  <div class="posts__error" v-else>
    <span>There are no posts. Create a new post</span>
  </div>
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
  grid-template-columns: 1fr;
  gap: 20px;
  grid-column: 2 / -2;
}

.posts__error {
  text-align: center;
}

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 1s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
