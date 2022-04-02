<template>
  <div class="app">
    <header class="header">
      <h1 class="title">Post</h1>
      <div class="head">
        <custom-input v-model="searchQuery" placeholder="Search" />
        <custom-select v-model="selectedSort" :options="sortOptions" />
        <custom-btn @click="showModal">Create Post</custom-btn>
      </div>
    </header>
    <main class="main">
      <div class="loader" v-if="isLoading"><span>Loading...</span></div>
      <post-list v-else :posts="sortedAndSearchedPosts" @remove="removePost" />
      <custom-modal v-model:show="show"
        ><post-form v-model:show="show" @create="createPost"
      /></custom-modal>
    </main>
  </div>
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
      posts: [],
      show: false,
      isLoading: false,
      searchQuery: '',
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'Name' },
        { value: 'body', name: 'Description' },
      ],
    };
  },
  methods: {
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
    async fetchPosts() {
      this.isLoading = true;
      try {
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?_limit=10',
        );
        this.posts = [...this.posts, ...data];
      } catch (e) {
        console.log(e?.message);
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) =>
        a[this.selectedSort]?.localeCompare(b[this.selectedSort]),
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(({ title }) =>
        title.includes(this.searchQuery),
      );
    },
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
  grid-template-rows: auto 1fr;
  padding: 15px;
  height: 100vh;
  background-color: #e7f5f1;
}

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
  grid-column: 2/ -2;
}

.loader {
  text-align: center;
}
</style>
