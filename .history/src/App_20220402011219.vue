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
    <post-list :posts="posts" @remove="removePost" />
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
      posts: [
        { id: Date.now(), title: 'Post about HTML5', body: 'For example' },
        { id: Date.now() + 1, title: 'Post about CSS3', body: 'For example' },
        { id: Date.now() + 2, title: 'Post about React', body: 'For example' },
        { id: Date.now() + 3, title: 'Post about Redux', body: 'For example' },
        { id: Date.now() + 4, title: 'Post about Vue 3', body: 'For example' },
        { id: Date.now() + 5, title: 'Post about Vuex', body: 'For example' },
      ],
      show: false,
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
      try {
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?_limit=10',
        );
        this.posts = ;
      } catch (e) {
        console.log(e?.message);
      }
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
  padding: 15px;
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
</style>
