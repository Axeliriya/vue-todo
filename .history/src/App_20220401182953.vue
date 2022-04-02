<template>
  <div class="app">
    <modal></modal>
    <post-list></post-list>
  </div>
</template>

<script>
import PostList from '@/components/PostList';
import Modal from '@/components/Modal';
import ModalVue from '@/components/Modal';

export default {
  components: {
    PostList,
    Modal,
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
      title: '',
      body: '',
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
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
  padding: 15px;
}
</style>
