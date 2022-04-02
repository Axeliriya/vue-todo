<template>
  <div class="app">
    <header class="header">
      <h1 class="title">Post</h1>
      <div class="head">
        <custom-input placeholder="Search" />
        <custom-btn @click="fetchPosts">Get Post</custom-btn>
        <custom-btn @click="showModal">Create Post</custom-btn>
      </div>
    </header>
    <div class="loader" v-if="isLoading"><span>Loading...</span></div>
    <post-list v-else :posts="posts" @remove="removePost" />
    <custom-modal v-model:show="show"
      ><post-form v-model:show="show" @create="createPost"
    /></custom-modal>
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
        this.isLoading = false;
      } catch (e) {
        console.log(e?.message);
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
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
  padding: 15px;
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

.loader {
  grid-column: 2/ -2;
  text-align: center;
}
</style>
