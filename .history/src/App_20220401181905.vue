<template>
  <div class="app">
    <div class="overlay">
      <div class="modal">
        <form class="form" @submit.prevent>
          <input
            v-bind:value="title"
            @input="title = $event.target.value"
            class="input"
            type="text"
            placeholder="Name"
          />
          <input
            v-bind:value="body"
            @input="body = $event.target.value"
            class="input"
            type="text"
            placeholder="Description"
          />
          <div class="button__wrapper">
            <button class="button" @click="createPost">Create Post</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.2);
  display: flex;
  justify-content: end;
}

.modal {
  padding: 15px;
  background-color: #fff;
}

.form {
  display: grid;
  grid-template-columns: 1fr;
}

.input {
  background-color: transparent;
  border: none;
  padding: 32px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
}

.button__wrapper {
  padding: 32px;
}

.button {
  width: 100%;
  border: none;
  background: rgb(3, 2, 53, 0.4);
  border-radius: 10px;
  padding: 16px;
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  cursor: pointer;
}

.button:hover {
  background: rgb(3, 2, 53, 0.5);
}

.posts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  background-color: gainsboro;
}

.post {
  border-radius: 15px;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
}

.post__name {
  padding: 24px 16px 16px 16px;
  border-radius: 15px 15px 0 0;
  background-color: #a5ddb8;
}

.post__description {
  padding: 12px 16px 16px 16px;
  border-radius: 0 0 15px 15px;
  background-color: #ffffff;
}
</style>
