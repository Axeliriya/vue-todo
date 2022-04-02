<template>
  <header class="header">
    <h1 class="title">Posts</h1>
    <div class="head">
      <custom-input v-model="searchQuery" placeholder="Search..." />
      <custom-select v-model="selectedSort" :options="sortOptions" />
      <custom-btn @click="showModal">Create Post</custom-btn>
    </div>
  </header>
  <main class="main">
    <div class="loader" v-if="isLoading"><span>Loading...</span></div>
    <post-list v-else :posts="sortedAndSearchedPosts" @remove="removePost" />
    <div ref="observer" class="pages">
      <span v-if="isLoadingPage">Loading...</span>
    </div>
    <transition name="fade">
      <custom-modal v-model:show="show"
        ><post-form v-model:show="show" @create="createPost"
      /></custom-modal>
    </transition>
  </main>
  <footer class="footer"></footer>
</template>

<script>
import axios from 'axios';
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
  methods: {},
  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) =>
        a[this.selectedSort]?.localeCompare(b[this.selectedSort]),
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(({ title }) =>
        title.toLowerCase().includes(this.searchQuery.toLowerCase()),
      );
    },
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

/* .pages {
  display: flex;
  justify-content: center;
  gap: 10px;
  grid-column: 2/ -2;
} */

/* .pages__btn {
  width: 50px;
} */

/* .pages__btn--current {
  background: rgb(3, 2, 53, 0.7) !important;
} */

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
