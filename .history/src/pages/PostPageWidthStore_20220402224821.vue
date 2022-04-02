<template>
  <header class="header">
    <h1 class="title">Store</h1>
    <div class="head">
      <!-- <custom-input v-model="searchQuery" placeholder="Search..." /> -->
      <!-- <custom-select v-model="selectedSort" :options="sortOptions" /> -->
      <custom-btn @click="showModal">Create Post</custom-btn>
    </div>
  </header>
  <!-- <main class="main"> -->
  <div class="loader" v-if="isLoading"><span>Loading...</span></div>
  <post-list v-else :posts="sortedAndSearchedPosts" @remove="removePost" />
  <!-- <div ref="observer" class="pages">
      <span v-if="isLoadingPage">Loading...</span>
    </div> -->
  <transition name="fade">
    <custom-modal v-model:show="show"
      ><post-form v-model:show="show" @create="createPost"
    /></custom-modal>
  </transition>
  <!-- </main> -->
  <footer class="footer">
    {{ $store.state.post.limit }}{{ sortedAndSearchedPosts }}
  </footer>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
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
    };
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
    }),
    ...mapActions({
      fetchPosts: 'post/fetchPosts',
      loadMorePosts: 'post/loadMorePosts',
    }),
    createPost(post) {
      this.posts.push(post);
      this.show = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(({ id }) => id !== post.id);
    },
    showModal() {
      this.show = true;
    },
  },
  mounted() {
    this.fetchPosts();
    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0,
    // };
    // const cb = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.page <= this.totalPages) {
    //     // this.loadMorePosts();
    //   }
    // };
    // const observer = new IntersectionObserver(cb, options);
    // observer.observe(this.$refs.observer);
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isLoading: state => state.post.isLoading,
      isLoadingPage: state => state.post.isLoadingPage,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      searchQuery: state => state.post.searchQuery,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
    }),
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
