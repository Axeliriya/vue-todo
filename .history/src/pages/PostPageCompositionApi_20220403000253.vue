<template>
  <header class="header">
    <!-- <h1 class="title">Posts</h1>
    <div class="head">
      <custom-input v-model="searchQuery" placeholder="Search..." />
      <custom-select v-model="selectedSort" :options="sortOptions" />
      <custom-btn @click="showModal">Create Post</custom-btn>
    </div> -->
  </header>
  <main class="main">
    <!-- <div class="loader" v-if="isLoading"><span>Loading...</span></div>
    <post-list v-else :posts="sortedAndSearchedPosts" @remove="removePost" />
    <div ref="observer" class="pages">
      <span v-if="isLoadingPage">Loading...</span>
    </div>
    <transition name="fade">
      <custom-modal v-model:show="show"
        ><post-form v-model:show="show" @create="createPost"
      /></custom-modal>
    </transition> -->
  </main>
  <footer class="footer"></footer>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import { usePosts } from '@/hooks/usePosts';
import PostList from '@/components/PostList';
import PostForm from '@/components/PostForm';

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      show: false,
      sortOptions: [
        { value: 'title', name: 'Name' },
        { value: 'body', name: 'Description' },
      ],
    };
  },
  setup(props) {
    const { posts, isLoading, totalPages } = usePosts(5);
    const { posts, isLoading, totalPages } = usePosts(5);

    return {
      posts,
      isLoading,
      totalPages,
    };
  },
};
</script>

<style scoped>
.header {
  grid-template-columns: 1fr;
  grid-column: 2/ -2;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main {
  display: grid;
  grid-auto-rows: min-content;
  gap: 20px;
  grid-column: 2/ -2;
}

.loader {
  text-align: center;
}

.footer {
  padding: 15px;
  grid-column: 2/ -2;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(500px);
}
</style>
